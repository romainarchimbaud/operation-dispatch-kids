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
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { missions } from '../data/missions';
import { MissionObjectives } from './MissionObjectives';
import './ui/animations.css';

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
  const { theme } = useTheme();
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
  const [pompiersCompleted, setPompiersCompleted] = useState(false);
  const [policeCompleted, setPoliceCompleted] = useState(false);
  const [eagleCompleted, setEagleCompleted] = useState(false);
  const [samuCompleted, setSamuCompleted] = useState(false);

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

  // Fonction utilitaire pour créer un popup de mission accomplie
  const createMissionPopup = (isVisible: boolean, onClose: () => void, config: {
    title: string;
    bgGradient: string;
    borderColor: string;
    emoji: string;
    buttonColor?: string;
    buttonHoverColor?: string;
    buttonTextColor?: string;
  }) => {
    if (!isVisible) return null;
    
    // Style du bouton personnalisable
    const defaultButtonStyle = "bg-yellow-500 hover:bg-yellow-400 text-black dark:bg-yellow-600 dark:hover:bg-yellow-500";
    const customButtonStyle = config.buttonColor 
      ? `${config.buttonColor} ${config.buttonHoverColor || 'hover:bg-opacity-80'} ${config.buttonTextColor || 'text-black'}`
      : defaultButtonStyle;

    // Fond coloré selon le métier mais adaptatif dark/light
    const getServiceBackground = () => {
      if (config.bgGradient.includes('red')) {
        return 'bg-gradient-to-br from-red-600 to-red-700 dark:from-red-700 dark:to-red-800';
      } else if (config.bgGradient.includes('blue')) {
        return 'bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800';
      } else if (config.bgGradient.includes('gray') || config.bgGradient.includes('stone')) {
        return 'bg-gradient-to-br from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800';
      } else if (config.bgGradient.includes('yellow')) {
        return 'bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700';
      } else if (config.bgGradient.includes('emerald') || config.bgGradient.includes('green')) {
        return 'bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800';
      }
      return 'bg-gradient-to-br from-gray-600 to-gray-700 dark:from-gray-700 dark:to-gray-800';
    };
    
    return (
      <div
        className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black/50 animate-fade-in"
        onClick={() => {
          onClose();
          handleReset();
        }}
      >
        <div
          className={`relative mission-card border-2 ${config.borderColor} font-command text-center p-8 rounded-xl shadow-2xl drop-shadow-xl max-w-4xl w-11/12 mx-4 ${getServiceBackground()} backdrop-blur-sm`}
          onClick={e => e.stopPropagation()}
        >
          {/* Emoji en haut */}
          <div className="flex justify-center mb-4">
            <div className="text-6xl md:text-7xl drop-shadow-lg">
              {config.emoji}
            </div>
          </div>
          
          {/* Titre principal */}
          <div className="text-2xl md:text-3xl font-black mb-6 text-white">
            {config.title}
          </div>
          
          {/* Message de validation */}
          <div className="text-xl md:text-2xl font-bold mb-4 text-yellow-200">
            TOUS LES OBJECTIFS ONT ÉTÉ ACCOMPLIS!
          </div>
          
          {/* Félicitations */}
          <div className="text-lg text-white/90 mb-8">
            ⭐ Mission réussie avec brio ⭐
            <br />
            🏆 Bravo Hugo ! 🏆
          </div>
          
          {/* Bouton continuer */}
          <button
            className={`${customButtonStyle} font-command font-bold px-8 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg`}
            onClick={() => {
              onClose();
              handleReset();
            }}
          >
            CONTINUER
          </button>
          
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl p-2 rounded-full focus:outline-none transition-colors"
            onClick={() => {
              onClose();
              handleReset();
            }}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      </div>
    );
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
    setPompiersCompleted(false);
    setPoliceCompleted(false);
    setEagleCompleted(false);
    setSamuCompleted(false);
  };

  const startMission = () => {
    soundManager.stopAllSounds();
  soundManager.playSound('success', 2); // Volume fort
    setTimerActive(true);
    showMascot('encouraging', 'Mission lancée ! Tu as 10 minutes. Courage !');
  };

  const handleStartAuto = (service?: Service | 'global') => {
    soundManager.playSound('alert', 5);
    setAutoMode(true);
    
    // Sélectionner une mission aléatoire du service spécifique ou de tous les services
    let selectedMissions;
    if (service && service !== 'global') {
      selectedMissions = missions[service].map(m => ({ service, mission: m }));
    } else {
      // Inclure aussi les alertes générales
      const alerteMissions = missions.alertes.map(alerteMission => ({
        service: 'alerte_generale' as Service,
        mission: {
          id: alerteMission.id,
          title: alerteMission.title,
          location: alerteMission.location,
          conditions: alerteMission.conditions,
          vehicles: alerteMission.vehicles,
          objectives: [],
          objectivesByService: {
            pompiers: generateObjectivesForService('pompiers', alerteMission),
            police: generateObjectivesForService('police', alerteMission),
            eagle: generateObjectivesForService('eagle', alerteMission),
            samu: generateObjectivesForService('samu', alerteMission)
          }
        }
      }));
      selectedMissions = [
        ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
        ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
        ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
        ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m })),
        ...alerteMissions
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
      // Sélectionner une nouvelle mission aléatoire (incluant les alertes générales)
      const normalMissions = [
        ...missions.pompiers.map(m => ({ service: 'pompiers' as Service, mission: m })),
        ...missions.police.map(m => ({ service: 'police' as Service, mission: m })),
        ...missions.eagle.map(m => ({ service: 'eagle' as Service, mission: m })),
        ...missions.samu.map(m => ({ service: 'samu' as Service, mission: m }))
      ];
      
      // Ajouter les alertes générales
      const alerteMissions = missions.alertes.map(alerteMission => ({
        service: 'alerte_generale' as Service,
        mission: {
          id: alerteMission.id,
          title: alerteMission.title,
          location: alerteMission.location,
          conditions: alerteMission.conditions,
          vehicles: alerteMission.vehicles,
          objectives: [],
          objectivesByService: {
            pompiers: generateObjectivesForService('pompiers', alerteMission),
            police: generateObjectivesForService('police', alerteMission),
            eagle: generateObjectivesForService('eagle', alerteMission),
            samu: generateObjectivesForService('samu', alerteMission)
          }
        }
      }));
      
      const allMissions = [...normalMissions, ...alerteMissions];
      const randomMission = allMissions[Math.floor(Math.random() * allMissions.length)];
      setSelectedMission(randomMission);
      setSelectedService(randomMission.service);
      showMascot('thinking', randomMission.service === 'alerte_generale' ? 'Alerte générale proposée !' : 'Nouvelle mission proposée !');
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
      <div className={`min-h-screen relative ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50'
          : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-900 dark:via-slate-900 dark:to-black'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute inset-0 ${
            theme === 'light'
              ? 'bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10'
              : 'bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10'
          }`}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: theme === 'light' 
              ? `radial-gradient(circle at 25% 25%, rgba(156, 163, 175, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)`
              : `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-full px-4 flex flex-col min-h-screen">
          {/* Header with aligned layout */}
          <div className="mb-6 pt-4 px-4 animate-slide-in-top">
            <div className="flex items-center justify-between">
              {/* Left side - Title only */}
              <div className="text-left flex items-center">
                <div className="relative py-2 px-3">
                  <h1 className={`text-3xl font-command drop-shadow-2xl tracking-wider ${
                    theme === 'light'
                      ? 'text-slate-800'
                      : 'text-white'
                  }`}>
                    CENTRE DE COMMANDEMENT
                  </h1>
                  <div className={`absolute -inset-1 rounded-lg blur opacity-20 animate-glow-pulse ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}></div>
                </div>
              </div>
              
              {/* Right side - Buttons */}
              <div className="flex items-center gap-4">
                {/* Start Auto Global Button */}
                <div className="relative animate-fade-in-scale">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg blur opacity-60"></div>
                  <Button 
                    onClick={() => handleStartAuto('global')}
                    className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-command font-bold px-6 py-2 rounded-lg text-base shadow-2xl btn-professional"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    START AUTO GLOBAL
                  </Button>
                </div>
                
                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Centered subtitle */}
          <div className="text-center py-6 animate-fade-in-scale">
            <p className={`text-lg font-command opacity-90 ${
              theme === 'light'
                ? 'text-slate-700'
                : 'text-slate-300'
            }`}>
              Sélectionnez votre service d'intervention
            </p>
          </div>

          {/* Services Grid - Redesigned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 px-8 animate-fade-in-scale">
            {/* Sapeurs-Pompiers - Modern Card */}
            <div className="animate-slide-in-left" style={{animationDelay: '0.1s'}}>
              <Card className="group relative overflow-hidden h-full min-h-[240px] cursor-pointer card-hover-lift bg-pattern-fire border-red-500/30 glass-effect"
                onClick={() => handleServiceSelect('pompiers')}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 dark:group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
                  <div className="relative mb-2 flex items-center justify-center h-16 w-16">
                    <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-glow-pulse"></div>
                    <Truck className="relative h-12 w-12 text-red-400 transition-colors duration-300" />
                    <Siren className="absolute -top-1 -right-1 h-4 w-4 text-red-400" />
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h2 className="mb-1 text-lg font-command text-red-400 transition-colors duration-300">
                      SAPEURS-POMPIERS
                    </h2>
                    <p className="text-xs mb-2 text-slate-400 transition-colors duration-300">
                      Marseille • Paris • Anglet
                    </p>
                    <Badge className="font-command mb-2 text-xs inline-block bg-red-600/80 text-red-100 border-red-500/50">
                      {missions.pompiers.length} MISSIONS
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={e => { e.stopPropagation(); handleStartAuto('pompiers'); }}
                    className="font-command px-3 py-2 text-xs w-full btn-professional bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white border-red-500/50"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </Card>
            </div>
            {/* Police - Modern Card */}
            <div className="animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              <Card className="group relative overflow-hidden h-full min-h-[240px] cursor-pointer card-hover-lift bg-pattern-police border-blue-500/30 glass-effect"
                onClick={() => handleServiceSelect('police')}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 dark:group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
                  <div className="relative mb-2 flex items-center justify-center h-16 w-16">
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-glow-pulse"></div>
                    <Shield className="relative h-12 w-12 text-blue-400 transition-colors duration-300" />
                    <Car className="absolute -top-1 -right-1 h-4 w-4 text-blue-400" />
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h2 className="mb-1 text-lg font-command text-blue-400 transition-colors duration-300">
                      POLICE NATIONALE
                    </h2>
                    <p className="text-xs mb-2 text-slate-400 transition-colors duration-300">
                      Intervention • Patrouille • Sécurité
                    </p>
                    <Badge className="font-command mb-2 text-xs inline-block bg-blue-600/80 text-blue-100 border-blue-500/50">
                      {missions.police.length} MISSIONS
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={e => { e.stopPropagation(); handleStartAuto('police'); }}
                    className="font-command px-3 py-2 text-xs w-full btn-professional bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-blue-500/50"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </Card>
            </div>
            {/* Eagle Force - Modern Card */}
            <div className="animate-slide-in-right" style={{animationDelay: '0.1s'}}>
              <Card className="group relative overflow-hidden h-full min-h-[240px] cursor-pointer card-hover-lift bg-pattern-eagle border-blue-500/30 glass-effect"
                onClick={() => handleServiceSelect('eagle')}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-slate-600/20 opacity-0 dark:group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
                  <div className="relative mb-2 flex items-center justify-center h-16 w-16">
                    <div className="absolute inset-0 bg-gray-500 rounded-full opacity-20 animate-glow-pulse"></div>
                    <Zap className="relative h-12 w-12 text-gray-400 transition-colors duration-300" />
                    <Plane className="absolute -top-1 -right-1 h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h2 className="mb-1 text-lg font-command text-gray-400 transition-colors duration-300">
                      EAGLE FORCE
                    </h2>
                    <p className="text-xs mb-2 text-slate-400 transition-colors duration-300">
                      Forces Spéciales • Missions Secrètes
                    </p>
                    <Badge className="font-command mb-2 text-xs inline-block bg-gray-600/80 text-gray-100 border-gray-500/50">
                      {missions.eagle.length} MISSIONS
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={e => { e.stopPropagation(); handleStartAuto('eagle'); }}
                    className="font-command px-3 py-2 text-xs w-full btn-professional bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white border-gray-500/50"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </Card>
            </div>
            {/* SAMU - Modern Card */}
            <div className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <Card className="group relative overflow-hidden h-full min-h-[240px] cursor-pointer card-hover-lift bg-pattern-samu border-blue-500/30 glass-effect"
                onClick={() => handleServiceSelect('samu')}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 opacity-0 dark:group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-between h-full p-4">
                  <div className="relative mb-2 flex items-center justify-center h-16 w-16">
                    <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 animate-glow-pulse"></div>
                    <Ambulance className="relative h-12 w-12 text-yellow-400 transition-colors duration-300" />
                    <Ambulance className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
                  </div>
                  
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h2 className="mb-1 text-lg font-command text-yellow-400 transition-colors duration-300">
                      SAMU - YELLOW LIFE LINE
                    </h2>
                    <p className="text-xs mb-2 text-slate-400 transition-colors duration-300">
                      Yellow Life Line • Urgences Médicales
                    </p>
                    <Badge className="font-command mb-2 text-xs inline-block bg-yellow-400/80 text-black border-yellow-400/50">
                      {missions.samu.length} MISSIONS
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={e => { e.stopPropagation(); handleStartAuto('samu'); }}
                    className="font-command px-3 py-2 text-xs w-full btn-professional bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black border-yellow-400/50"
                  >
                    START AUTO (30s)
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Alerte Générale - Ultra Modern */}
          <div className="mb-6 px-2 animate-fade-in-scale" style={{animationDelay: '0.4s'}}>
            <div className="relative mx-0 group max-w-6xl mx-auto" style={{
              '--emergency-glow-color': theme === 'light' 
                ? 'rgba(37, 99, 235, 0.6)' 
                : 'rgba(34, 197, 94, 0.6)',
              '--emergency-glow-color-secondary': theme === 'light' 
                ? 'rgba(37, 99, 235, 0.7)' 
                : 'rgba(34, 197, 94, 0.7)'
            } as React.CSSProperties}>
              {/* Dynamic background effect */}
              <div className={`absolute -inset-2 rounded-xl blur-lg opacity-60 animate-emergency-glow ${
                theme === 'light' 
                  ? 'bg-gradient-to-r from-blue-400/20 via-slate-400/20 to-blue-400/20' 
                  : 'bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-400/20'
              }`}></div>
              
              <Card className={`relative glass-effect border-2 p-4 shadow-2xl overflow-hidden backdrop-blur-sm ${
                theme === 'light'
                  ? 'border-blue-600/40 bg-gradient-to-br from-slate-800/90 to-blue-900/90'
                  : 'border-green-600/40 bg-gradient-to-br from-green-900/90 to-black/90'
              }`}>{/* Classe spéciale pour AG */}
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className={`absolute inset-0 animate-shimmer ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-600/20 via-slate-500/20 to-blue-600/20'
                      : 'bg-gradient-to-r from-green-600/20 via-green-500/20 to-green-600/20'
                  }`}
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                    }}>
                  </div>
                </div>
                
                {/* Warning stripes */}
                <div className={`absolute top-0 left-0 right-0 h-1 opacity-60 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-green-400 to-transparent'
                }`}></div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-60 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-green-400 to-transparent'
                }`}></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Ultra modern icon with theme colors */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full blur-md opacity-60 animate-emergency-glow ${
                        theme === 'light' 
                          ? 'bg-blue-500' 
                          : 'bg-green-500'
                      }`}></div>
                      <div className={`relative h-12 w-12 rounded-full flex items-center justify-center ${
                        theme === 'light'
                          ? 'bg-gradient-to-br from-blue-400 to-blue-600'
                          : 'bg-gradient-to-br from-green-500 to-green-700'
                      }`}>
                        <Siren className="h-6 w-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div>
                      <h2 className={`text-2xl font-command drop-shadow-lg mb-1 tracking-wider ${
                        theme === 'light'
                          ? 'text-blue-100'
                          : 'text-green-100'
                      }`}>
                        🚨 ALERTE GÉNÉRALE 🚨
                      </h2>
                      <p className={`text-base font-semibold drop-shadow-md ${
                        theme === 'light'
                          ? 'text-blue-200'
                          : 'text-green-300'
                      }`}>
                        ⚡ Mission critique multi-services ⚡
                      </p>
                      <p className={`text-xs mt-1 opacity-90 ${
                        theme === 'light'
                          ? 'text-blue-200'
                          : 'text-green-200'
                      }`}>
                        Mobilisation immédiate de toutes les unités d'intervention
                      </p>
                    </div>
                  </div>
                  
                  {/* Ultra flashy button with theme colors */}
                  <div className="relative">
                    <div className={`absolute -inset-1 rounded-lg blur opacity-70 ${
                      theme === 'light'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700'
                        : 'bg-gradient-to-r from-green-600 to-green-700'
                    }`}></div>
                    <Button
                      className={`relative text-white font-command font-black px-8 py-4 text-lg shadow-2xl btn-professional transform hover:scale-105 transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 border border-blue-400/50'
                          : 'bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-400 hover:via-green-500 hover:to-green-600 border border-green-400/50'
                      }`}
                      onClick={handleGeneralAlert}
                    >
                      <span className="flex items-center gap-2">
                        ⚡ DÉCLENCHER ⚡
                      </span>
                    </Button>
                  </div>
                </div>
                
                {/* Bottom warning with theme colors */}
                <div className="mt-3 text-center">
                  <div className={`glass-effect-dark rounded-lg p-2 ${
                    theme === 'light'
                      ? 'border border-blue-400/30'
                      : 'border border-green-400/30'
                  }`}>
                    <p className={`text-sm font-bold animate-pulse ${
                      theme === 'light'
                        ? 'text-blue-700'
                        : 'text-green-300'
                    }`}>
                      ⚠️ ATTENTION : Cette action mobilise TOUS les corps de métier simultanément ⚠️
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
        </div>
        
        {/* Système de sons et mascotte */}
        <SoundSystem ambientSoundEnabled={false} />
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
    <div className={`min-h-screen relative ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50' 
        : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-900 dark:via-slate-900 dark:to-black'
    }`}>
      {/* Background Pattern identique à la home */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-full px-4 flex flex-col min-h-screen p-6">
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

          {/* Timer entre les boutons quand actif - même hauteur que les boutons */}
          {timerActive && (
            <div className="flex-1 mx-8 flex items-center">
              <MissionTimer 
                duration={timerDuration}
                onComplete={() => setTimerActive(false)}
                onStop={() => setTimerActive(false)}
              />
            </div>
          )}

          <div className="flex items-center gap-4">
            {selectedMission && (
              <Button 
                onClick={startMission}
                disabled={timerActive}
                className="btn-command-alert"
              >
                <Play className="mr-2 h-4 w-4" />
                DÉMARRER MISSION
              </Button>
            )}
            <ThemeToggle />
          </div>
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
              } else if (selectedMission?.service === 'pompiers') {
                setPompiersCompleted(true);
                showMascot('encouraging', 'Mission pompiers accomplie ! Excellent travail !');
              } else if (selectedMission?.service === 'police') {
                setPoliceCompleted(true);
                showMascot('encouraging', 'Mission police accomplie ! Ordre maintenu !');
              } else if (selectedMission?.service === 'eagle') {
                setEagleCompleted(true);
                showMascot('encouraging', 'Mission Eagle Force accomplie ! Intervention tactique réussie !');
              } else if (selectedMission?.service === 'samu') {
                setSamuCompleted(true);
                showMascot('encouraging', 'Mission SAMU accomplie ! Vies sauvées !');
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
          {createMissionPopup(alerteGeneraleCompleted, () => setAlerteGeneraleCompleted(false), {
            title: "ALERTE GÉNÉRALE VALIDÉE",
            bgGradient: "bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-700",
            borderColor: "border-yellow-400",
            emoji: "🎉"
          })}
          
          {/* Popups pour chaque service */}
          {createMissionPopup(pompiersCompleted, () => setPompiersCompleted(false), {
            title: "MISSION POMPIERS VALIDÉE",
            bgGradient: "bg-gradient-to-r from-red-700 via-red-600 to-red-700",
            borderColor: "border-orange-400",
            emoji: "🚒"
          })}
          
          {createMissionPopup(policeCompleted, () => setPoliceCompleted(false), {
            title: "MISSION POLICE VALIDÉE",
            bgGradient: "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700",
            borderColor: "border-cyan-400",
            emoji: "🚔"
          })}
          
          {createMissionPopup(eagleCompleted, () => setEagleCompleted(false), {
            title: "MISSION EAGLE VALIDÉE",
            bgGradient: "bg-gradient-to-r from-gray-800 via-stone-700 to-olive-900",
            borderColor: "border-stone-400",
            emoji: "🚁"
          })}
          
          {createMissionPopup(samuCompleted, () => setSamuCompleted(false), {
            title: "MISSION SAMU VALIDÉE",
            bgGradient: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600",
            borderColor: "border-yellow-400",
            emoji: "🚑",
            buttonColor: "bg-red-600",
            buttonHoverColor: "hover:bg-red-500",
            buttonTextColor: "text-white"
          })}
          {/* Système de sons et mascotte */}
          <SoundSystem ambientSoundEnabled={false} />
          <Mascot 
            mood={mascotState.mood}
            message={mascotState.message}
            show={mascotState.show}
          />
        </>
      </div>
    </div>
  );
}
