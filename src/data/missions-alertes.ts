import { Mission } from './types';

export const alertesMissions: Mission[] = [
  {
    id: 1,
    title: 'EXPLOSION CHIMIQUE MARSEILLE — Explosion dans une usine chimique au port de Marseille. Nuage toxique, évacuation massive, blessés multiples.',
    location: 'Zone industrielle portuaire, Marseille',
    conditions: 'Jour, Vent du Sud-Est, Visibilité réduite par les fumées',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 2,
    title: 'ATTENTAT GARE LYON — Explosion dans la gare de Lyon-Part-Dieu. Nombreuses victimes, panique, menace sécuritaire persistante.',
    location: 'Gare SNCF Lyon-Part-Dieu',
    conditions: 'Heure de pointe, Affluence maximale, Météo pluvieuse',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'voiture banalisée', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: []
  },
  {
    id: 3,
    title: 'INONDATION ÉCLAIR NICE — Crue torrentielle sur la Côte d\'Azur. Camping isolé, routes coupées, personnes bloquées sur les toits.',
    location: 'Vallée du Var, arrière-pays niçois',
    conditions: 'Nuit, Orages violents, Courant très fort',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide', 'ambulance'],
    objectives: []
  },
  {
    id: 4,
    title: 'ACCIDENT TRANSPORT MATIÈRES DANGEREUSES — Collision entre un camion-citerne et un car scolaire sur l\'A6. Fuite de produits toxiques.',
    location: 'Autoroute A6, aire de repos Auxerre-Sud',
    conditions: 'Matin, Brouillard dense, Trafic bloqué',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 5,
    title: 'SÉISME MAGNITUDE 6.2 — Tremblement de terre dans les Alpes. Bâtiments effondrés, coupures généralisées, population isolée.',
    location: 'Vallée de la Maurienne, Savoie',
    conditions: 'Après-midi, Neige, Communications perturbées',
    vehicles: ['hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Quad', 'Camion logistique', 'ambulance'],
    objectives: []
  },
  {
    id: 6,
    title: 'PRISE D\'OTAGES ÉCOLE — Individu armé retient une classe dans une école primaire. Négociation en cours, périmètre de sécurité.',
    location: 'École primaire Jean-Jaurès, Toulouse',
    conditions: 'Midi, Journée ensoleillée, Médias présents',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 7,
    title: 'INCENDIE FORÊT MASSIF — Feu de forêt majeur menace plusieurs villages. Évacuation préventive, colonnes de fumée visibles à 50km.',
    location: 'Massif des Maures, Var',
    conditions: 'Canicule, Vent violent de Mistral, Visibilité nulle',
    vehicles: ['vl feu', 'hélico (recherche)', 'bateau pompe', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: []
  },
  {
    id: 8,
    title: 'EFFONDREMENT MÉTRO PARIS — Effondrement partiel d\'un tunnel de métro ligne 1. Voyageurs bloqués, risque de suraccident.',
    location: 'Station Châtelet-Les Halles, Paris',
    conditions: 'Heure de pointe, Panique générale, Accès complexe',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'ambulance'],
    objectives: []
  },
  {
    id: 9,
    title: 'CRASH AVION COMMERCIAL — Atterrissage d\'urgence raté à Roissy. Appareil disloqué sur la piste, carburant répandu, 180 passagers.',
    location: 'Aéroport Charles de Gaulle, piste 3',
    conditions: 'Brouillard épais, Vent de travers, Trafic aérien suspendu',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: []
  },
  {
    id: 10,
    title: 'CYBERATTAQUE INFRASTRUCTURE — Piratage du réseau électrique national. Hôpitaux en panne, feux tricolores coupés, chaos urbain.',
    location: 'Métropole lilloise (zone test)',
    conditions: 'Nuit, Panne généralisée, GPS inutilisable',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 11,
    title: 'TSUNAMI CÔTE ATLANTIQUE — Raz-de-marée suite à un séisme sous-marin. Vagues de 8m déferlent sur La Rochelle et les îles.',
    location: 'Littoral charentais, île de Ré',
    conditions: 'Tempête, Mer démontée, Liaisons radio difficiles',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide', 'ambulance'],
    objectives: []
  },
  {
    id: 12,
    title: 'ÉMEUTES URBAINES MASSIVES — Violences généralisées dans plusieurs quartiers de Strasbourg. Commerces pillés, véhicules incendiés.',
    location: 'Quartiers Neuhof et Hautepierre, Strasbourg',
    conditions: 'Nuit, Projectiles, Visibilité réduite par la fumée',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 13,
    title: 'ÉRUPTION VOLCANIQUE — Réveil du volcan de la Chaîne des Puys. Coulées de lave menacent Clermont-Ferrand, cendres volcaniques.',
    location: 'Puy-de-Dôme, périphérie Clermont-Ferrand',
    conditions: 'Cendres dans l\'air, Visibilité nulle, Température élevée',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: []
  },
  {
    id: 14,
    title: 'ACCIDENT NUCLÉAIRE — Incident grave à la centrale de Gravelines. Risque de rejet radioactif, évacuation dans un rayon de 20km.',
    location: 'Centrale nucléaire de Gravelines, Nord',
    conditions: 'Vent du Nord-Ouest, Risque de contamination, Panique',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: []
  },
  {
    id: 15,
    title: 'CANICULE EXTRÊME — Températures record 50°C dans le Sud. Pic de mortalité, hôpitaux saturés, coupures électriques massives.',
    location: 'Montpellier et périphérie',
    conditions: 'Canicule historique, Réseau électrique instable',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'voiture banalisée', 'Camion blindé PC', 'ambulance'],
    objectives: []
  }
];
