import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { missions, vehicles, Mission } from '../data/missions';
import { MapPin, Cloud, Car, Dice6 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';
import { soundManager } from './SoundSystem';
import { MissionObjectives } from './MissionObjectives';

interface MissionListProps {
  service: 'pompiers' | 'police' | 'eagle' | 'samu' | null;
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

  const serviceMissions = missions[service];
  const serviceColors = {
    pompiers: 'destructive',
    police: 'secondary',
    eagle: 'eagle',
    samu: 'samu'
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
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header du service */}
      <div className="text-center">
        <h2 className="text-3xl font-command text-primary mb-2">
          {getServiceTitle()}
        </h2>
        <p className="text-muted-foreground">
          {serviceMissions.length} missions disponibles
        </p>
      </div>

      {/* Mission sélectionnée */}
      {selectedMission && (
        <Card className="mission-card border-primary/40">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge 
                variant={serviceColors[service as keyof typeof serviceColors] as any}
                className="font-command text-lg px-4 py-1"
              >
                MISSION ACTIVE
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

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-command text-sm">
                  {selectedMission.mission.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-accent" />
                <span className="font-command text-sm">
                  {selectedMission.mission.conditions}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-secondary" />
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
                    className="font-command hover:bg-primary/20 cursor-help"
                    title={vehicles[vehicle]?.description || vehicle}
                  >
                    {vehicle}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Objectifs de mission */}
      {selectedMission && selectedMission.mission.objectives && (
        <MissionObjectives 
          objectives={selectedMission.mission.objectives}
          missionTitle={selectedMission.mission.title}
          onMissionComplete={onObjectivesComplete}
          canValidateObjectives={!!timerActive}
        />
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
            className={`mission-card cursor-pointer transition-all duration-300 ${
              selectedMission?.mission.id === mission.id 
                ? 'border-primary ring-2 ring-primary/20' 
                : 'hover:border-primary/60'
            }`}
            onClick={() => onMissionSelect(mission)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="font-command text-xs">
                  #{mission.id.toString().padStart(3, '0')}
                </Badge>
                <Badge 
                  variant={serviceColors[service] as any}
                  className="font-command text-xs"
                >
                  {mission.vehicles.length} VÉH.
                </Badge>
              </div>

              <h3 className="font-command text-foreground text-sm leading-tight">
                {mission.title}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">{mission.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Cloud className="h-3 w-3 text-accent" />
                  <span className="text-muted-foreground">{mission.conditions}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {mission.vehicles.slice(0, 3).map((vehicle) => (
                  <Badge 
                    key={vehicle}
                    variant="outline" 
                    className="text-xs font-mono"
                  >
                    {vehicle}
                  </Badge>
                ))}
                {mission.vehicles.length > 3 && (
                  <Badge variant="outline" className="text-xs font-mono">
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