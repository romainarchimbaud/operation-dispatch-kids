import { Vehicles } from './types';

export const vehicles: Vehicles = {
  // Pompiers
  'vl feu': { name: 'vl feu', description: "Véhicule léger incendie (chef d'agrès)" },
  'annexe': { name: 'annexe', description: 'Annexe légère (zodiac) pour accès rapide' },
  'bateau pompe': { name: 'bateau pompe', description: 'Bateau de lutte avec pompe incendie' },
  'hélico (recherche)': { name: 'hélico (recherche)', description: 'Hélicoptère de repérage et hélitreuillage' },

  // Police
  'voiture banalisée': { name: 'voiture banalisée', description: 'Véhicule discret de patrouille et filature' },
  'vl police': { name: 'vl police', description: 'Véhicule léger de police' },
  'fourgon blindé': { name: 'fourgon blindé', description: 'Fourgon de protection/transport sécurisé' },
  'hélico': { name: 'hélico', description: 'Hélicoptère de surveillance' },

  // Samu
  'ambulance': { name: 'ambulance', description: 'Ambulance de secours et transport sanitaire' },

  // Eagle (inchangés)
  'Camion blindé PC': { name: 'Camion blindé PC', description: 'Véhicule Léger blindé pour missions spéciales' },
  'Camion logistique': { name: 'Camion logistique', description: 'Véhicule de transport et logistique' },
  'Quad': { name: 'Quad', description: "Véhicule tout-terrain d'intervention rapide" },
  'Bateau rapide': { name: 'Bateau rapide', description: "Embarcation d'intervention maritime" },
  'Hélico Eagle': { name: 'Hélico Eagle', description: "Hélicoptère d'assaut et transport" },
  'Drone': { name: 'Drone', description: 'Drone de reconnaissance et surveillance' },
  'Hélico': { name: 'Hélico', description: 'Hélicoptère (générique Eagle)' },
};
