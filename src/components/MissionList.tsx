import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { missions, vehicles, Mission } from '../data/missions';
import { MapPin, Cloud, Car, Dice6, Siren } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';
import { soundManager } from './SoundSystem';
import { MissionObjectives } from './MissionObjectives';
import { MultiServiceObjectives } from './MultiServiceObjectives';

interface MissionListProps {
  service: 'pompiers' | 'police' | 'eagle' | 'samu' | 'alerte_generale' | null;
  selectedMission: { service: string; mission: Mission } | null;
  onMissionSelect: (mission: Mission) => void;
  onObjectivesComplete?: () => void;
  timerActive?: boolean;
  autoAcceptancePhase?: boolean;
}

export function MissionList({ service, selectedMission, onMissionSelect, onObjectivesComplete, timerActive, autoAcceptancePhase }: MissionListProps) {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (selectedMission) {
      setShowTypewriter(true);
    }
  }, [selectedMission]);

  if (!service) return null;

  // Pour alerte_generale, on n'a pas de missions à lister, on affiche directement les objectifs
  if (service === 'alerte_generale' && selectedMission) {
    return (
      <div className="space-y-6">
        {/* Header du service */}
        <div className="text-center">
          <h2 className="text-3xl font-command text-yellow-500 dark:text-yellow-400 mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-bold">
            ALERTE GÉNÉRALE
          </h2>
          <p className="text-muted-foreground">
            Mission multi-services - Tous les corps de métiers mobilisés
          </p>
        </div>

        {/* Première ligne : Mission sélectionnée et En-tête des objectifs en deux colonnes */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Colonne gauche - Mission Active */}
          <Card className="mission-card border-yellow-500/40 dark:border-orange-500/40 ag-mission-card flex flex-col h-full">
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge 
                    className="font-command text-lg px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-500"
                  >
                    MISSION ACTIVE - ALERTE GÉNÉRALE
                  </Badge>
                  <Badge variant="outline" className="font-command">
                    ID: {selectedMission.mission.id.toString().padStart(3, '0')}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-command text-foreground mb-2">
                    {showTypewriter ? (
                      <TypewriterText 
                        text={selectedMission.mission.title}
                        speed={80}
                        playSound={true}
                      />
                    ) : (
                      selectedMission.mission.title
                    )}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedMission.mission.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedMission.mission.conditions}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-command text-xs">
                    {selectedMission.mission.vehicles.length} véhicules
                  </Badge>
                  <Badge variant="outline" className="font-command text-xs">
                    4 corps de métiers mobilisés
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedMission.mission.vehicles.map((vehicle) => (
                  <Badge 
                    key={vehicle}
                    variant="secondary" 
                    className="text-xs font-command"
                    title={vehicles[vehicle]?.description || vehicle}
                  >
                    {vehicle}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Colonne droite - En-tête des objectifs */}
          <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-yellow-400/50 border-2 shadow-2xl flex flex-col h-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Siren className="h-8 w-8 text-yellow-300" />
                  </div>
                  <h3 className="font-command text-2xl font-bold text-yellow-100 drop-shadow-lg tracking-wide">
                    OBJECTIFS ALERTE GÉNÉRALE
                  </h3>
                </div>
                <Badge variant="outline" className="font-command text-lg px-4 py-2 bg-yellow-400/20 border-yellow-400 text-yellow-100">
                  0/4 services terminés
                </Badge>
              </div>
              
              <div className="text-base text-yellow-200 font-command bg-black/30 p-3 rounded-lg border border-yellow-400/30">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <span className="font-semibold">{selectedMission.mission.title}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Deuxième ligne : Les 4 blocs d'objectifs métiers */}
        <MultiServiceObjectives 
          objectivesByService={selectedMission.mission.objectivesByService}
          missionTitle={selectedMission.mission.title}
          onMissionComplete={onObjectivesComplete}
          canValidateObjectives={!!timerActive}
        />
      </div>
    );
  }

  const serviceMissions = missions[service as keyof typeof missions] || [];
  const serviceColors = {
    pompiers: 'destructive',
    police: 'secondary',
    eagle: 'eagle',
    samu: 'samu',
    alerte_generale: 'destructive'
  };

  // Couleurs spécifiques par service pour les accents
  const serviceAccentColors = {
    pompiers: {
      primary: 'text-red-600 dark:text-red-600',
      border: 'border-red-500/40',
      icon: 'text-red-500',
      header: 'text-red-600 dark:text-red-600'
    },
    police: {
      primary: 'text-blue-600 dark:text-blue-400', 
      border: 'border-blue-500/40',
      icon: 'text-blue-500',
      header: 'text-blue-600 dark:text-blue-400'
    },
    eagle: {
      primary: 'text-gray-500 dark:text-gray-300',
      border: 'border-gray-500/40', 
      icon: 'text-gray-500',
      header: 'text-gray-600 dark:text-gray-300'
    },
    samu: {
      primary: 'text-yellow-600 dark:text-yellow-400',
      border: 'border-yellow-500/40',
      icon: 'text-yellow-500', 
      header: 'text-yellow-600 dark:text-yellow-400'
    },
    alerte_generale: {
      primary: 'text-yellow-500 dark:text-yellow-400',
      border: 'border-yellow-500/40 dark:border-orange-500/40',
      icon: 'text-yellow-500',
      header: 'text-yellow-500 dark:text-yellow-400'
    }
  };

  const getRandomMission = () => {
    // On délègue au parent la gestion du random auto avec timer d'acceptation
    if (typeof (window as any).handleStartAutoFromMissionList === 'function') {
      (window as any).handleStartAutoFromMissionList(service);
    }
  };

  const getServiceTitle = () => {
    switch (service) {
      case 'pompiers': return 'SAPEURS-POMPIERS';
      case 'police': return 'POLICE NATIONALE';
      case 'eagle': return 'EAGLE FORCE';
      case 'samu': return 'SAMU';
      case 'alerte_generale': return 'ALERTE GÉNÉRALE';
      default: return '';
    }
  };

  // Scroll to top on mission select
  const handleMissionSelect = (mission: Mission) => {
    onMissionSelect(mission);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Classe utilitaire pour le badge Mission Active
  const missionActiveBadgeClass = {
    pompiers: 'bg-red-600 text-white',
    police: 'bg-blue-600 text-blue-50',
    eagle: 'bg-gray-800 text-white',
    samu: 'bg-yellow-600 text-yellow-50',
    alerte_generale: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
  };

  return (
    <div className="space-y-6">
      {/* Header du service */}
      <div className="text-center">
        <h2 className={`text-3xl font-command mb-2 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.header || 'text-primary'}`}>
          {getServiceTitle()}
        </h2>
        <p className="text-muted-foreground">
          {serviceMissions.length} missions disponibles
        </p>
      </div>

      {/* Mission sélectionnée et Objectifs en deux colonnes */}
      {selectedMission && (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Colonne gauche - Mission Active */}
          <Card className={`mission-card ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.border || 'border-primary/40'}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`inline-flex items-center rounded-full font-command text-lg px-4 py-1 font-semibold transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${missionActiveBadgeClass[service as keyof typeof missionActiveBadgeClass]}`}>
                  MISSION ACTIVE
                </div>
                <Badge variant="outline" className="font-command">
                  ID: {selectedMission.mission.id.toString().padStart(3, '0')}
                </Badge>
              </div>

              <div>
                <h3 className="text-xl font-command text-foreground mb-2">
                  {showTypewriter ? (
                    <TypewriterText 
                      text={selectedMission.mission.title}
                      speed={80}
                      playSound={true}
                    />
                  ) : (
                    selectedMission.mission.title
                  )}
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-1">
                <div className="flex items-center gap-2">
                  <MapPin className={`h-4 w-4 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.icon || 'text-primary'}`} />
                  <span className="font-command text-sm">
                    {selectedMission.mission.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className={`h-4 w-4 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.icon || 'text-accent'}`} />
                  <span className="font-command text-sm">
                    {selectedMission.mission.conditions}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className={`h-4 w-4 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.icon || 'text-secondary'}`} />
                  <span className="font-command text-sm">
                    {selectedMission.mission.vehicles.length} véhicules
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-command text-foreground mb-2">VÉHICULES RECOMMANDÉS:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMission.mission.vehicles.map((vehicle) => (
                    <Badge 
                      key={vehicle}
                      variant="outline" 
                      className="font-command hover:bg-gray-100 dark:hover:bg-gray-700 cursor-help border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                      title={vehicles[vehicle]?.description || vehicle}
                    >
                      {vehicle}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Colonne droite - Objectifs de mission */}
          {selectedMission.mission.objectives && (
            <MissionObjectives 
              objectives={selectedMission.mission.objectives}
              missionTitle={selectedMission.mission.title}
              onMissionComplete={onObjectivesComplete}
              canValidateObjectives={!!timerActive}
            />
          )}
        </div>
      )}

      {/* Actions rapides */}
      <div className="flex justify-center">
        <Button 
          onClick={getRandomMission}
          className="btn-command-alert px-8 py-4"
        >
          <Dice6 className="mr-2 h-5 w-5" />
          MISSION ALÉATOIRE {getServiceTitle()}
        </Button>
      </div>

      {/* Liste des missions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {serviceMissions.map((mission) => (
          <Card 
            key={mission.id}
            className={`mission-card transition-all duration-300 ${
              selectedMission?.mission.id === mission.id
                ? `${serviceAccentColors[service as keyof typeof serviceAccentColors]?.border} ring-2 ring-current/20`
                : timerActive
                  ? 'opacity-60 grayscale pointer-events-none'
                  : `cursor-pointer hover:${serviceAccentColors[service as keyof typeof serviceAccentColors]?.border?.replace('/40', '/60') || 'hover:border-primary/60'}`
            }`}
            onClick={() => {
              if (!timerActive || selectedMission?.mission.id === mission.id) {
                handleMissionSelect(mission);
              }
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="font-command text-xs">
                  #{mission.id.toString().padStart(3, '0')}
                </Badge>
                <Badge 
                  className={`font-command text-xs inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${missionActiveBadgeClass[service as keyof typeof missionActiveBadgeClass]}`}
                >
                  {mission.vehicles.length} VÉH.
                </Badge>
              </div>

              <h3 className="font-command text-foreground text-sm leading-tight">
                {mission.title}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-1">
                  <MapPin className={`h-3 w-3 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.icon || 'text-primary'}`} />
                  <span className="text-muted-foreground">{mission.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Cloud className={`h-3 w-3 ${serviceAccentColors[service as keyof typeof serviceAccentColors]?.icon || 'text-accent'}`} />
                  <span className="text-muted-foreground">{mission.conditions}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {mission.vehicles.slice(0, 3).map((vehicle) => (
                  <Badge 
                    key={vehicle}
                    variant="outline" 
                    className="text-xs font-mono border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
                  >
                    {vehicle}
                  </Badge>
                ))}
                {mission.vehicles.length > 3 && (
                  <Badge variant="outline" className="text-xs font-mono border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    +{mission.vehicles.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}