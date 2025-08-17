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
        
        // Dans les 30 dernières secondes : bip chaque seconde
        if (prev <= 30) {
          soundManager.playSound('timer-tick');
        }
        // Bips toutes les 2 minutes (120s)
        else if (timeElapsed > 0 && timeElapsed % 120 === 0) {
          soundManager.playSound('alert');
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, status, onComplete, toast, duration]);

  // Son d'alerte au démarrage
  useEffect(() => {
    if (status === 'running') {
      soundManager.playSound('alert');
    }
  }, []);

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
    <Card className={`mission-card mb-6 ${timeLeft <= 60 && status === 'running' ? 'pulse-alert' : ''}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <span className="font-command text-lg text-foreground">
              {getStatusText()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {status === 'running' || status === 'paused' ? (
              <>
                <Button
                  onClick={handleTogglePause}
                  variant="outline"
                  size="sm"
                  className="btn-command"
                >
                  {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  onClick={handleMarkComplete}
                  variant="outline"
                  size="sm"
                  className="btn-command"
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
                <Button
                  onClick={handleStop}
                  variant="outline"
                  size="sm"
                  className="btn-command-alert"
                >
                  <Square className="h-4 w-4" />
                </Button>
              </>
            ) : null}
          </div>
        </div>

        <div className="text-center">
          <div className={`text-6xl font-command font-bold ${
            timeLeft <= 60 && status === 'running' ? 'text-destructive' : 'text-primary'
          }`}>
            {formatTime(timeLeft)}
          </div>
          <p className="text-sm text-muted-foreground font-command mt-1">
            Temps restant sur {formatTime(duration)}
          </p>
        </div>

        <div className="space-y-2">
          <Progress 
            value={getProgressValue()} 
            className="progress-bar h-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground font-command">
            <span>Début</span>
            <span>{Math.round(getProgressValue())}% accompli</span>
            <span>Objectif</span>
          </div>
        </div>

        {timeLeft <= 60 && status === 'running' && (
          <div className="text-center p-2 bg-destructive/10 border border-destructive/20 rounded">
            <p className="text-destructive font-command text-sm">
              ⚠️ DERNIÈRE MINUTE - FINALISEZ VOTRE MISSION !
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}