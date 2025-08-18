import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Bird, RotateCcw, Dice6, Timer, Play, Pause, SquareCheck, Siren, Plane, Car, Check, X, RefreshCw, Zap } from 'lucide-react';
import { MissionList } from './MissionList';
import { MissionTimer } from './MissionTimer';
import { SoundSystem, soundManager } from './SoundSystem';
import { Mascot, useMascot } from './Mascot';
import { TypewriterText } from './TypewriterText';
import { missions } from '../data/missions';

type Service = 'pompiers' | 'police' | 'eagle' | 'samu';

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
  const [autoMode, setAutoMode] = useState(false);
  const [autoAcceptancePhase, setAutoAcceptancePhase] = useState(false);
  const [autoAcceptanceTime, setAutoAcceptanceTime] = useState(30);
  const { mascotState, showMascot } = useMascot();

  const handleServiceSelect = (service: Service) => {
    soundManager.playSound('click');
    setSelectedService(service);
    setCurrentView('missions');
    showMascot('thinking', `Super ! Explorons les missions ${service === 'pompiers' ? 'de pompiers' : service === 'police' ? 'de police' : service === 'eagle' ? 'Eagle Force' : 'Samu'} !`);
  };

  const handleMissionSelect = (mission: any) => {
    if (selectedService) {
      setSelectedMission({ service: selectedService, mission });
    }
  };

  const handleRandomMission = () => {
    soundManager.playSound('alert');
    const allMissions = [
      ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
      ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
      ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
      ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m }))
    ];
    const randomMission = allMissions[Math.floor(Math.random() * allMissions.length)];
    setSelectedMission(randomMission);
    setSelectedService(randomMission.service);
    setCurrentView('missions');
    showMascot('alert', 'Mission aléatoire sélectionnée ! C\'est parti !');
  };

  const handleReset = () => {
    soundManager.stopAllSounds(); // Couper tous les sons
    setCurrentView('home');
    setSelectedService(null);
    setSelectedMission(null);
    setTimerActive(false);
    setAutoMode(false);
    setAutoAcceptancePhase(false);
    setAutoAcceptanceTime(30);
    setTimerDuration(600); // Reset à 10 minutes
  };

  const startMission = () => {
    soundManager.playSound('alert');
    setTimerActive(true);
    showMascot('encouraging', 'Mission lancée ! Tu as 10 minutes. Courage !');
  };

  const handleStartAuto = (service?: Service) => {
    soundManager.playSound('alert', 5);
    setAutoMode(true);
    
    // Sélectionner une mission aléatoire du service spécifique ou de tous les services
    let selectedMissions;
    if (service) {
      selectedMissions = missions[service].map(m => ({ service, mission: m }));
    } else {
      selectedMissions = [
        ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
        ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
        ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
        ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m }))
      ];
    }
    
    const randomMission = selectedMissions[Math.floor(Math.random() * selectedMissions.length)];
    setSelectedMission(randomMission);
    setSelectedService(randomMission.service);
    setCurrentView('missions');
    
    // Activer la phase d'acceptation de 30 secondes
    setAutoAcceptancePhase(true);
    setAutoAcceptanceTime(30);
    
    const serviceName = service === 'pompiers' ? 'POMPIERS' : 
                       service === 'police' ? 'POLICE' : 
                       service === 'eagle' ? 'EAGLE FORCE' :
                       service === 'samu' ? 'SAMU' : 'TOUS SERVICES';
    showMascot('alert', `MISSION AUTO ${serviceName} ! 30 secondes pour accepter !`);
  };

  const handleAcceptAutoMission = () => {
    soundManager.playSound('success');
    setAutoAcceptancePhase(false);
    setTimerDuration(600); // 10 minutes
    setTimerActive(true);
    showMascot('encouraging', 'Mission acceptée ! 10 minutes pour la réaliser !');
  };

  const handleRefuseAutoMission = () => {
    soundManager.playSound('fail');
    setAutoAcceptancePhase(false);
    setAutoMode(false);
    showMascot('thinking', 'Mission refusée. Retour au centre de commandement.');
    handleReset();
  };

  const handleNewAutoMission = () => {
    soundManager.stopAllSounds();
    soundManager.playSound('alert', 5);
    // Sélectionner une nouvelle mission aléatoire
    const allMissions = [
      ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
      ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
      ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
      ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m }))
    ];
    const randomMission = allMissions[Math.floor(Math.random() * allMissions.length)];
    setSelectedMission(randomMission);
    setSelectedService(randomMission.service);
    setAutoAcceptanceTime(30); // Reset le timer d'acceptation
    showMascot('thinking', 'Nouvelle mission proposée !');
  };

  // Timer pour la phase d'acceptation auto
  useEffect(() => {
    if (!autoAcceptancePhase) return;

    if (autoAcceptanceTime <= 0) {
      handleRefuseAutoMission();
      return;
    }

    const interval = setInterval(() => {
      setAutoAcceptanceTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoAcceptancePhase, autoAcceptanceTime]);

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="mx-auto max-w-full px-4">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-command text-primary">
              CENTRE DE COMMANDEMENT
            </h1>
            <p className="text-xl text-muted-foreground font-command">
              Sélectionnez votre service d'intervention
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            {/* Sapeurs-Pompiers */}
            <Card 
              className="btn-command cursor-pointer text-center"
              onClick={() => handleServiceSelect('pompiers')}
            >
              <div className="p-4">
                <div className="relative mx-auto mb-4 h-16 w-16">
                  <Truck className="h-16 w-16 text-destructive" />
                  <Siren className="absolute -top-1 -right-1 h-6 w-6 text-destructive animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-destructive">
                  SAPEURS-POMPIERS
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Marseille • Paris • Anglet
                </p>
                <Badge variant="destructive" className="font-command">
                  {missions.pompiers.length} MISSIONS
                </Badge>
                <div className="mt-3">
                  <Button 
                    onClick={() => handleStartAuto('pompiers')}
                    className="bg-red-600 hover:bg-red-700 text-white font-command px-2 py-2 text-xs w-full"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Police */}
            <Card 
              className="btn-command cursor-pointer text-center"
              onClick={() => handleServiceSelect('police')}
            >
              <div className="p-4">
                <div className="relative mx-auto mb-4 h-16 w-16">
                  <Shield className="h-16 w-16 text-primary" />
                  <Car className="absolute -top-1 -right-1 h-6 w-6 text-primary animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-primary">
                  POLICE NATIONALE
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Intervention • Patrouille • Sécurité
                </p>
                <Badge variant="secondary" className="font-command">
                  {missions.police.length} MISSIONS
                </Badge>
                <div className="mt-3">
                  <Button 
                    onClick={() => handleStartAuto('police')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-command px-2 py-2 text-xs w-full"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Eagle Force */}
            <Card 
              className="btn-command-eagle cursor-pointer text-center"
              onClick={() => handleServiceSelect('eagle')}
            >
              <div className="p-4">
                <div className="relative mx-auto mb-4 h-16 w-16">
                  <Zap className="h-16 w-16 text-eagle" />
                  <Plane className="absolute -top-1 -right-1 h-6 w-6 text-eagle animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-eagle">
                  EAGLE FORCE
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Forces Spéciales • Missions Secrètes
                </p>
                <Badge style={{backgroundColor: 'hsl(var(--eagle))', color: 'hsl(var(--eagle-foreground))'}} className="font-command">
                  {missions.eagle.length} MISSIONS
                </Badge>
                <div className="mt-3">
                  <Button 
                    onClick={() => handleStartAuto('eagle')}
                    className="bg-gray-700 hover:bg-gray-800 text-white font-command px-2 py-2 text-xs w-full"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Samu */}
            <Card 
              className="btn-command-samu cursor-pointer text-center"
              onClick={() => handleServiceSelect('samu')}
            >
              <div className="p-4">
                <div className="relative mx-auto mb-4 h-16 w-16">
                  <svg className="h-16 w-16 text-samu" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                  <svg className="absolute -top-1 -right-1 h-6 w-6 text-samu animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z"/>
                  </svg>
                </div>
                <h2 className="mb-2 text-2xl font-command text-samu">
                  SAMU - YELLOW LIFE LINE
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Yellow Life Line • Urgences Médicales
                </p>
                <Badge style={{backgroundColor: 'hsl(var(--samu))', color: 'hsl(var(--samu-foreground))'}} className="font-command">
                  {missions.samu.length} MISSIONS
                </Badge>
                <div className="mt-3">
                  <Button 
                    onClick={() => handleStartAuto('samu')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-command px-2 py-2 text-xs w-full"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
           <Button 
              onClick={() => handleStartAuto()}
              className="bg-green-600 hover:bg-green-700 text-white font-command px-8 py-4 text-lg"
            >
              <Timer className="mr-2 h-6 w-6" />
              START AUTO GLOBAL (30s)
            </Button>

            
          </div>
        </div>
        
        {/* Système de sons et mascotte */}
        <SoundSystem ambientSoundEnabled={true} />
        <Mascot 
          mood={mascotState.mood}
          message={mascotState.message}
          show={mascotState.show}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-full px-4">
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

        {/* Phase d'acceptation Auto */}
        {autoAcceptancePhase && (
          <Card className="mission-card mb-6 pulse-alert">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-command text-primary mb-2">
                  MISSION AUTO PROPOSÉE
                </h3>
                <div className="text-4xl font-command font-bold text-destructive">
                  {autoAcceptanceTime}s
                </div>
                <p className="text-sm text-muted-foreground font-command">
                  Temps restant pour décider
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleAcceptAutoMission}
                  className="bg-green-600 hover:bg-green-700 text-white font-command px-6"
                >
                  <Check className="mr-2 h-4 w-4" />
                  ACCEPTER
                </Button>
                <Button 
                  onClick={handleNewAutoMission}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-command px-6"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  NOUVELLE
                </Button>
                <Button 
                  onClick={handleRefuseAutoMission}
                  variant="outline"
                  className="btn-command-alert px-6"
                >
                  <X className="mr-2 h-4 w-4" />
                  REFUSER
                </Button>
              </div>
            </div>
          </Card>
        )}

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
        
        {/* Système de sons et mascotte */}
        <SoundSystem ambientSoundEnabled={true} />
        <Mascot 
          mood={mascotState.mood}
          message={mascotState.message}
          show={mascotState.show}
        />
      </div>
    </div>
  );
}
