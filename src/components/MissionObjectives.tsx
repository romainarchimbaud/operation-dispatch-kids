import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target, Siren } from 'lucide-react';
import { soundManager } from './SoundSystem';

interface MissionObjectivesProps {
  objectives: string[];
  missionTitle: string;
  onMissionComplete?: () => void;
  canValidateObjectives?: boolean;
}

export function MissionObjectives({ objectives, missionTitle, onMissionComplete, canValidateObjectives = true }: MissionObjectivesProps) {
  const [completedObjectives, setCompletedObjectives] = useState<Set<number>>(new Set());

  // Bloc d'objectifs validés façon MultiServiceObjectives
  const allCompleted = completedObjectives.size === objectives.length;

  const handleObjectiveToggle = (index: number, checked: boolean) => {
    if (!canValidateObjectives) return;
    const newCompleted = new Set(completedObjectives);
    
    if (checked) {
      newCompleted.add(index);
      // Son de succès quand un objectif est validé
      soundManager.playSound('success');
      
      // Vérifier si tous les objectifs sont maintenant complétés
      if (newCompleted.size === objectives.length) {
        setTimeout(() => {
          // Son de mission complète plus fort
          soundManager.playSound('mission-complete');
          onMissionComplete?.();
        }, 500);
      }
    } else {
      newCompleted.delete(index);
    }
    
    setCompletedObjectives(newCompleted);
  };

  const completionPercentage = Math.round((completedObjectives.size / objectives.length) * 100);

  return (
    <Card className={`mission-card transition-all duration-300 ${!canValidateObjectives ? 'opacity-60 grayscale pointer-events-none' : ''}`}>
      <div className="space-y-4">
        {/* Bloc d'objectifs validés façon MultiServiceObjectives */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Siren className="h-7 w-7 text-yellow-300" />
            <h3 className="font-command text-xl font-bold text-yellow-900 drop-shadow-lg tracking-wide">
              🚨 OBJECTIFS DE LA MISSION 🚨
            </h3>
          </div>
          <Badge variant="outline" className={`font-command text-lg px-4 py-2 bg-yellow-400/20 border-yellow-400 ${allCompleted ? 'text-green-600' : 'text-yellow-900'}`}>
            {completedObjectives.size}/{objectives.length} objectifs validés
          </Badge>
        </div>

        <div className="text-sm text-muted-foreground font-command mb-4">
          {missionTitle}
        </div>

        <div className="space-y-3">
          {objectives.map((objective, index) => {
            const isCompleted = completedObjectives.has(index);
            return (
              <div 
                key={index} 
                className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition-colors hover:bg-muted/50 ${
                  isCompleted ? 'bg-primary/5 border-primary/20' : 'border-border'
                } ${!canValidateObjectives ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => {
                  if (canValidateObjectives) {
                    handleObjectiveToggle(index, !isCompleted);
                  }
                }}
              >
                <Checkbox
                  id={`objective-${index}`}
                  checked={isCompleted}
                  onCheckedChange={(checked) => handleObjectiveToggle(index, checked as boolean)}
                  className="mt-0.5 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                  onClick={(e) => e.stopPropagation()} // Empêche le double clic
                />
                <div className="flex-1">
                  <label 
                    htmlFor={`objective-${index}`}
                    className={`text-sm font-command cursor-pointer select-none ${
                      isCompleted ? 'text-green-600 font-medium line-through' : 'text-foreground'
                    }`}
                    onClick={(e) => {
                      e.preventDefault(); // Empêche le comportement par défaut du label
                      if (canValidateObjectives) {
                        handleObjectiveToggle(index, !isCompleted);
                      }
                    }}
                  >
                    {objective}
                  </label>
                </div>
                {isCompleted && (
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {allCompleted && (
          <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded animate-pulse">
            <div className="flex items-center justify-center gap-2 text-green-600 font-command">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-bold text-lg">
                🎉 TOUS LES OBJECTIFS ONT ÉTÉ ACCOMPLIS! 🎉
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}