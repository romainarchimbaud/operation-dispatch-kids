import { Mission } from './types';

export const alertesMissions: Mission[] = [
  {
    id: 1,
    title: 'EXPLOSION CHIMIQUE MARSEILLE — Explosion dans une usine chimique au port de Marseille. Nuage toxique, évacuation massive, blessés multiples.',
    location: 'Zone industrielle portuaire, Marseille',
    conditions: 'Jour, Vent du Sud-Est, Visibilité réduite par les fumées',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Éteindre les foyers d\'incendie secondaires',
      'Contenir la propagation du nuage toxique',
      'Établir un périmètre de décontamination',
      'Sécuriser les installations chimiques adjacentes',
      // POLICE (4 objectifs)
      'Sécuriser un périmètre d\'évacuation de 2km',
      'Organiser l\'évacuation des quartiers résidentiels',
      'Contrôler la circulation sur les axes principaux',
      'Coordonner avec les autorités préfectorales',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne de la zone contaminée',
      'Neutraliser les risques d\'explosion secondaire',
      'Installer un PC de coordination tactique',
      'Sécuriser l\'accès aux équipes d\'intervention',
      // SAMU (4 objectifs)
      'Triage médical des victimes intoxiquées',
      'Évacuer les blessés graves vers hôpitaux spécialisés',
      'Administrer les antidotes en urgence',
      'Installer un hôpital de campagne mobile'
    ]
  },
  {
    id: 2,
    title: 'ATTENTAT GARE LYON — Explosion dans la gare de Lyon-Part-Dieu. Nombreuses victimes, panique, menace sécuritaire persistante.',
    location: 'Gare SNCF Lyon-Part-Dieu',
    conditions: 'Heure de pointe, Affluence maximale, Météo pluvieuse',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'voiture banalisée', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Éteindre les foyers d\'incendie dans la gare',
      'Désincarcérer les victimes bloquées sous les décombres',
      'Sécuriser les installations électriques SNCF',
      'Ventiler les fumées toxiques dans les souterrains',
      // POLICE (4 objectifs)
      'Établir un périmètre de sécurité anti-terroriste',
      'Évacuer massivement les voyageurs en panique',
      'Rechercher d\'éventuels complices ou explosifs',
      'Coordonner avec les forces anti-terroristes',
      // EAGLE FORCE (4 objectifs)
      'Sécuriser les accès stratégiques de la gare',
      'Neutraliser les menaces terroristes persistantes',
      'Protéger les équipes d\'intervention sur site',
      'Reconnaissance tactique des infrastructures',
      // SAMU (4 objectifs)
      'Triage d\'urgence des nombreuses victimes',
      'Traiter les blessures par explosion et écrasement',
      'Évacuer vers multiple hôpitaux lyonnais',
      'Gérer le stress post-traumatique des témoins'
    ]
  },
  {
    id: 3,
    title: 'INONDATION ÉCLAIR NICE — Crue torrentielle sur la Côte d\'Azur. Camping isolé, routes coupées, personnes bloquées sur les toits.',
    location: 'Vallée du Var, arrière-pays niçois',
    conditions: 'Nuit, Orages violents, Courant très fort',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Sauvetage aquatique des personnes bloquées',
      'Pomper l\'eau des zones inondées critiques',
      'Sécuriser les installations électriques noyées',
      'Évacuer le camping isolé par embarcations',
      // POLICE (4 objectifs)
      'Fermer les routes dangereuses inondées',
      'Organiser l\'évacuation préventive des villages',
      'Coordonner les secours avec la préfecture',
      'Maintenir l\'ordre lors des évacuations',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne des zones inondées',
      'Hélitreuillage des personnes en détresse',
      'Localiser les véhicules emportés par les eaux',
      'Évaluer la stabilité des ponts et ouvrages',
      // SAMU (4 objectifs)
      'Secourir les victimes de noyade',
      'Traiter l\'hypothermie et les traumatismes',
      'Évacuer par hélicoptère les cas graves',
      'Installer un poste médical avancé mobile'
    ]
  },
  {
    id: 4,
    title: 'ACCIDENT TRANSPORT MATIÈRES DANGEREUSES — Collision entre un camion-citerne et un car scolaire sur l\'A6. Fuite de produits toxiques.',
    location: 'Autoroute A6, aire de repos Auxerre-Sud',
    conditions: 'Matin, Brouillard dense, Trafic bloqué',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Contenir la fuite de produits chimiques toxiques',
      'Désincarcérer les enfants du car scolaire',
      'Neutraliser les risques d\'incendie du carburant',
      'Décontaminer la zone et les victimes',
      // POLICE (4 objectifs)
      'Fermer l\'autoroute et dévier le trafic',
      'Évacuer les véhicules en amont et aval',
      'Sécuriser un périmètre de sécurité élargi',
      'Prendre en charge les familles des enfants',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne de l\'étendue toxique',
      'Coordonner l\'intervention multi-services',
      'Sécuriser l\'approche des équipes de secours',
      'Évaluer les risques environnementaux',
      // SAMU (4 objectifs)
      'Triage médical prioritaire des enfants',
      'Traiter les intoxications chimiques aiguës',
      'Évacuer vers hôpitaux pédiatriques spécialisés',
      'Gérer le traumatisme psychologique collectif'
    ]
  },
  {
    id: 5,
    title: 'SÉISME MAGNITUDE 6.2 — Tremblement de terre dans les Alpes. Bâtiments effondrés, coupures généralisées, population isolée.',
    location: 'Vallée de la Maurienne, Savoie',
    conditions: 'Après-midi, Neige, Communications perturbées',
    vehicles: ['hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Quad', 'Camion logistique', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Rechercher les survivants sous les décombres',
      'Étayer les bâtiments en péril d\'effondrement',
      'Rétablir l\'approvisionnement en eau potable',
      'Sécuriser les installations gazières endommagées',
      // POLICE (4 objectifs)
      'Maintenir l\'ordre et éviter les pillages',
      'Organiser l\'évacuation des zones dangereuses',
      'Coordonner avec les autorités de montagne',
      'Sécuriser les voies d\'accès aux secours',
      // EAGLE FORCE (4 objectifs)
      'Évaluation aérienne des dégâts sur la vallée',
      'Héliportage de matériel lourd de secours',
      'Reconnaissance des villages isolés par avalanche',
      'Installation d\'un poste de commandement avancé',
      // SAMU (4 objectifs)
      'Triage médical des victimes d\'écrasement',
      'Traiter les hypothermies et traumatismes graves',
      'Évacuer par hélicoptère les blessés critiques',
      'Installer un hôpital de campagne temporaire'
    ]
  },
  {
    id: 6,
    title: 'PRISE D\'OTAGES ÉCOLE — Individu armé retient une classe dans une école primaire. Négociation en cours, périmètre de sécurité.',
    location: 'École primaire Jean-Jaurès, Toulouse',
    conditions: 'Midi, Journée ensoleillée, Médias présents',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Sécuriser les systèmes d\'incendie de l\'école',
      'Préparer une évacuation d\'urgence rapide',
      'Couper les alimentations gaz et électricité',
      'Établir des accès de secours discrets',
      // POLICE (4 objectifs)
      'Négocier avec le preneur d\'otages',
      'Évacuer les autres classes de l\'école',
      'Maintenir un périmètre de sécurité strict',
      'Gérer la presse et les familles angoissées',
      // EAGLE FORCE (4 objectifs)
      'Surveillance tactique du bâtiment scolaire',
      'Préparation d\'une intervention d\'assaut',
      'Reconnaissance discrète des positions',
      'Neutralisation rapide en cas d\'échec',
      // SAMU (4 objectifs)
      'Préparer le traitement du stress des enfants',
      'Standby médical pour intervention d\'urgence',
      'Évaluer l\'état psychologique des otages',
      'Coordonner avec les psychologues scolaires'
    ]
  },
  {
    id: 7,
    title: 'INCENDIE FORÊT MASSIF — Feu de forêt majeur menace plusieurs villages. Évacuation préventive, colonnes de fumée visibles à 50km.',
    location: 'Massif des Maures, Var',
    conditions: 'Canicule, Vent violent de Mistral, Visibilité nulle',
    vehicles: ['vl feu', 'hélico (recherche)', 'bateau pompe', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 8,
    title: 'EFFONDREMENT MÉTRO PARIS — Effondrement partiel d\'un tunnel de métro ligne 1. Voyageurs bloqués, risque de suraccident.',
    location: 'Station Châtelet-Les Halles, Paris',
    conditions: 'Heure de pointe, Panique générale, Accès complexe',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 9,
    title: 'CRASH AVION COMMERCIAL — Atterrissage d\'urgence raté à Roissy. Appareil disloqué sur la piste, carburant répandu, 180 passagers.',
    location: 'Aéroport Charles de Gaulle, piste 3',
    conditions: 'Brouillard épais, Vent de travers, Trafic aérien suspendu',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 10,
    title: 'CYBERATTAQUE INFRASTRUCTURE — Piratage du réseau électrique national. Hôpitaux en panne, feux tricolores coupés, chaos urbain.',
    location: 'Métropole lilloise (zone test)',
    conditions: 'Nuit, Panne généralisée, GPS inutilisable',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 11,
    title: 'TSUNAMI CÔTE ATLANTIQUE — Raz-de-marée suite à un séisme sous-marin. Vagues de 8m déferlent sur La Rochelle et les îles.',
    location: 'Littoral charentais, île de Ré',
    conditions: 'Tempête, Mer démontée, Liaisons radio difficiles',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 12,
    title: 'ÉMEUTES URBAINES MASSIVES — Violences généralisées dans plusieurs quartiers de Strasbourg. Commerces pillés, véhicules incendiés.',
    location: 'Quartiers Neuhof et Hautepierre, Strasbourg',
    conditions: 'Nuit, Projectiles, Visibilité réduite par la fumée',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 13,
    title: 'ÉRUPTION VOLCANIQUE — Réveil du volcan de la Chaîne des Puys. Coulées de lave menacent Clermont-Ferrand, cendres volcaniques.',
    location: 'Puy-de-Dôme, périphérie Clermont-Ferrand',
    conditions: 'Cendres dans l\'air, Visibilité nulle, Température élevée',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 14,
    title: 'ACCIDENT NUCLÉAIRE — Incident grave à la centrale de Gravelines. Risque de rejet radioactif, évacuation dans un rayon de 20km.',
    location: 'Centrale nucléaire de Gravelines, Nord',
    conditions: 'Vent du Nord-Ouest, Risque de contamination, Panique',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  },
  {
    id: 15,
    title: 'CANICULE EXTRÊME — Températures record 50°C dans le Sud. Pic de mortalité, hôpitaux saturés, coupures électriques massives.',
    location: 'Montpellier et périphérie',
    conditions: 'Canicule historique, Réseau électrique instable',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'voiture banalisée', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      "Sécuriser et éteindre les foyers d'incendie",
      "Désincarcérer et secourir les victimes",
      "Établir un périmètre de sécurité",
      "Protéger les installations sensibles",
      // POLICE (4 objectifs)
      "Maintenir l'ordre public et la sécurité",
      "Organiser l'évacuation des populations",
      "Coordonner avec les autorités compétentes",
      "Contrôler les accès et la circulation",
      // EAGLE FORCE (4 objectifs)
      "Reconnaissance aérienne de la situation",
      "Intervention tactique spécialisée",
      "Coordination opérationnelle multi-services",
      "Neutralisation des menaces identifiées",
      // SAMU (4 objectifs)
      "Triage médical et secours d'urgence",
      "Traitement des blessures et traumatismes",
      "Évacuation sanitaire des victimes",
      "Installation d'un poste médical avancé"
    ]
  }
];
