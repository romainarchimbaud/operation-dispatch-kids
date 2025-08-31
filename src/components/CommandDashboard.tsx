import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Bird, RotateCcw, Dice6, Timer, Play, Pause, SquareCheck, Siren, Plane, Car, Check, X, RefreshCw, Zap, Ambulance, CheckCircle2 } from 'lucide-react';
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
  const [alerteGeneraleCompleted, setAlerteGeneraleCompleted] = useState(false);

  // Fonction utilitaire pour générer des objectifs adaptés pour chaque service
  const generateObjectivesForService = (service: Service, alertMission: any): string[] => {
    // Les missions d'alerte ont déjà des objectifs bien définis, on les utilise directement
    const baseObjectives = alertMission.objectives || [];
    
    // Si la mission d'alerte a moins de 12 objectifs, on les répartit
    // Sinon on prend les objectifs par groupes de 3
    const objectivesPerService = Math.ceil(baseObjectives.length / 4);
    const startIndex = {
      'pompiers': 0,
      'police': objectivesPerService,
      'eagle': objectivesPerService * 2,
      'samu': objectivesPerService * 3
    }[service] || 0;
    
    return baseObjectives.slice(startIndex, startIndex + objectivesPerService);
  };

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
    setMissionCompleted(false);
    setAlerteGeneraleCompleted(false);
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
    
    // Vérifier si on est en mode alerte générale
    if (selectedMission?.service === 'alerte_generale') {
      // Sélectionner une nouvelle mission d'alerte générale aléatoire
      const randomAlerteMission = missions.alertes[Math.floor(Math.random() * missions.alertes.length)];
      
      if (randomAlerteMission) {
        const generalAlertMission = {
          service: 'alerte_generale' as Service,
          mission: {
            id: randomAlerteMission.id,
            title: randomAlerteMission.title,
            location: randomAlerteMission.location,
            conditions: randomAlerteMission.conditions,
            vehicles: randomAlerteMission.vehicles,
            objectives: [],
            objectivesByService: {
              pompiers: generateObjectivesForService('pompiers', randomAlerteMission),
              police: generateObjectivesForService('police', randomAlerteMission),
              eagle: generateObjectivesForService('eagle', randomAlerteMission),
              samu: generateObjectivesForService('samu', randomAlerteMission)
            }
          }
        };
        setSelectedMission(generalAlertMission);
        setSelectedService('alerte_generale');
        showMascot('thinking', 'Nouvelle mission d\'alerte générale proposée !');
      }
    } else {
      // Sélectionner une nouvelle mission aléatoire normale
      const allMissions = [
        ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
        ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
        ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
        ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m }))
      ];
      const randomMission = allMissions[Math.floor(Math.random() * allMissions.length)];
      setSelectedMission(randomMission);
      setSelectedService(randomMission.service);
      showMascot('thinking', 'Nouvelle mission proposée !');
    }
    
    setAutoAcceptanceTime(30); // Reset le timer d'acceptation
  };

  const handleGeneralAlert = () => {
    soundManager.playSound('alert', 5);
    setAutoMode(true);
    
    // Sélectionner une mission d'alerte générale aléatoire
    const randomAlerteMission = missions.alertes[Math.floor(Math.random() * missions.alertes.length)];
    
    if (!randomAlerteMission) {
      // Fallback si pas de missions d'alerte
      console.error('Aucune mission d\'alerte trouvée');
      return;
    }
    
    // Créer une mission spéciale "Alerte Générale" basée sur la mission sélectionnée
    const generalAlertMission = {
      service: 'alerte_generale' as Service,
      mission: {
        id: randomAlerteMission.id,
        title: randomAlerteMission.title,
        location: randomAlerteMission.location,
        conditions: randomAlerteMission.conditions,
        vehicles: randomAlerteMission.vehicles,
        objectives: [], // On n'utilise plus ce champ pour alerte_generale
        // Objectifs spécifiques par corps de métier basés sur le scénario
        objectivesByService: {
          pompiers: generateObjectivesForService('pompiers', randomAlerteMission),
          police: generateObjectivesForService('police', randomAlerteMission),
          eagle: generateObjectivesForService('eagle', randomAlerteMission),
          samu: generateObjectivesForService('samu', randomAlerteMission)
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
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
              
              <Card className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-800 border-yellow-400/70 border-4 p-8 w-full shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                {/* Warning stripes animation */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slow-pulse animate-rainbow-border"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slow-pulse animate-rainbow-border"></div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-8">
                    {/* Icon with multiple effects */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-60 animate-ping"></div>
                      <Siren className="relative h-16 w-16 text-yellow-300 drop-shadow-2xl animate-slow-pulse filter drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-command text-yellow-100 drop-shadow-lg mb-2 animate-slow-pulse tracking-wider">
                        🚨 ALERTE GÉNÉRALE 🚨
                      </h2>
                      <p className="text-lg text-yellow-200 font-semibold drop-shadow-md">
                        ⚡ Mission critique multi-services ⚡
                      </p>
                      <p className="text-sm text-red-100 mt-1">
                        Mobilisation immédiate de toutes les unités d'intervention
                      </p>
                    </div>
                  </div>
                  
                  {/* Super flashy button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg blur-md opacity-70 animate-slow-pulse"></div>
                    <Button
                      className="relative button-emergency bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-black font-command font-black px-12 py-8 text-xl border-4 border-yellow-300 shadow-2xl transform hover:scale-110 transition-all duration-200 active:scale-95"
                      onClick={handleGeneralAlert}
                    >
                      <span className="flex items-center gap-3">
                        <Zap className="h-6 w-6 animate-bounce" />
                        DÉCLENCHER
                        <Zap className="h-6 w-6 animate-bounce" />
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Bottom warning message */}
                <div className="mt-6 text-center">
                  <div className="bg-black/30 rounded-lg p-3 border border-yellow-400/50">
                    <p className="text-yellow-300 text-sm font-bold animate-pulse">
                      ⚠️ ATTENTION : Cette action mobilise TOUS les corps de métier simultanément ⚠️
                    </p>
                  </div>
                </div>
              </Card>
            </div>
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
              if (selectedMission?.service === 'alerte_generale') {
                setAlerteGeneraleCompleted(true);
                showMascot('encouraging', 'Alerte générale validée ! Tous les services ont réussi !');
              } else {
                setMissionCompleted(true);
                showMascot('encouraging', 'Mission accomplie ! Félicitations !');
              }
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
          
          {/* Popup spécial pour alertes générales */}
          {alerteGeneraleCompleted && (
            <div
              className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black/50 animate-fade-in"
              onClick={() => setAlerteGeneraleCompleted(false)}
            >
              <div
                className="relative bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-700 text-white font-command text-center p-8 rounded-xl shadow-2xl border-4 border-yellow-400 drop-shadow-xl max-w-2xl mx-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="relative">
                    <CheckCircle2 className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black">
                    🎉 ALERTE GÉNÉRALE VALIDÉE 🎉
                  </div>
                  <div className="relative">
                    <CheckCircle2 className="w-16 h-16 text-yellow-300 drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="text-2xl md:text-3xl font-bold text-yellow-100 mb-4">
                  MISSION ACCOMPLIE!
                </div>
                
                <div className="text-lg text-emerald-100 mb-6">
                  ⭐ Tous les services ont accompli leurs objectifs avec succès ⭐
                  <br />
                  🏆 Bravo Hugo ! 🏆
                </div>
                
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-command font-bold px-8 py-4 rounded-lg text-xl transition-all transform hover:scale-105"
                  onClick={() => setAlerteGeneraleCompleted(false)}
                >
                  CONTINUER
                </button>
                
                <button
                  className="absolute top-2 right-2 text-white hover:text-yellow-300 text-3xl p-2 rounded-full focus:outline-none"
                  onClick={() => setAlerteGeneraleCompleted(false)}
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
