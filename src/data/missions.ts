export interface Mission {
  id: number;
  title: string;
  location: string;
  conditions: string;
  vehicles: string[];
}

export interface Vehicles {
  [key: string]: {
    name: string;
    description: string;
  };
}

export const vehicles: Vehicles = {
  // Pompiers
  'VSAV': { name: 'VSAV', description: 'Véhicule de Secours et d\'Assistance aux Victimes' },
  'FPT': { name: 'FPT', description: 'Fourgon Pompe-Tonne' },
  'CCF': { name: 'CCF', description: 'Camion Citerne Feux de forêt' },
  'EPA': { name: 'EPA', description: 'Échelle Pivotante Automatique' },
  'Hélico pompier': { name: 'Hélico pompier', description: 'Hélicoptère de secours et bombardier d\'eau' },
  'Canadair': { name: 'Canadair', description: 'Avion bombardier d\'eau' },
  'Bateau pompier': { name: 'Bateau pompier', description: 'Embarcation de secours aquatique' },
  'VL commandement': { name: 'VL commandement', description: 'Véhicule Léger de commandement' },
  'Fourgon pompe': { name: 'Fourgon pompe', description: 'Véhicule de pompage pour inondations' },

  // Police
  'VL': { name: 'VL', description: 'Véhicule Léger de patrouille' },
  'Moto': { name: 'Moto', description: 'Motocyclette de police' },
  'Fourgon': { name: 'Fourgon', description: 'Fourgon de maintien de l\'ordre' },
  'Hélico': { name: 'Hélico', description: 'Hélicoptère de surveillance' },
  'Bateau fluvial': { name: 'Bateau fluvial', description: 'Embarcation de surveillance des ports' },
  'Drone': { name: 'Drone', description: 'Drone de surveillance et reconnaissance' },
  'Fourgon maintien': { name: 'Fourgon maintien', description: 'Véhicule de maintien de l\'ordre' },
  'Moto police': { name: 'Moto police', description: 'Motocyclette d\'intervention rapide' },

  // Eagle Force
  'VL blindé': { name: 'VL blindé léger', description: 'Véhicule Léger blindé pour missions spéciales' },
  'Camion logistique': { name: 'Camion logistique', description: 'Véhicule de transport et logistique' },
  'Quad': { name: 'Quad', description: 'Véhicule tout-terrain d\'intervention rapide' },
  'Bateau rapide': { name: 'Bateau rapide', description: 'Embarcation d\'intervention maritime' },
  'Hélico Eagle': { name: 'Hélico', description: 'Hélicoptère d\'assaut et transport' }
};

