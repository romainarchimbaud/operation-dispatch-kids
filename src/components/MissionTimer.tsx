import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Pause, Play, Square, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { soundManager } from './SoundSystem';

interface MissionTimerProps {
  duration: number; // en secondes
  onComplete: () => void;
  onStop: () => void;
}

export function MissionTimer({ duration, onComplete, onStop }: MissionTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);
  const [status, setStatus] = useState<'running' | 'paused' | 'completed' | 'failed'>('running');
  const { toast } = useToast();

  useEffect(() => {
    if (!isRunning || status !== 'running') return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setStatus('completed');
          setIsRunning(false);
          onComplete();
          toast({
            title: "🎉 MISSION ACCOMPLIE !",
            description: "Bravo, vous avez terminé votre mission dans les temps !",
            duration: 5000,
          });
          // Son de réussite via le gestionnaire
          soundManager.playSound('success');
          return 0;
        }
        
        // Bips progressifs pendant la mission
        const timeElapsed = duration - prev;
        
        // Bips toutes les 2 minutes (120s)
        if (timeElapsed > 0 && timeElapsed % 120 === 0) {
          soundManager.playSound('alert');
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, status, onComplete, toast, duration]);

  // Son d'alerte au démarrage supprimé : ne doit jouer que pendant la phase d'acceptation

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressValue = () => {
    return ((duration - timeLeft) / duration) * 100;
  };

  const handleTogglePause = () => {
    soundManager.playSound('click');
    setIsRunning(!isRunning);
    setStatus(isRunning ? 'paused' : 'running');
  };

  const handleStop = () => {
    soundManager.playSound('fail');
    setStatus('failed');
    setIsRunning(false);
    onStop();
    toast({
      title: "⚠️ MISSION INTERROMPUE",
      description: "La mission a été arrêtée.",
      variant: "destructive",
      duration: 3000,
    });
  };

  const handleMarkComplete = () => {
    soundManager.playSound('success');
    setStatus('completed');
    setIsRunning(false);
    onComplete();
    toast({
      title: "✅ MISSION TERMINÉE",
      description: "Vous avez marqué la mission comme accomplie !",
      duration: 5000,
    });
  };

  const getStatusColor = () => {
    switch (status) {
      case 'running': return timeLeft <= 60 ? 'destructive' : 'primary';
      case 'paused': return 'secondary';
      case 'completed': return 'primary';
      case 'failed': return 'destructive';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'running': return <Clock className="h-5 w-5" />;
      case 'paused': return <Pause className="h-5 w-5" />;
      case 'completed': return <CheckCircle className="h-5 w-5" />;
      case 'failed': return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'running': return timeLeft <= 60 ? 'ATTENTION - TEMPS CRITIQUE' : 'MISSION EN COURS';
      case 'paused': return 'MISSION EN PAUSE';
      case 'completed': return 'MISSION ACCOMPLIE';
      case 'failed': return 'MISSION INTERROMPUE';
    }
  };

  return (
    <div className="relative flex items-center justify-between bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 h-10 w-full shadow-lg" style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)'}}>
      {/* Timer à gauche - prend toute la largeur disponible */}
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <span className={`text-lg font-command font-bold ${timeLeft <= 60 && status === 'running' ? 'text-destructive' : 'text-primary'}`}>
            {formatTime(timeLeft)}
          </span>
          <span className="text-xs text-muted-foreground font-command">
            / {formatTime(duration)}
          </span>
        </div>
        
        <div className="flex items-center gap-2 flex-1 max-w-4xl">
          <div className="flex-1 h-2 relative overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full transition-all"
              style={{
                width: `${getProgressValue()}%`,
                background: `linear-gradient(to right, #22c55e, #eab308, #ef4444)`
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground font-command w-8 text-right">
            {Math.round(getProgressValue())}%
          </span>
        </div>

        <span className="font-command text-xs text-foreground whitespace-nowrap flex-shrink-0 mx-3">
          {getStatusText()}
        </span>
      </div>

      {/* Trois boutons regroupés à droite */}
      <div className="flex items-center gap-1">
        <Button
          onClick={handleStop}
          variant="outline"
          size="sm"
          className="btn-command-alert h-8 w-8 p-0"
          title="Arrêter la mission"
        >
          <Square className="h-4 w-4" />
        </Button>
        
        {status === 'running' || status === 'paused' ? (
          <>
            <Button
              onClick={handleTogglePause}
              variant="outline"
              size="sm"
              className="btn-command h-8 w-8 p-0"
              title={isRunning ? 'Mettre en pause' : 'Reprendre'}
            >
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              onClick={handleMarkComplete}
              variant="outline"
              size="sm"
              className="btn-command h-8 w-8 p-0"
              title="Valider la mission"
            >
              <CheckCircle className="h-4 w-4" />
            </Button>
          </>
        ) : null}
      </div>
      
      {/* Alerte dernière minute */}
      {timeLeft <= 60 && status === 'running' && (
        <div className="absolute top-full left-0 right-0 mt-1 mb-1" style={{marginTop: '5px', marginBottom: '5px'}}>
          <div className="text-center p-1 bg-destructive/10 border border-destructive/20 rounded">
            <p className="text-destructive font-command text-xs">⚠️ DERNIÈRE MINUTE !</p>
          </div>
        </div>
      )}
    </div>
  );
}