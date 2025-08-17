import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, Zap, Award, Target, X, Minimize2, Maximize2 } from 'lucide-react';

type MascotMood = 'welcome' | 'encouraging' | 'success' | 'alert' | 'thinking';

interface MascotProps {
  mood?: MascotMood;
  message?: string;
  show?: boolean;
}

export function Mascot({ mood = 'welcome', message, show = true }: MascotProps) {
  const [currentMood, setCurrentMood] = useState<MascotMood>(mood);
  const [isVisible, setIsVisible] = useState(show);
  const [currentMessage, setCurrentMessage] = useState(message);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setCurrentMood(mood);
    setCurrentMessage(message);
  }, [mood, message]);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const getMascotEmoji = () => {
    switch (currentMood) {
      case 'welcome': return '👨‍🚒';
      case 'encouraging': return '💪';
      case 'success': return '🎉';
      case 'alert': return '⚡';
      case 'thinking': return '🤔';
      default: return '👨‍🚒';
    }
  };

  const getMascotIcon = () => {
    switch (currentMood) {
      case 'welcome': return <Heart className="h-4 w-4 text-primary" />;
      case 'encouraging': return <Target className="h-4 w-4 text-accent" />;
      case 'success': return <Award className="h-4 w-4 text-eagle" />;
      case 'alert': return <Zap className="h-4 w-4 text-destructive" />;
      case 'thinking': return <Star className="h-4 w-4 text-secondary" />;
      default: return <Heart className="h-4 w-4 text-primary" />;
    }
  };

  const getDefaultMessage = () => {
    switch (currentMood) {
      case 'welcome': 
        return "Salut commandant ! Prêt pour une nouvelle mission ?";
      case 'encouraging': 
        return "Courage ! Tu peux y arriver !";
      case 'success': 
        return "Bravo ! Mission accomplie avec brio !";
      case 'alert': 
        return "Attention ! Mission urgente en cours !";
      case 'thinking': 
        return "Hmm... Quelle mission allons-nous choisir ?";
      default: 
        return "Prêt pour l'action !";
    }
  };

  const getMoodColor = () => {
    switch (currentMood) {
      case 'welcome': return 'bg-primary/10 border-primary/20';
      case 'encouraging': return 'bg-accent/10 border-accent/20';
      case 'success': return 'bg-eagle/10 border-eagle/20';
      case 'alert': return 'bg-destructive/10 border-destructive/20';
      case 'thinking': return 'bg-secondary/10 border-secondary/20';
      default: return 'bg-primary/10 border-primary/20';
    }
  };

  if (!isVisible) return null;

  // Mode minimisé - juste l'avatar
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[100]">
        <Button
          onClick={() => setIsMinimized(false)}
          size="lg"
          className="w-14 h-14 rounded-full p-0 animate-bounce shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            background: `hsl(var(--${currentMood === 'success' ? 'eagle' : currentMood === 'alert' ? 'destructive' : 'primary'}))`,
            color: `hsl(var(--${currentMood === 'success' ? 'eagle' : currentMood === 'alert' ? 'destructive' : 'primary'}-foreground))`
          }}
        >
          <span className="text-2xl">{getMascotEmoji()}</span>
        </Button>
      </div>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-[100] max-w-sm transition-all duration-500 transform ${getMoodColor()} animate-fade-in shadow-xl border-2 bg-background`}>
      <div className="relative">
        {/* Boutons de contrôle */}
        <div className="absolute top-2 right-2 flex gap-1 z-10">
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMinimized(true);
            }}
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 rounded-full hover:bg-muted/80"
          >
            <Minimize2 className="h-3 w-3" />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsVisible(false);
            }}
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 rounded-full hover:bg-muted/80"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>

        <div className="p-4 space-y-3 pt-8">
          <div className="flex items-start gap-3">
            <div className="text-3xl animate-bounce">
              {getMascotEmoji()}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                {getMascotIcon()}
                <Badge variant="secondary" className="text-xs font-command">
                  CAPITAINE RESCUE
                </Badge>
              </div>
              <p className="text-sm text-foreground font-command leading-relaxed">
                {currentMessage || getDefaultMessage()}
              </p>
            </div>
          </div>
          
          {/* Petite animation de respiration */}
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Hook pour contrôler la mascotte facilement
export function useMascot() {
  const [mascotState, setMascotState] = useState<{
    mood: MascotMood;
    message?: string;
    show: boolean;
  }>({
    mood: 'welcome',
    show: true
  });

  const showMascot = (mood: MascotMood, message?: string, duration?: number) => {
    setMascotState({ mood, message, show: true });
    
    if (duration) {
      setTimeout(() => {
        setMascotState(prev => ({ ...prev, show: false }));
      }, duration);
    }
  };

  const hideMascot = () => {
    setMascotState(prev => ({ ...prev, show: false }));
  };

  return {
    mascotState,
    showMascot,
    hideMascot
  };
}