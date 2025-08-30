import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Zap, Ambulance, CheckCircle2 } from 'lucide-react';
import { MissionObjectives } from './MissionObjectives';
import { soundManager } from './SoundSystem';

interface MultiServiceObjectivesProps {
  objectivesByService: {
    pompiers: string[];
    police: string[];
    eagle: string[];
    samu: string[];
  };
  missionTitle: string;
  onMissionComplete?: () => void;
  canValidateObjectives?: boolean;
}

export function MultiServiceObjectives({ 
  objectivesByService, 
  missionTitle, 
  onMissionComplete, 
  canValidateObjectives = true 
}: MultiServiceObjectivesProps) {
  const [completedServices, setCompletedServices] = useState<Set<string>>(new Set());

  const handleServiceComplete = (service: string) => {
    const newCompleted = new Set(completedServices);
    newCompleted.add(service);
    setCompletedServices(newCompleted);

    soundManager.playSound('success');

    // Vérifier si tous les services ont terminé leurs objectifs
    if (newCompleted.size === 4) {
      setTimeout(() => {
        soundManager.playSound('mission-complete');
        onMissionComplete?.();
      }, 500);
    }
  };

  const serviceConfig = {
    pompiers: {
      title: 'SAPEURS-POMPIERS',
      icon: Truck,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    police: {
      title: 'POLICE NATIONALE', 
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    eagle: {
      title: 'EAGLE FORCE',
      icon: Zap,
      color: 'text-gray-600', 
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    samu: {
      title: 'SAMU',
      icon: Ambulance,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50', 
      borderColor: 'border-yellow-200'
    }
  };

  const completionPercentage = Math.round((completedServices.size / 4) * 100);

  return (
    <div className="space-y-6">
      {/* En-tête avec progression globale */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-command text-xl font-semibold text-foreground">
            OBJECTIFS ALERTE GÉNÉRALE
          </h3>
          <Badge variant="outline" className="font-command">
            {completedServices.size}/4 services terminés
          </Badge>
        </div>
        
        <div className="text-sm text-muted-foreground font-command mb-2">
          {missionTitle}
        </div>

        {completedServices.size === 4 && (
          <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded animate-pulse">
            <div className="flex items-center justify-center gap-2 text-green-600 font-command">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-bold text-lg">
                🎉 ALERTE GÉNÉRALE VALIDÉE - TOUS LES SERVICES ONT ACCOMPLI LEURS OBJECTIFS! 🎉
              </span>
            </div>
          </div>
        )}
      </Card>

      {/* Grille des 4 blocs d'objectifs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(objectivesByService).map(([service, objectives]) => {
          const config = serviceConfig[service as keyof typeof serviceConfig];
          const Icon = config.icon;
          const isCompleted = completedServices.has(service);

          return (
            <Card 
              key={service} 
              className={`${config.bgColor} ${config.borderColor} border-2 transition-all duration-300 ${
                !canValidateObjectives ? 'opacity-60 grayscale' : ''
              } ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
            >
              <div className="p-4">
                {/* En-tête du service */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`h-6 w-6 ${config.color}`} />
                  <div className="flex-1">
                    <h4 className={`font-command text-lg font-semibold ${config.color}`}>
                      {config.title}
                    </h4>
                    <Badge variant="outline" className="font-command text-xs mt-1">
                      {objectives.length} objectifs
                    </Badge>
                  </div>
                  {isCompleted && (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  )}
                </div>

                {/* Objectifs spécifiques au service */}
                <MissionObjectives
                  objectives={objectives}
                  missionTitle={config.title}
                  onMissionComplete={() => handleServiceComplete(service)}
                  canValidateObjectives={canValidateObjectives && !isCompleted}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
