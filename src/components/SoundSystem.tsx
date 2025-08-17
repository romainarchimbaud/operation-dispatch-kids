import { useEffect, useRef } from 'react';

type SoundType = 'click' | 'alert' | 'success' | 'fail' | 'typewriter' | 'timer-tick';

interface SoundSystemProps {
  ambientSoundEnabled?: boolean;
}

class SoundManager {
  private audioContext: AudioContext | null = null;
  private ambientOscillator: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private activeOscillators: OscillatorNode[] = [];

  constructor() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  playSound(type: SoundType, duration?: number) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    // Ajouter à la liste des oscillateurs actifs
    this.activeOscillators.push(oscillator);
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    switch (type) {
      case 'click':
        // Petit "tac" amical
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
        break;
        
      case 'alert':
        // Bip biiipp bip biiip avec progressivité
        const alertDuration = duration || 5;
        const pattern = [0.1, 0.1, 0.3, 0.1, 0.1, 0.1, 0.3, 0.2]; // bip pause biiip pause bip pause biiip pause
        const totalPatternDuration = pattern.reduce((a, b) => a + b, 0);
        const cycles = Math.floor(alertDuration / totalPatternDuration);
        
        let currentTime = this.audioContext.currentTime;
        
        for (let cycle = 0; cycle < cycles; cycle++) {
          // Progressivité du volume (normal vers fort)
          const progressRatio = cycle / (cycles - 1);
          const baseVolume = 0.1 + (progressRatio * 0.15); // de 0.1 à 0.25
          
          for (let i = 0; i < pattern.length; i += 2) {
            const bipDuration = pattern[i];
            const pauseDuration = pattern[i + 1] || 0;
            
            // Fréquence alternée: bip normal (800Hz) et biiip grave (600Hz)
            const frequency = (i === 0 || i === 4) ? 800 : 600;
            
            oscillator.frequency.setValueAtTime(frequency, currentTime);
            gainNode.gain.setValueAtTime(baseVolume, currentTime);
            gainNode.gain.setValueAtTime(baseVolume, currentTime + bipDuration);
            gainNode.gain.setValueAtTime(0, currentTime + bipDuration);
            
            currentTime += bipDuration + pauseDuration;
          }
        }
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + alertDuration);
        break;
        
      case 'success':
        // Jingle joyeux
        oscillator.frequency.setValueAtTime(523, this.audioContext.currentTime); // Do
        oscillator.frequency.setValueAtTime(659, this.audioContext.currentTime + 0.15); // Mi
        oscillator.frequency.setValueAtTime(784, this.audioContext.currentTime + 0.3); // Sol
        oscillator.frequency.setValueAtTime(1047, this.audioContext.currentTime + 0.45); // Do aigu
        gainNode.gain.setValueAtTime(0.06, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.8);
        break;
        
      case 'fail':
        // Son rigolo de "raté"
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(150, this.audioContext.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.5);
        break;
        
      case 'typewriter':
        // Pop doux pour chaque caractère
        oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.05);
        break;
        
      case 'timer-tick':
        // Bip rythmique
        oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.03, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
        break;
    }
  }

  startAmbientSound() {
    if (!this.audioContext || this.ambientOscillator) return;

    this.ambientOscillator = this.audioContext.createOscillator();
    this.ambientGain = this.audioContext.createGain();
    
    this.ambientOscillator.connect(this.ambientGain);
    this.ambientGain.connect(this.audioContext.destination);
    
    // Son d'ambiance léger : simulation radio/vent
    this.ambientOscillator.frequency.setValueAtTime(100, this.audioContext.currentTime);
    this.ambientOscillator.type = 'sawtooth';
    this.ambientGain.gain.setValueAtTime(0.008, this.audioContext.currentTime);
    
    this.ambientOscillator.start();
    
    // Variation lente pour simuler l'ambiance
    this.createAmbientVariation();
  }

  stopAmbientSound() {
    if (this.ambientOscillator) {
      this.ambientOscillator.stop();
      this.ambientOscillator = null;
      this.ambientGain = null;
    }
  }

  private createAmbientVariation() {
    if (!this.ambientOscillator || !this.audioContext) return;
    
    setInterval(() => {
      if (this.ambientOscillator && this.audioContext) {
        const randomFreq = 80 + Math.random() * 40;
        this.ambientOscillator.frequency.setValueAtTime(
          randomFreq, 
          this.audioContext.currentTime
        );
      }
    }, 3000);
  }

  stopAllSounds() {
    // Arrêter tous les oscillateurs actifs
    this.activeOscillators.forEach(oscillator => {
      try {
        oscillator.stop();
      } catch (e) {
        // L'oscillateur est déjà arrêté
      }
    });
    this.activeOscillators = [];
    
    // Arrêter le son ambiant
    this.stopAmbientSound();
  }

  stopAmbient() {
    this.stopAmbientSound();
  }
}

export const soundManager = new SoundManager();

export function SoundSystem({ ambientSoundEnabled = true }: SoundSystemProps) {
  useEffect(() => {
    if (ambientSoundEnabled) {
      // Délai pour permettre l'interaction utilisateur nécessaire
      const timer = setTimeout(() => {
        soundManager.startAmbientSound();
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        soundManager.stopAmbientSound();
      };
    }
  }, [ambientSoundEnabled]);

  return null;
}