export const missions = {
  pompiers: [
    {
      id: 1,
      title: "Feu de forêt à Marseille",
      location: "Collines de Marseille",
      conditions: "Été, 35°C, mistral fort",
      vehicles: ["CCF", "Canadair", "VSAV", "Hélico pompier"]
    },
    {
      id: 2,
      title: "Accident de la route à Anglet",
      location: "Route de Bayonne",
      conditions: "Nuit, pluie fine",
      vehicles: ["VSAV", "FPT", "VL commandement"]
    },
    {
      id: 3,
      title: "Sauvetage en mer à Biarritz",
      location: "Plage du Miramar",
      conditions: "Vent fort, mer agitée",
      vehicles: ["Bateau pompier", "Hélico pompier", "VSAV"]
    },
    {
      id: 4,
      title: "Incendie d'appartement à Paris",
      location: "15ème arrondissement",
      conditions: "Matin, hiver, brouillard",
      vehicles: ["FPT", "EPA", "VSAV"]
    },
    {
      id: 5,
      title: "Inondation à Lyon",
      location: "Quartier de la Part-Dieu",
      conditions: "Pluie continue depuis 48h",
      vehicles: ["Fourgon pompe", "Bateau pompier", "VSAV"]
    },
    {
      id: 6,
      title: "Sauvetage en montagne à Chamonix",
      location: "Aiguille du Midi",
      conditions: "Neige, brouillard épais",
      vehicles: ["Hélico pompier", "VSAV", "VL commandement"]
    },
    {
      id: 7,
      title: "Feu de voiture sur autoroute A7",
      location: "Aire de repos Montélimar",
      conditions: "Été, trafic dense",
      vehicles: ["FPT", "VSAV", "VL commandement"]
    },
    {
      id: 8,
      title: "Explosion de gaz dans un immeuble",
      location: "Marseille centre",
      conditions: "Soir, vent faible",
      vehicles: ["FPT", "EPA", "VSAV"]
    },
    {
      id: 9,
      title: "Incendie de forêt à Anglet",
      location: "Forêt de Chiberta",
      conditions: "Été, chaleur sèche",
      vehicles: ["CCF", "Canadair", "Hélico pompier"]
    },
    {
      id: 10,
      title: "Tempête à Brest",
      location: "Port de commerce",
      conditions: "Pluie, rafales 120 km/h",
      vehicles: ["VSAV", "Fourgon pompe", "Hélico pompier"]
    }
  ] as Mission[],

  police: [
    {
      id: 1,
      title: "Manifestation pacifique à Paris",
      location: "Place de la République",
      conditions: "Après-midi, centre-ville",
      vehicles: ["Fourgon maintien", "Moto police", "VL"]
    },
    {
      id: 2,
      title: "Vol dans un centre commercial",
      location: "Lyon Part-Dieu",
      conditions: "Samedi, forte affluence",
      vehicles: ["VL", "Moto police"]
    },
    {
      id: 3,
      title: "Patrouille de nuit à Toulouse",
      location: "Centre historique",
      conditions: "Nuit claire, température douce",
      vehicles: ["VL", "Moto police"]
    },
    {
      id: 4,
      title: "Sécurité match de foot à Marseille",
      location: "Stade Vélodrome",
      conditions: "Soirée, stade complet",
      vehicles: ["Fourgon", "VL"]
    },
    {
      id: 5,
      title: "Recherche enfant perdu en forêt",
      location: "Forêt de Fontainebleau",
      conditions: "Matin, brume légère",
      vehicles: ["VL", "Drone"]
    },
    {
      id: 6,
      title: "Contrôle routier sur autoroute A10",
      location: "Péage d'Orléans",
      conditions: "Journée, trafic fluide",
      vehicles: ["VL", "Moto police"]
    },
    {
      id: 7,
      title: "Escorte convoi scolaire",
      location: "Banlieue parisienne",
      conditions: "Matin, heure de pointe",
      vehicles: ["VL", "Moto police"]
    },
    {
      id: 8,
      title: "Surveillance port maritime",
      location: "Port de Dunkerque",
      conditions: "Après-midi, vent fort",
      vehicles: ["VL", "Bateau fluvial"]
    },
    {
      id: 9,
      title: "Patrouille aérienne à Nice",
      location: "Côte d'Azur",
      conditions: "Été, trafic touristique",
      vehicles: ["Hélico"]
    },
    {
      id: 10,
      title: "Intervention cambriolage à Bordeaux",
      location: "Quartier résidentiel",
      conditions: "Nuit, quartier calme",
      vehicles: ["VL", "Moto police"]
    }
  ] as Mission[],

  eagle: [
    {
      id: 1,
      title: "Sauvetage d'otages Playmobil",
      location: "Tour fictive de simulation",
      conditions: "Journée, environnement urbain",
      vehicles: ["Hélico", "VL blindé", "Drone"]
    },
    {
      id: 2,
      title: "Sécurité convoi humanitaire",
      location: "Route de campagne",
      conditions: "Météo chaude, terrain découvert",
      vehicles: ["VL blindé", "Camion logistique"]
    },
    {
      id: 3,
      title: "Intervention après tremblement de terre",
      location: "Ville fictive détruite",
      conditions: "Décombres, poussière",
      vehicles: ["Hélico", "Camion logistique", "Quad"]
    },
    {
      id: 4,
      title: "Protection ambassade fictive",
      location: "Centre-ville simulation",
      conditions: "Journée, forte affluence",
      vehicles: ["VL blindé", "Drone", "Hélico"]
    },
    {
      id: 5,
      title: "Recherche en montagne",
      location: "Massif alpin fictif",
      conditions: "Hiver, neige épaisse",
      vehicles: ["Hélico", "Quad", "VL blindé"]
    },
    {
      id: 6,
      title: "Sauvetage maritime spécial",
      location: "Mer agitée fictive",
      conditions: "Nuit, tempête simulée",
      vehicles: ["Bateau rapide", "Hélico", "VL blindé"]
    },
    {
      id: 7,
      title: "Évacuation civils après inondation",
      location: "Ville partiellement submergée",
      conditions: "Eau montante, urgence",
      vehicles: ["Bateau rapide", "Camion logistique", "Drone"]
    },
    {
      id: 8,
      title: "Mission d'entraînement Playmobil",
      location: "Camp militaire fictif",
      conditions: "Exercice, terrain varié",
      vehicles: ["Quad", "VL blindé", "Hélico"]
    },
    {
      id: 9,
      title: "Assistance police grande fête",
      location: "Centre-ville en fête",
      conditions: "Soirée, foule importante",
      vehicles: ["VL blindé", "Drone", "Camion logistique"]
    },
    {
      id: 10,
      title: "Observation aérienne zone sensible",
      location: "Plaine découverte",
      conditions: "Été, visibilité parfaite",
      vehicles: ["Drone", "Hélico", "VL blindé"]
    }
  ] as Mission[]
};