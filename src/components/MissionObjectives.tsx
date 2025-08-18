import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target } from 'lucide-react';
import { soundManager } from './SoundSystem';

interface MissionObjectivesProps {
  objectives: string[];
  missionTitle: string;
  onMissionComplete?: () => void;
  canValidateObjectives?: boolean;
}

export function MissionObjectives({ objectives, missionTitle, onMissionComplete, canValidateObjectives = true }: MissionObjectivesProps) {
  const [completedObjectives, setCompletedObjectives] = useState<Set<number>>(new Set());

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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-command text-lg font-semibold text-foreground">
              OBJECTIFS DE MISSION
            </h3>
          </div>
          <Badge variant="outline" className="font-command">
            {completedObjectives.size}/{objectives.length} accomplis
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
                className={`flex items-start gap-3 p-3 rounded border ${
                  isCompleted ? 'bg-primary/5 border-primary/20' : 'border-border'
                }`}
              >
                <Checkbox
                  id={`objective-${index}`}
                  checked={isCompleted}
                  onCheckedChange={(checked) => handleObjectiveToggle(index, checked as boolean)}
                  className="mt-0.5 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <div className="flex-1">
                  <label 
                    htmlFor={`objective-${index}`}
                    className={`text-sm font-command cursor-pointer ${
                      isCompleted ? 'text-green-600 font-medium line-through' : 'text-foreground'
                    }`}
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

        {completedObjectives.size === objectives.length && (
          <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded animate-pulse">
            <div className="flex items-center justify-center gap-2 text-green-600 font-command">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-bold text-lg">
                🎉 MISSION VALIDÉE - TOUS OBJECTIFS ACCOMPLIS! 🎉
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}