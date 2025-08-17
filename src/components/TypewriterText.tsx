import { useState, useEffect } from 'react';
import { soundManager } from './SoundSystem';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  playSound?: boolean;
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  onComplete, 
  className = '',
  playSound = true 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        // Son typewriter pour chaque caractère (pas les espaces)
        if (playSound && text[currentIndex] !== ' ') {
          soundManager.playSound('typewriter');
        }
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, playSound]);

  // Reset quand le texte change
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={`${className} ${currentIndex < text.length ? 'typewriter-cursor' : ''}`}>
      {displayedText}
    </span>
  );
}

// Style pour le curseur clignotant
// À ajouter dans index.css si pas déjà présent
const typewriterCursorStyle = `
.typewriter-cursor::after {
  content: '|';
  animation: blink 1s infinite;
  color: hsl(var(--primary));
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
`;