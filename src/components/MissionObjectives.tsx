import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target } from 'lucide-react';
import { soundManager } from './SoundSystem';

interface MissionObjectivesProps {
  objectives: string[];
  missionTitle: string;
}

export function MissionObjectives({ objectives, missionTitle }: MissionObjectivesProps) {
  const [completedObjectives, setCompletedObjectives] = useState<Set<number>>(new Set());

  const handleObjectiveToggle = (index: number, checked: boolean) => {
    const newCompleted = new Set(completedObjectives);
    
    if (checked) {
      newCompleted.add(index);
      // Son de succès quand un objectif est validé
      soundManager.playSound('success');
    } else {
      newCompleted.delete(index);
    }
    
    setCompletedObjectives(newCompleted);
  };

  const completionPercentage = Math.round((completedObjectives.size / objectives.length) * 100);

  return (
    <Card className="mission-card">
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
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <label 
                    htmlFor={`objective-${index}`}
                    className={`text-sm font-command cursor-pointer ${
                      isCompleted ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    {objective}
                  </label>
                </div>
                {isCompleted && (
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {completedObjectives.size === objectives.length && (
          <div className="text-center p-3 bg-primary/10 border border-primary/20 rounded">
            <div className="flex items-center justify-center gap-2 text-primary font-command">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">
                TOUS LES OBJECTIFS ACCOMPLIS - {completionPercentage}%
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}