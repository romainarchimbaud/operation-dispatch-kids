import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Zap, Ambulance, CheckCircle2, Siren } from 'lucide-react';
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
      borderColor: 'border-red-200',
      glowColor: 'bg-red-500',
      iconGlow: 'bg-red-400',
      badgeColor: 'text-red-600'
    },
    police: {
      title: 'POLICE NATIONALE', 
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      glowColor: 'bg-blue-500',
      iconGlow: 'bg-blue-400',
      badgeColor: 'text-blue-600'
    },
    eagle: {
      title: 'EAGLE FORCE',
      icon: Zap,
      color: 'text-gray-600', 
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      glowColor: 'bg-gray-500',
      iconGlow: 'bg-gray-400',
      badgeColor: 'text-gray-600'
    },
    samu: {
      title: 'SAMU',
      icon: Ambulance,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50', 
      borderColor: 'border-yellow-200',
      glowColor: 'bg-yellow-500',
      iconGlow: 'bg-yellow-400',
      badgeColor: 'text-yellow-600'
    }
  };

  const completionPercentage = Math.round((completedServices.size / 4) * 100);

  return (
    <div className="space-y-6">
      {/* En-tête avec progression globale */}
      <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-yellow-400/50 border-2 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Siren className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="font-command text-2xl font-bold text-yellow-100 drop-shadow-lg tracking-wide">
              🚨 OBJECTIFS ALERTE GÉNÉRALE 🚨
            </h3>
          </div>
          <Badge variant="outline" className="font-command text-lg px-4 py-2 bg-yellow-400/20 border-yellow-400 text-yellow-100">
            {completedServices.size}/4 services terminés
          </Badge>
        </div>
        
        <div className="text-base text-yellow-200 font-command mb-4 bg-black/30 p-3 rounded-lg border border-yellow-400/30">
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <span className="font-semibold">{missionTitle}</span>
          </div>
        </div>
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
              className={`relative ${config.bgColor} ${config.borderColor} border-3 transition-all duration-500 transform hover:scale-[1.02] shadow-xl ${
                !canValidateObjectives ? 'opacity-60 grayscale' : ''
              } ${isCompleted ? 'ring-4 ring-green-400 shadow-green-400/50' : 'hover:shadow-2xl'}`}
            >
              {/* Glow effect pour les services actifs */}
              {!isCompleted && canValidateObjectives && (
                <div className={`absolute inset-0 ${config.glowColor} rounded-lg blur-sm opacity-20`}></div>
              )}
              
              <div className="relative p-5">
                {/* En-tête du service */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    {!isCompleted && canValidateObjectives && (
                      <div className={`absolute inset-0 ${config.iconGlow} rounded-full blur-md opacity-60`}></div>
                    )}
                    <Icon className={`relative h-8 w-8 ${config.color} ${isCompleted ? 'text-green-400' : ''} drop-shadow-lg`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-command text-xl font-bold ${isCompleted ? 'text-green-400' : config.color} drop-shadow-md tracking-wide`}>
                      {config.title}
                    </h4>
                    <Badge variant="outline" className={`font-command text-sm mt-2 px-3 py-1 ${isCompleted ? 'bg-green-500/20 border-green-400 text-green-300' : `${config.badgeColor} border-current`}`}>
                      {objectives.length} objectifs
                    </Badge>
                  </div>
                  {isCompleted && (
                    <div className="relative">
                      <CheckCircle2 className="h-8 w-8 text-green-400 drop-shadow-lg" />
                    </div>
                  )}
                </div>

                {/* Badge de statut flashy */}
                {isCompleted && (
                  <div className="mb-4 text-center">
                    <div className="bg-gradient-to-r from-emerald-800/90 to-green-800/90 border border-emerald-400 rounded-lg p-3">
                      <p className="text-white font-command font-bold text-sm drop-shadow-md">
                        ✅ SERVICE ACCOMPLI ✅
                      </p>
                    </div>
                  </div>
                )}

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
