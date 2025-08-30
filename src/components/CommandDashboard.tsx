import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Bird, RotateCcw, Dice6, Timer, Play, Pause, SquareCheck, Siren, Plane, Car, Check, X, RefreshCw, Zap, Ambulance } from 'lucide-react';
import { MissionList } from './MissionList';
import { MissionTimer } from './MissionTimer';
import { SoundSystem, soundManager } from './SoundSystem';
import { Mascot, useMascot } from './Mascot';
import { TypewriterText } from './TypewriterText';
import { missions } from '../data/missions';
import { MissionObjectives } from './MissionObjectives';

type Service = 'pompiers' | 'police' | 'eagle' | 'samu' | 'alerte_generale';

interface SelectedMission {
  service: Service;
  mission: any | {
    pompiers: string[];
    police: string[];
    eagle: string[];
    samu: string[];
  };
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
  const [missionCompleted, setMissionCompleted] = useState(false);

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
    soundManager.stopAllSounds();
  soundManager.playSound('success', 2); // Volume fort
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
    soundManager.stopAllSounds();
    soundManager.playSound('success', 1.2); // Volume augmenté
    setAutoAcceptancePhase(false);
    setTimerDuration(600); // 10 minutes
    setTimerActive(true);
    showMascot('encouraging', 'Mission acceptée ! 10 minutes pour la réaliser !');
  };

  const handleRefuseAutoMission = () => {
    soundManager.stopAllSounds();
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

  const handleGeneralAlert = () => {
    soundManager.playSound('alert', 5);
    setAutoMode(true);
    
    // Créer une mission spéciale "Alerte Générale" avec des objectifs séparés par corps de métier
    const generalAlertMission = {
      service: 'alerte_generale' as Service,
      mission: {
        id: 999,
        title: 'ALERTE GÉNÉRALE — Mobilisation de tous les corps de métiers pour une intervention coordonnée.',
        location: 'Zone multi-services',
        conditions: 'Urgence maximale, coordination requise',
        vehicles: ['vl feu', 'vl police', 'VL blindé', 'ambulance'],
        objectives: [], // On n'utilise plus ce champ pour alerte_generale
        // Nouveaux champs pour organiser les objectifs par métier
        objectivesByService: {
          pompiers: missions.pompiers[Math.floor(Math.random() * missions.pompiers.length)]?.objectives || [],
          police: missions.police[Math.floor(Math.random() * missions.police.length)]?.objectives || [],
          eagle: missions.eagle[Math.floor(Math.random() * missions.eagle.length)]?.objectives || [],
          samu: missions.samu[Math.floor(Math.random() * missions.samu.length)]?.objectives || []
        }
      }
    };

    setSelectedMission(generalAlertMission);
    setSelectedService('alerte_generale');
    setCurrentView('missions');
    
    // Activer la phase d'acceptation de 30 secondes
    setAutoAcceptancePhase(true);
    setAutoAcceptanceTime(30);
    
    showMascot('alert', 'MISSION AUTO ALERTE GÉNÉRALE ! 30 secondes pour accepter !');
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Sapeurs-Pompiers */}
            <Card 
              className="btn-command flex flex-col items-center justify-between h-full cursor-pointer text-center p-6"
              onClick={() => handleServiceSelect('pompiers')}
            >
              <div className="flex flex-col items-center w-full h-full justify-between">
                <div className="relative mb-4 flex items-center justify-center h-16 w-16">
                  <Truck className="h-16 w-16 text-destructive" />
                  <Siren className="absolute -top-1 -right-1 h-6 w-6 text-destructive animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-destructive">SAPEURS-POMPIERS</h2>
                <p className="text-sm text-muted-foreground mb-4">Marseille • Paris • Anglet</p>
                <Badge variant="destructive" className="font-command mb-2">{missions.pompiers.length} MISSIONS</Badge>
                <Button 
                  onClick={e => { e.stopPropagation(); handleStartAuto('pompiers'); }}
                  className="bg-red-600 hover:bg-red-700 text-white font-command px-2 py-2 text-xs w-full mt-2"
                >
                  START AUTO (30s)
                </Button>
              </div>
            </Card>
            {/* Police */}
            <Card 
              className="btn-command flex flex-col items-center justify-between h-full cursor-pointer text-center p-6"
              onClick={() => handleServiceSelect('police')}
            >
              <div className="flex flex-col items-center w-full h-full justify-between">
                <div className="relative mb-4 flex items-center justify-center h-16 w-16">
                  <Shield className="h-16 w-16 text-primary" />
                  <Car className="absolute -top-1 -right-1 h-6 w-6 text-primary animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-primary">POLICE NATIONALE</h2>
                <p className="text-sm text-muted-foreground mb-4">Intervention • Patrouille • Sécurité</p>
                <Badge variant="secondary" className="font-command mb-2">{missions.police.length} MISSIONS</Badge>
                <Button 
                  onClick={e => { e.stopPropagation(); handleStartAuto('police'); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-command px-2 py-2 text-xs w-full mt-2"
                >
                  START AUTO (30s)
                </Button>
              </div>
            </Card>
            {/* Eagle Force */}
            <Card 
              className="btn-command-eagle flex flex-col items-center justify-between h-full cursor-pointer text-center p-6"
              onClick={() => handleServiceSelect('eagle')}
            >
              <div className="flex flex-col items-center w-full h-full justify-between">
                <div className="relative mb-4 flex items-center justify-center h-16 w-16">
                  <Zap className="h-16 w-16 text-eagle" />
                  <Plane className="absolute -top-1 -right-1 h-6 w-6 text-eagle animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-eagle">EAGLE FORCE</h2>
                <p className="text-sm text-muted-foreground mb-4">Forces Spéciales • Missions Secrètes</p>
                <Badge style={{backgroundColor: 'hsl(var(--eagle))', color: 'hsl(var(--eagle-foreground))'}} className="font-command mb-2">{missions.eagle.length} MISSIONS</Badge>
                <Button 
                  onClick={e => { e.stopPropagation(); handleStartAuto('eagle'); }}
                  className="bg-gray-700 hover:bg-gray-800 text-white font-command px-2 py-2 text-xs w-full mt-2"
                >
                  START AUTO (30s)
                </Button>
              </div>
            </Card>
            {/* Samu */}
            <Card 
              className="btn-command-samu flex flex-col items-center justify-between h-full cursor-pointer text-center p-6"
              onClick={() => handleServiceSelect('samu')}
            >
              <div className="flex flex-col items-center w-full h-full justify-between">
                <div className="relative mb-4 flex items-center justify-center h-16 w-16">
                  <Ambulance className="h-16 w-16 text-samu" />
                  <Ambulance className="absolute -top-1 -right-1 h-6 w-6 text-samu animate-pulse" />
                </div>
                <h2 className="mb-2 text-2xl font-command text-samu">SAMU - YELLOW LIFE LINE</h2>
                <p className="text-sm text-muted-foreground mb-4">Yellow Life Line • Urgences Médicales</p>
                <Badge style={{backgroundColor: 'hsl(var(--samu))', color: 'hsl(var(--samu-foreground))'}} className="font-command mb-2">{missions.samu.length} MISSIONS</Badge>
                <Button 
                  onClick={e => { e.stopPropagation(); handleStartAuto('samu'); }}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-command px-2 py-2 text-xs w-full mt-2"
                >
                  START AUTO (30s)
                </Button>
              </div>
            </Card>
          </div>

          {/* Alerte Générale */}
          <div className="mb-8">
            <Card className="bg-gradient-to-br from-orange-500 to-red-700 border-red-800/50 border-2 p-6 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Siren className="h-12 w-12 text-white drop-shadow-lg animate-pulse" />
                  <div>
                    <h2 className="text-2xl font-command text-white drop-shadow-md">ALERTE GÉNÉRALE</h2>
                    <p className="text-sm text-red-100">
                      Déclenche une mission critique pour toutes les unités.
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-command font-extrabold px-8 py-6 text-lg"
                  onClick={handleGeneralAlert}
                >
                  DÉCLENCHER
                </Button>
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

  // Permet à MissionList de déclencher le start auto random avec timer d'acceptation
  (window as any).handleStartAutoFromMissionList = (service: Service) => {
    handleStartAuto(service);
  };

  // Permet à MissionList de déclencher le start auto random avec timer d'acceptation
  (window as any).handleStartAutoFromMissionList = (service: Service) => {
    handleStartAuto(service);
  };

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
            {/* Bouton NOUVELLE MISSION supprimé */}
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
        <>
          <MissionList 
            service={selectedService}
            selectedMission={selectedMission}
            onMissionSelect={handleMissionSelect}
            timerActive={timerActive}
            autoAcceptancePhase={autoAcceptancePhase}
            onObjectivesComplete={() => {
              setTimerActive(false);
              setMissionCompleted(true);
              showMascot('encouraging', 'Mission accomplie ! Félicitations !');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          />
          {missionCompleted && (
            <div
              className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-start bg-black/30 animate-fade-in"
              onClick={() => setMissionCompleted(false)}
            >
              <div
                className="relative bg-green-600 text-white font-command text-3xl md:text-5xl font-bold py-8 px-12 mt-8 rounded-xl shadow-2xl border-4 border-green-400 drop-shadow-xl flex items-center gap-4"
                onClick={e => e.stopPropagation()}
              >
                <Check className="w-12 h-12 text-white drop-shadow" />
                MISSION COMPLÉTÉE !
                <button
                  className="absolute top-2 right-2 text-white hover:text-green-200 text-3xl p-2 rounded-full focus:outline-none"
                  onClick={() => setMissionCompleted(false)}
                  aria-label="Fermer"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>
          )}
        </>
        
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
