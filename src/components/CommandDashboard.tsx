import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Zap, RotateCcw, Dice6, Timer, Play, Pause, SquareCheck } from 'lucide-react';
import { MissionList } from './MissionList';
import { MissionTimer } from './MissionTimer';
import { missions } from '../data/missions';

type Service = 'pompiers' | 'police' | 'eagle';

interface SelectedMission {
  service: Service;
  mission: any;
}

export function CommandDashboard() {
  const [currentView, setCurrentView] = useState<'home' | 'missions'>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedMission, setSelectedMission] = useState<SelectedMission | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timerDuration, setTimerDuration] = useState(600); // 10 minutes par défaut

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentView('missions');
  };

  const handleMissionSelect = (mission: any) => {
    if (selectedService) {
      setSelectedMission({ service: selectedService, mission });
    }
  };

  const handleRandomMission = () => {
    const allMissions = [
      ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
      ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
      ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m }))
    ];
    const randomMission = allMissions[Math.floor(Math.random() * allMissions.length)];
    setSelectedMission(randomMission);
    setSelectedService(randomMission.service);
    setCurrentView('missions');
  };

  const handleReset = () => {
    setCurrentView('home');
    setSelectedService(null);
    setSelectedMission(null);
    setTimerActive(false);
  };

  const startMission = () => {
    setTimerActive(true);
  };

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-command text-foreground">
              <span className="text-primary">CENTRE DE COMMANDEMENT</span>
            </h1>
            <p className="text-xl text-muted-foreground font-command">
              Sélectionnez votre service d'intervention
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            {/* Sapeurs-Pompiers */}
            <Card 
              className="btn-command cursor-pointer text-center"
              onClick={() => handleServiceSelect('pompiers')}
            >
              <div className="p-8">
                <Truck className="mx-auto mb-4 h-16 w-16 text-destructive" />
                <h2 className="mb-2 text-2xl font-command text-destructive">
                  SAPEURS-POMPIERS
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Marseille • Paris • Anglet
                </p>
                <Badge variant="destructive" className="font-command">
                  {missions.pompiers.length} MISSIONS
                </Badge>
              </div>
            </Card>

            {/* Police */}
            <Card 
              className="btn-command cursor-pointer text-center"
              onClick={() => handleServiceSelect('police')}
            >
              <div className="p-8">
                <Shield className="mx-auto mb-4 h-16 w-16 text-primary" />
                <h2 className="mb-2 text-2xl font-command text-primary">
                  POLICE NATIONALE
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Intervention • Patrouille • Sécurité
                </p>
                <Badge variant="secondary" className="font-command">
                  {missions.police.length} MISSIONS
                </Badge>
              </div>
            </Card>

            {/* Eagle Force */}
            <Card 
              className="btn-command-eagle cursor-pointer text-center"
              onClick={() => handleServiceSelect('eagle')}
            >
              <div className="p-8">
                <Zap className="mx-auto mb-4 h-16 w-16 text-eagle" />
                <h2 className="mb-2 text-2xl font-command text-eagle">
                  EAGLE FORCE
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Forces Spéciales • Missions Secrètes
                </p>
                <Badge style={{backgroundColor: 'hsl(var(--eagle))', color: 'hsl(var(--eagle-foreground))'}} className="font-command">
                  {missions.eagle.length} MISSIONS
                </Badge>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button 
              onClick={handleRandomMission}
              className="btn-command-alert px-8 py-4 text-lg"
            >
              <Dice6 className="mr-2 h-6 w-6" />
              MISSION ALÉATOIRE
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header avec controls */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={handleReset}
              variant="outline"
              className="btn-command"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              RESET
            </Button>
            <Button 
              onClick={handleRandomMission}
              variant="outline"
              className="btn-command"
            >
              <Dice6 className="mr-2 h-4 w-4" />
              NOUVELLE MISSION
            </Button>
          </div>

          {selectedMission && (
            <div className="flex items-center gap-4">
              <Button 
                onClick={startMission}
                disabled={timerActive}
                className="btn-command-alert"
              >
                <Play className="mr-2 h-4 w-4" />
                DÉMARRER MISSION
              </Button>
            </div>
          )}
        </div>

        {/* Timer */}
        {timerActive && (
          <MissionTimer 
            duration={timerDuration}
            onComplete={() => setTimerActive(false)}
            onStop={() => setTimerActive(false)}
          />
        )}

        {/* Mission Content */}
        <MissionList 
          service={selectedService}
          selectedMission={selectedMission}
          onMissionSelect={handleMissionSelect}
        />
      </div>
    </div>
  );
}