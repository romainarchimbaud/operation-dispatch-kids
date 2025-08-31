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
  },
  {
    id: 16,
    title: 'INCENDIE FORÊT DES LANDES — Feu de forêt majeur dans la pinède landaise. Villages menacés, autoroute A63 coupée, évacuation massive.',
    location: 'Forêt des Landes, entre Mimizan et Biscarrosse',
    conditions: 'Canicule, Vent d\'Est violent, Visibilité nulle par fumées',
    vehicles: ['vl feu', 'hélico (recherche)', 'bateau pompe', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Créer des coupe-feux d\'urgence avec bulldozers',
      'Bombardements d\'eau par Canadairs et hélicoptères',
      'Protéger les habitations isolées dans la pinède',
      'Sécuriser les dépôts de carburant et industries',
      'Évacuer les campings et résidences secondaires',
      // POLICE (4 objectifs)
      'Fermer l\'A63 et dévier le trafic sur A64',
      'Organiser l\'évacuation de Mimizan et villages',
      'Établir des points de regroupement sécurisés',
      'Coordonner avec les préfectures Landes/Gironde',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne de la progression du feu',
      'Guidage des Canadairs vers les foyers prioritaires',
      'Localisation des personnes isolées en forêt',
      'Installation PC de coordination inter-départements',
      // SAMU (4 objectifs)
      'Traiter les intoxications par fumées massives',
      'Soigner les brûlures graves des pompiers',
      'Évacuer vers CHU Bordeaux les cas critiques',
      'Installer poste médical avancé mobile'
    ]
  },
  {
    id: 17,
    title: 'TSUNAMI CÔTE BASQUE — Raz-de-marée suite à séisme Açores. Vagues 12m déferlent sur Biarritz, Anglet, Bayonne. Destruction massive.',
    location: 'Littoral basque, de Hendaye à Capbreton',
    conditions: 'Tempête atlantique, Mer démontée, Liaisons coupées',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage aquatique en zone côtière dévastée',
      'Recherche de survivants dans les décombres',
      'Pompage des zones inondées critiques',
      'Sécurisation des installations portuaires',
      'Évacuation d\'urgence des blessés graves',
      // POLICE (4 objectifs)
      'Évacuation préventive population côtière',
      'Fermeture routes côtières et ponts fragilisés',
      'Maintien ordre dans centres d\'hébergement',
      'Coordination avec autorités espagnoles',
      // EAGLE FORCE (4 objectifs)
      'Évaluation aérienne destruction littoral',
      'Hélitreuillage personnes bloquées toits/falaises',
      'Reconnaissance état infrastructures critiques',
      'Liaison coordination secours internationaux',
      // SAMU (4 objectifs)
      'Triage médical victimes noyades multiples',
      'Traitement hypothermies et traumatismes',
      'Évacuation sanitaire vers hôpitaux intérieurs',
      'Soutien psychologique post-traumatique'
    ]
  },
  {
    id: 18,
    title: 'EXPLOSION USINE CHIMIQUE LACQ — Accident majeur complexe gazier Lacq. Nuage toxique, risque explosion, évacuation 15km.',
    location: 'Complexe industriel de Lacq, Pyrénées-Atlantiques',
    conditions: 'Jour, Vent du Sud, Proximité Pau et agglomération',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction foyers et refroidissement cuves',
      'Confinement nuage toxique par rideaux d\'eau',
      'Décontamination équipes et matériel',
      'Protection installations adjacentes',
      'Évacuation personnel et riverains',
      // POLICE (4 objectifs)
      'Évacuation périmètre 15km incluant Lacq/Mourenx',
      'Fermeture axes routiers contaminés',
      'Information population mesures confinement',
      'Coordination préfecture et industriels',
      // EAGLE FORCE (4 objectifs)
      'Surveillance aérienne dérive nuage toxique',
      'Évaluation dommages installations critiques',
      'Sécurisation approche équipes spécialisées',
      'Coordination expertise technique',
      // SAMU (4 objectifs)
      'Antidotes et traitement intoxications chimiques',
      'Décontamination corporelle des victimes',
      'Évacuation vers services toxicologie spécialisés',
      'Surveillance médicale population exposée'
    ]
  },
  {
    id: 19,
    title: 'CRUE EXCEPTIONNELLE ADOUR — Crue centennale Adour. Bayonne sous les eaux, Anglet isolé, rupture digues, urgence absolue.',
    location: 'Bassin Adour, Bayonne, Anglet, Boucau',
    conditions: 'Nuit, Pluies diluviennes, Courant 8 km/h',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Quad', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage populations isolées sur toits',
      'Renforcement digues et protection ouvrages',
      'Évacuation maisons de retraite inondées',
      'Pompage parking souterrains et caves',
      'Sécurisation installations électriques noyées',
      // POLICE (4 objectifs)
      'Évacuation quartiers bas Bayonne/Anglet',
      'Fermeture ponts fragilisés Adour',
      'Organisation centres hébergement d\'urgence',
      'Maintien ordre éviter pillages',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne zones critiques',
      'Hélitreuillage personnes en détresse',
      'Évaluation stabilité infrastructures',
      'Coordination logistique multi-sites',
      // SAMU (4 objectifs)
      'Secours victimes hypothermie/noyade',
      'Évacuation médicalisée résidents EHPAD',
      'Traitement blessures et chocs traumatiques',
      'Installation poste médical surélevé'
    ]
  },
  {
    id: 20,
    title: 'ACCIDENT FERROVIAIRE MAJOR PAU — Déraillement TGV Paris-Hendaye gare Pau. 400 voyageurs, télescope wagons, incendie.',
    location: 'Gare SNCF Pau, voies principales',
    conditions: 'Matin, Brouillard, Heure affluence',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie wagons et désincarcération',
      'Découpe urgente structures déformées',
      'Évacuation voyageurs wagons renversés',
      'Sécurisation installations électriques SNCF',
      'Ventilation fumées toxiques en gare',
      // POLICE (4 objectifs)
      'Périmètre sécurité et évacuation gare',
      'Gestion panique et familles des victimes',
      'Enquête préliminaire causes accident',
      'Coordination trafic ferroviaire national',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne ampleur dégâts',
      'Coordination opérationnelle multi-services',
      'Sécurisation zone intervention',
      'Liaison expertise ferroviaire SNCF',
      // SAMU (5 objectifs)
      'Triage médical urgence 400 voyageurs',
      'Traitement polytraumatismes et brûlures',
      'Évacuation héliportée cas les plus graves',
      'Installation hôpital de campagne',
      'Soutien psychologique victimes/familles'
    ]
  },
  {
    id: 21,
    title: 'TORNADE F3 LANDES — Tornade exceptionnelle traverse Hossegor-Capbreton. Destruction massive, camping détruit, 50 blessés.',
    location: 'Côte landaise, Hossegor, Capbreton, Seignosse',
    conditions: 'Après-midi, Orages supercellulaires, Vents 250 km/h',
    vehicles: ['hélico (recherche)', 'vl police', 'vl feu', 'Camion blindé PC', 'Hélico Eagle', 'Quad', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Recherche survivants sous décombres campings',
      'Sécurisation bâtiments partiellement effondrés',
      'Dégagement axes accès aux secours',
      'Extinction foyers causés lignes électriques',
      // POLICE (4 objectifs)
      'Évacuation zones dangereuses instables',
      'Recensement personnes disparues/déplacées',
      'Protection biens contre pillages',
      'Coordination hébergement d\'urgence',
      // EAGLE FORCE (5 objectifs)
      'Évaluation aérienne corridor destruction',
      'Héliportage matériel lourd de déblaiement',
      'Localisation personnes isolées décombres',
      'Installation poste commandement mobile',
      'Coordination logistique reconstruction',
      // SAMU (4 objectifs)
      'Soins trauma multiples et fractures',
      'Traitement coupures/lacérations débris volants',
      'Évacuation blessés graves vers CHU',
      'Soutien psychologique choc post-tornado'
    ]
  },
  {
    id: 22,
    title: 'ATTENTAT FESTIVALLES BAYONNE — Explosion véhicule piégé Fêtes Bayonne. Foule panique, nombreuses victimes, menace persistante.',
    location: 'Centre historique Bayonne, Grand Bayonne',
    conditions: 'Soirée, Foule dense festival, Rues étroites',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Extinction foyers et sauvetage sous décombres',
      'Évacuation d\'urgence zones à risque',
      'Déblaiement accès aux victimes',
      'Sécurisation installations gaz historiques',
      // POLICE (5 objectifs)
      'Évacuation massive foule en panique',
      'Recherche complices et explosifs',
      'Périmètre anti-terroriste centre ville',
      'Protection sites sensibles municipaux',
      'Coordination forces intervention spécialisées',
      // EAGLE FORCE (4 objectifs)
      'Neutralisation menaces terroristes',
      'Surveillance tactique périmètre élargi',
      'Protection équipes secours sur site',
      'Reconnaissance zones suspectes',
      // SAMU (5 objectifs)
      'Triage médical victimes explosion',
      'Traitement urgence polytraumatismes',
      'Soins brûlures et blessures par éclats',
      'Évacuation multiple vers hôpitaux région',
      'Prise en charge stress post-traumatique'
    ]
  },
  {
    id: 23,
    title: 'ÉBOULEMENT PYRÉNÉES — Glissement terrain massif col Aubisque. Route coupée, cars touristes bloqués, village menacé.',
    location: 'Col d\'Aubisque, vallée d\'Ossau, Pyrénées-Atlantiques',
    conditions: 'Après-midi, Pluies intenses, Terrain instable',
    vehicles: ['hélico (recherche)', 'Quad', 'Camion logistique', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Dégagement cars ensevelis partiellement',
      'Sauvetage touristes bloqués en altitude',
      'Sécurisation zones instables persistantes',
      'Évacuation préventive village aval',
      // POLICE (4 objectifs)
      'Fermeture col et routes de montagne',
      'Évacuation population village menacé',
      'Coordination secours montagne spécialisés',
      'Gestion familles touristes bloqués',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance géologique zones risque',
      'Hélitreuillage victimes zone inaccessible',
      'Transport matériel géotechnique spécialisé',
      'Évaluation stabilité versants adjacents',
      'Installation PC montagne temporaire',
      // SAMU (4 objectifs)
      'Soins traumatismes et ensevelissements',
      'Évacuation héliportée blessés graves',
      'Traitement hypothermie altitude',
      'Poste médical avancé en montagne'
    ]
  },
  {
    id: 24,
    title: 'NAUFRAGE CARGO GOLFE GASCOGNE — Cargo en perdition au large Capbreton. 25 marins, pollution hydrocarbures, tempête.',
    location: 'Golfe de Gascogne, 15 nautiques Capbreton',
    conditions: 'Tempête Atlantique, Mer force 8, Visibilité nulle',
    vehicles: ['annexe', 'bateau pompe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'Bateau rapide'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage en mer équipage cargo',
      'Lutte pollution hydrocarbures dérivante',
      'Déploiement barrages flottants protection côte',
      'Extinction éventuel incendie navire',
      'Protection installations portuaires',
      // POLICE (4 objectifs)
      'Coordination Cross Atlantique secours mer',
      'Évacuation préventive plages menacées',
      'Enquête maritime causes naufrage',
      'Information population risque pollution',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne dérive pollution',
      'Hélitreuillage équipage naufragés',
      'Coordination secours internationaux',
      'Surveillance navires assistance',
      // SAMU (4 objectifs)
      'Réanimation naufragés hypothermie',
      'Traitement ingestion hydrocarbures',
      'Évacuation héliportée vers terre',
      'Poste médical portuaire d\'urgence'
    ]
  },
  {
    id: 25,
    title: 'FUITE GAZ MASSIF PAU — Rupture canalisation gaz haute pression centre Pau. Évacuation 5000 personnes, risque explosion.',
    location: 'Centre-ville Pau, Boulevard des Pyrénées',
    conditions: 'Matin, Circulation dense, Bâtiments anciens',
    vehicles: ['vl feu', 'vl police', 'fourgon blindé', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Fermeture vannes et arrêt fuite gaz',
      'Évacuation périmètre 500m sécurité',
      'Ventilation gaz accumulé bâtiments',
      'Protection contre sources ignition',
      'Préparation extinction si inflammation',
      // POLICE (4 objectifs)
      'Évacuation massive centre-ville Pau',
      'Périmètre sécurité et déviation trafic',
      'Hébergement urgence populations',
      'Coordination services techniques GRDF',
      // EAGLE FORCE (4 objectifs)
      'Surveillance périmètre par drone',
      'Coordination évacuation héliportée',
      'Installation PC coordination sécurisé',
      'Reconnaissance zones à risque',
      // SAMU (4 objectifs)
      'Traitement intoxications gaz légères',
      'Préparation victimes explosion potentielle',
      'Évacuation préventive établissements santé',
      'Poste médical périmètre sécurité'
    ]
  },
  {
    id: 26,
    title: 'CRASH HÉLICOPTÈRE SAMU PYRÉNÉES — Crash hélicoptère secours montagne. Équipe médicale en détresse, terrain difficile.',
    location: 'Massif du Pic du Midi, haute montagne',
    conditions: 'Météo dégradée, Brouillard, Vent violent',
    vehicles: ['hélico (recherche)', 'Quad', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Recherche épave et survivants montagne',
      'Secours équipe médicale crashée',
      'Extinction incendie épave carburant',
      'Sécurisation site accident',
      // POLICE (4 objectifs)
      'Coordination secours montagne spécialisés',
      'Enquête préliminaire crash aérien',
      'Sécurisation périmètre épave',
      'Liaison familles victimes',
      // EAGLE FORCE (5 objectifs)
      'Localisation précise épave montagne',
      'Hélitreuillage survivants terrain difficile',
      'Transport matériel secours spécialisé',
      'Reconnaissance météo conditions vol',
      'Coordination aérienne sécurisée',
      // SAMU (4 objectifs)
      'Soins équipe médicale blessée',
      'Traitement traumatismes impact crash',
      'Évacuation médicalisée montagne',
      'Remplacement équipe secours montagne'
    ]
  },
  {
    id: 27,
    title: 'POLLUTION CHIMIQUE GAVE PAU — Déversement produits chimiques industriels Gave de Pau. Nappe toxique, faune menacée.',
    location: 'Gave de Pau, de Pau à confluence Adour',
    conditions: 'Courant modéré, Risque contamination Adour',
    vehicles: ['bateau pompe', 'annexe', 'vl feu', 'vl police', 'Drone', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Confinement nappe polluante par barrages',
      'Pompage et récupération produits chimiques',
      'Décontamination berges souillées',
      'Protection prises d\'eau potable',
      'Neutralisation substances toxiques',
      // POLICE (4 objectifs)
      'Fermeture cours d\'eau activités nautiques',
      'Évacuation populations riveraines',
      'Enquête origine déversement industriel',
      'Information risques contamination',
      // EAGLE FORCE (4 objectifs)
      'Surveillance aérienne étendue pollution',
      'Reconnaissance prises eau menacées',
      'Coordination expertise environnementale',
      'Évaluation impact écologique',
      // SAMU (4 objectifs)
      'Traitement expositions chimiques',
      'Surveillance population riveraine',
      'Décontamination personnes exposées',
      'Prévention intoxications alimentaires'
    ]
  },
  {
    id: 28,
    title: 'INCENDIE COMPLEXE PÉTROCHIMIQUE MOURENX — Incendie majeur usine pétrochimique. Explosions multiples, nuage toxique.',
    location: 'Zone industrielle Mourenx, Pyrénées-Atlantiques',
    conditions: 'Vent du Nord, Proximité agglomération paloise',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie cuves hydrocarbures',
      'Refroidissement installations adjacentes',
      'Mousse anti-feu sur produits chimiques',
      'Évacuation personnel et riverains',
      'Confinement vapeurs toxiques',
      // POLICE (4 objectifs)
      'Évacuation périmètre 3km sécurité',
      'Fermeture axes routiers contaminés',
      'Coordination autorités préfectorales',
      'Protection populations confinées',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance risques explosions secondaires',
      'Coordination expertise chimique',
      'Surveillance dérive nuage toxique',
      'Sécurisation approche spécialistes',
      // SAMU (5 objectifs)
      'Antidotes intoxications chimiques industrielles',
      'Traitement brûlures chimiques graves',
      'Décontamination massive personnels',
      'Évacuation vers centres spécialisés',
      'Surveillance médicale long terme'
    ]
  },
  {
    id: 29,
    title: 'AVALANCHE STATION PYréNéES — Avalanche massive station Gourette. Skieurs ensevelis, chalets détruits, accès coupé.',
    location: 'Station Gourette, vallée d\'Ossau',
    conditions: 'Risque avalancheux maximal, Chutes neige',
    vehicles: ['hélico (recherche)', 'Quad', 'Camion logistique', 'vl police', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Recherche ARVA skieurs ensevelis',
      'Dégagement chalets écrasés avalanche',
      'Sauvetage personnes bloquées',
      'Sécurisation zones instables neige',
      'Évacuation blessés terrain difficile',
      // POLICE (4 objectifs)
      'Évacuation station et sécurisation',
      'Recensement skieurs disparus',
      'Coordination secours montagne',
      'Liaison familles victimes',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance aérienne coulée avalanche',
      'Hélitreuillage victimes zone dangereuse',
      'Transport matériel sondage spécialisé',
      'Évaluation risque avalanches secondaires',
      'Coordination météo montagne',
      // SAMU (4 objectifs)
      'Soins hypothermie et ensevelissement',
      'Réanimation victimes asphyxie neige',
      'Évacuation héliportée urgences vitales',
      'Poste médical avancé montagne'
    ]
  },
  {
    id: 30,
    title: 'ÉMEUTES QUARTIERS BAYONNE — Violences urbaines généralisées quartiers Sainte-Croix. Commerces pillés, véhicules incendiés.',
    location: 'Quartier Sainte-Croix, Bayonne',
    conditions: 'Nuit, Projectiles, Barricades, Visibilité réduite',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Extinction véhicules et bâtiments incendiés',
      'Protection habitations riveraines',
      'Sauvetage personnes menacées',
      'Sécurisation interventions sous protection',
      // POLICE (5 objectifs)
      'Rétablissement ordre public et sécurité',
      'Dispersion groupes violents organisés',
      'Protection commerces et biens privés',
      'Arrestations meneurs et casseurs',
      'Coordination forces ordre maintenues',
      // EAGLE FORCE (4 objectifs)
      'Surveillance tactique aérienne émeutes',
      'Reconnaissance mouvements émeutiers',
      'Protection équipes intervention sol',
      'Coordination stratégique opérationnelle',
      // SAMU (4 objectifs)
      'Soins blessures projectiles et coups',
      'Traitement intoxications fumées',
      'Évacuation blessés zone hostile',
      'Poste médical sécurisé périmètre'
    ]
  },
  {
    id: 31,
    title: 'RUPTURE BARRAGE GAVE — Rupture partielle barrage Gave Oloron. Onde de crue, évacuation urgente vallées aval.',
    location: 'Vallée Gave d\'Oloron, de Oloron à Peyrehorade',
    conditions: 'Crue exceptionnelle, Courant très violent',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage populations sur toits/arbres',
      'Évacuation urgente zones inondables',
      'Renforcement digues protection',
      'Recherche personnes emportées',
      'Pompage zones critiques',
      // POLICE (4 objectifs)
      'Évacuation massive vallées aval',
      'Fermeture ponts et routes inondables',
      'Alerte sirènes et haut-parleurs',
      'Coordination préfecture urgence',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance onde crue progression',
      'Hélitreuillage personnes isolées',
      'Évaluation dommages infrastructures',
      'Coordination logistique hébergement',
      // SAMU (4 objectifs)
      'Secours noyades et hypothermies',
      'Évacuation médicalisée EHPAD menacés',
      'Traitement traumatismes et chocs',
      'Installation poste médical surélevé'
    ]
  },
  {
    id: 32,
    title: 'PRISE OTAGES PRISON PAU — Mutinerie prison Pau-Uzein. Gardiens pris en otages, incendies, évasions tentées.',
    location: 'Centre pénitentiaire Pau-Uzein',
    conditions: 'Situation tendue, Médias présents',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Extinction incendies cellules et ateliers',
      'Sécurisation évacuation personnels',
      'Coupure alimentations gaz/électricité',
      'Préparation évacuation urgence',
      // POLICE (5 objectifs)
      'Négociation avec mutins armés',
      'Périmètre sécurité pénitentiaire renforcé',
      'Prévention évasions opportunistes',
      'Intervention spécialisée RAID si nécessaire',
      'Coordination direction pénitentiaire',
      // EAGLE FORCE (4 objectifs)
      'Surveillance tactique établissement',
      'Reconnaissance positions mutins',
      'Préparation intervention coordonnée',
      'Neutralisation menaces si escalade',
      // SAMU (4 objectifs)
      'Soins gardiens blessés otages',
      'Traitement blessures par armes',
      'Préparation évacuation blessés graves',
      'Soutien psychologique traumatisé'
    ]
  },
  {
    id: 33,
    title: 'CRASH AVION TOURISME CÔTE — Crash avion tourisme plage Biarritz. Appareil en feu, baigneurs menacés, carburant mer.',
    location: 'Plage Grande Plage Biarritz',
    conditions: 'Été, Plage bondée, Vent de mer',
    vehicles: ['vl feu', 'annexe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Bateau rapide', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie épave avion',
      'Évacuation urgente plage bondée',
      'Sauvetage pilote/passagers crashés',
      'Confinement pollution carburant mer',
      'Protection installations balnéaires',
      // POLICE (4 objectifs)
      'Évacuation massive plage et promenade',
      'Périmètre sécurité débris épave',
      'Gestion panique estivaux',
      'Enquête préliminaire crash',
      // EAGLE FORCE (4 objectifs)
      'Coordination secours aéro-maritimes',
      'Reconnaissance débris dangereux',
      'Évaluation pollution marine',
      'Sécurisation intervention plage',
      // SAMU (4 objectifs)
      'Triage victimes crash et panique',
      'Traitement brûlures et traumatismes',
      'Soins inhalation fumées toxiques',
      'Évacuation blessés graves'
    ]
  },
  {
    id: 34,
    title: 'EFFONDREMENT FALAISE BIARRITZ — Effondrement massif falaise Rocher Vierge. Promeneurs ensevelis, route coupée.',
    location: 'Rocher de la Vierge, côte biarrotte',
    conditions: 'Après tempête, Terrain instable, Marée haute',
    vehicles: ['hélico (recherche)', 'annexe', 'vl police', 'vl feu', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Recherche survivants sous éboulis',
      'Dégagement accès promeneurs bloqués',
      'Sécurisation falaises instables',
      'Évacuation par voie maritime',
      'Étaiement rochers menaçants',
      // POLICE (4 objectifs)
      'Évacuation périmètre falaises dangereuses',
      'Fermeture sentiers côtiers',
      'Recensement promeneurs disparus',
      'Coordination secours géotechniques',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance géologique instabilité',
      'Hélitreuillage victimes zone inaccessible',
      'Évaluation risques chutes secondaires',
      'Transport matériel stabilisation',
      'Coordination expertise spécialisée',
      // SAMU (4 objectifs)
      'Soins polytraumatismes ensevelissement',
      'Traitement fractures et écrasements',
      'Évacuation héliportée urgences',
      'Poste médical mobile côtier'
    ]
  },
  {
    id: 35,
    title: 'CANICULE EXTRÊME LANDES — Canicule historique 48°C Landes. Feux spontanés, décès multiples, hôpitaux saturés.',
    location: 'Département des Landes, Mont-de-Marsan',
    conditions: 'Canicule record, Sécheresse extrême',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'voiture banalisée', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction feux spontanés végétation',
      'Arrosage préventif zones à risque',
      'Refroidissement centres urbains',
      'Protection installations sensibles',
      'Surveillance permanente température',
      // POLICE (4 objectifs)
      'Organisation centres rafraîchissement',
      'Assistance populations vulnérables',
      'Contrôle interdictions feux',
      'Coordination plan canicule',
      // EAGLE FORCE (4 objectifs)
      'Surveillance aérienne départs feux',
      'Reconnaissance zones critiques',
      'Coordination logistique eau',
      'Évaluation besoins populations',
      // SAMU (5 objectifs)
      'Traitement déshydratations massives',
      'Soins coups chaleur et hyperthermies',
      'Évacuation urgences thermiques',
      'Renforcement équipes mobiles',
      'Surveillance populations à risque'
    ]
  },
  {
    id: 36,
    title: 'ATTAQUE TERRORISTE AÉROPORT BIARRITZ — Attaque coordonnée aéroport Biarritz-Parme. Explosions, prises otages, chaos total.',
    location: 'Aéroport Biarritz-Pays Basque-Parme',
    conditions: 'Saison touristique, Affluence maximale',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Extinction incendies et sauvetages',
      'Évacuation terminaux aéroportuaires',
      'Sécurisation installations aviation',
      'Dégagement accès équipes spécialisées',
      // POLICE (5 objectifs)
      'Neutralisation terroristes armés',
      'Évacuation passagers et personnels',
      'Sécurisation périmètre anti-terroriste',
      'Recherche explosifs et complices',
      'Coordination forces intervention nationales',
      // EAGLE FORCE (5 objectifs)
      'Assaut coordonné positions terroristes',
      'Libération otages hall aéroport',
      'Reconnaissance tactique bâtiments',
      'Neutralisation menaces persistantes',
      'Protection équipes au sol',
      // SAMU (4 objectifs)
      'Triage victimes attaques multiples',
      'Traitement blessures balles/explosions',
      'Évacuation médicalisée urgente',
      'Soutien psychologique traumatisés'
    ]
  },
  {
    id: 37,
    title: 'MARÉE NOIRE CÔTE LANDAISE — Pétrolier échoué Capbreton. Marée noire massive, faune menacée, économie côtière.',
    location: 'Côte landaise, de Capbreton à Mimizan',
    conditions: 'Mer agitée, Vent portant vers côte',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'vl police', 'Drone', 'Hélico Eagle', 'Bateau rapide'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Déploiement barrages flottants massifs',
      'Récupération hydrocarbures en mer',
      'Protection installations portuaires',
      'Nettoyage plages souillées',
      'Sauvetage faune marine mazoutée',
      // POLICE (4 objectifs)
      'Évacuation activités nautiques',
      'Fermeture plages contaminées',
      'Coordination économie maritime',
      'Enquête maritime responsabilités',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance étendue pollution',
      'Coordination expertise environnementale',
      'Évaluation impact écologique',
      'Logistique dépollution massive',
      // SAMU (4 objectifs)
      'Traitement expositions hydrocarbures',
      'Soins personnels dépollution',
      'Surveillance santé populations côtières',
      'Prévention intoxications alimentaires'
    ]
  },
  {
    id: 38,
    title: 'SÉISME 5.8 PYRÉNÉES — Séisme importante frontière franco-espagnole. Dégâts transfrontaliers, communications coupées.',
    location: 'Pyrénées-Atlantiques, frontière Espagne',
    conditions: 'Montagne, Répliques, Liaisons perturbées',
    vehicles: ['hélico (recherche)', 'vl police', 'Quad', 'Camion blindé PC', 'Hélico Eagle', 'Camion logistique', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Recherche survivants villages montagne',
      'Sécurisation bâtiments endommagés',
      'Rétablissement communications',
      'Évaluation dommages infrastructures',
      // POLICE (4 objectifs)
      'Coordination secours transfrontaliers',
      'Évacuation zones dangereuses',
      'Liaison autorités espagnoles',
      'Sécurisation voies accès',
      // EAGLE FORCE (5 objectifs)
      'Évaluation aérienne dégâts régionaux',
      'Coordination secours internationaux',
      'Héliportage matériel reconstruction',
      'Installation PC transfrontalier',
      'Reconnaissance villages isolés',
      // SAMU (4 objectifs)
      'Soins polytraumatismes séisme',
      'Évacuation héliportée transfrontalière',
      'Installation poste médical montagne',
      'Coordination sanitaire binationale'
    ]
  },
  {
    id: 39,
    title: 'EXPLOSION USINE MÉTHANE LACQ — Explosion réservoirs méthane complexe Lacq. Boule de feu, onde choc, évacuation massive.',
    location: 'Site industriel Lacq, installations Total',
    conditions: 'Vent variable, Risque explosion secondaire',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'Hélico Eagle', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie et refroidissement',
      'Protection réservoirs adjacents',
      'Évacuation personnel industriel',
      'Mousse anti-feu hydrocarbures',
      'Surveillance température installations',
      // POLICE (4 objectifs)
      'Évacuation périmètre 10km urgence',
      'Fermeture axes routiers dangereux',
      'Coordination autorités industrielles',
      'Protection populations confinées',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance dommages explosions',
      'Évaluation risques cascade',
      'Coordination expertise technique',
      'Surveillance installations critiques',
      // SAMU (5 objectifs)
      'Traitement brûlures explosion massive',
      'Soins lésions onde de choc',
      'Évacuation grands brûlés spécialisés',
      'Décontamination chimique',
      'Installation hôpital campagne'
    ]
  },
  {
    id: 40,
    title: 'COUPURE ÉLECTRIQUE GÉNÉRALISÉE — Panne électrique massive Sud-Ouest. Hôpitaux en urgence, chaos urbain, panique.',
    location: 'Agglomérations Pau, Bayonne, Dax, Mont-de-Marsan',
    conditions: 'Nuit, Black-out total, Communications limitées',
    vehicles: ['vl police', 'fourgon blindé', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Sauvetage personnes bloquées ascenseurs',
      'Sécurisation installations sensibles',
      'Éclairage urgence voies importantes',
      'Protection contre incendies opportunistes',
      // POLICE (5 objectifs)
      'Maintien ordre prévention pillages',
      'Régulation trafic feux coupés',
      'Protection sites sensibles',
      'Coordination centres crise',
      'Assistance populations vulnérables',
      // EAGLE FORCE (4 objectifs)
      'Coordination logistique générateurs',
      'Surveillance sécuritaire aérienne',
      'Reconnaissance zones critiques',
      'Installation PC autonome',
      // SAMU (5 objectifs)
      'Maintien fonctionnement hôpitaux',
      'Évacuation patients respirateurs',
      'Renforcement équipes mobiles',
      'Coordination dialyses urgence',
      'Surveillance populations à risque'
    ]
  },
  {
    id: 41,
    title: 'COLLISION TRAINS BAYONNE — Collision frontale trains marchandises/voyageurs. Déraillement, incendie, produits chimiques.',
    location: 'Voies SNCF périphérie Bayonne',
    conditions: 'Brouillard dense, Signalisation défaillante',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie wagons renversés',
      'Désincarcération voyageurs bloqués',
      'Confinement produits chimiques déversés',
      'Sécurisation installations électriques',
      'Décontamination zone accident',
      // POLICE (4 objectifs)
      'Périmètre sécurité et évacuation',
      'Enquête causes collision ferroviaire',
      'Coordination trafic SNCF national',
      'Gestion familles victimes',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance ampleur catastrophe',
      'Coordination expertise ferroviaire',
      'Évaluation risques environnementaux',
      'Logistique matériel spécialisé',
      // SAMU (5 objectifs)
      'Triage médical urgence massive',
      'Traitement polytraumatismes graves',
      'Évacuation héliportée prioritaires',
      'Soins intoxications chimiques',
      'Installation hôpital campagne'
    ]
  },
  {
    id: 42,
    title: 'TEMPÊTE EXCEPTIONNELLE CÔTE BASQUE — Tempête historique Klaus bis. Vents 200 km/h, submersion marine, dégâts massifs.',
    location: 'Littoral basque, Hendaye à Capbreton',
    conditions: 'Tempête centennale, Mer démontée, Liaisons coupées',
    vehicles: ['bateau pompe', 'hélico (recherche)', 'vl police', 'vl feu', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage personnes toits arrachés',
      'Dégagement routes coupées arbres',
      'Sécurisation lignes électriques',
      'Évacuation zones submergées',
      'Recherche disparus tempête',
      // POLICE (4 objectifs)
      'Évacuation préventive littoral',
      'Fermeture routes dangereuses',
      'Coordination hébergement urgence',
      'Protection biens abandonnés',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance dégâts par survols',
      'Hélitreuillage isolés inaccessibles',
      'Évaluation infrastructures critiques',
      'Coordination logistique reconstruction',
      'Transport matériel urgence',
      // SAMU (4 objectifs)
      'Soins traumatismes objets volants',
      'Traitement hypothermies exposition',
      'Évacuation blessés zones isolées',
      'Renforcement équipes mobiles'
    ]
  },
  {
    id: 43,
    title: 'ÉCHOUAGE BALEINE CÔTE LANDAISE — Échouage massif 50 cétacés plage Hossegor. Opération sauvetage, remise à flot urgente.',
    location: 'Plages Hossegor, Capbreton, Seignosse',
    conditions: 'Marée descendante, Temps limité',
    vehicles: ['annexe', 'bateau pompe', 'hélico (recherche)', 'vl police', 'Bateau rapide', 'Camion logistique', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Maintien hydratation cétacés échoués',
      'Organisation logistique remise flot',
      'Transport matériel spécialisé',
      'Coordination sauvetage maritime',
      // POLICE (4 objectifs)
      'Évacuation plages périmètre sécurité',
      'Gestion curieux et circulation',
      'Coordination associations protection',
      'Logistique hébergement bénévoles',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance aérienne bancs cétacés',
      'Transport experts biologistes marins',
      'Coordination opération sauvetage',
      'Surveillance sanitaire animaux',
      // SAMU (4 objectifs)
      'Surveillance vétérinaire cétacés',
      'Traitement blessures manipulation',
      'Coordination expertise marine',
      'Soutien équipes sauvetage'
    ]
  },
  {
    id: 44,
    title: 'FOUDROIEMENT MASSIF FESTIVAL — Orage violent festival musique Bayonne. Foudre sur foule, électrocutions multiples, panique.',
    location: 'Parc exposition Bayonne, festival musique',
    conditions: 'Orage supercellulaire, Structures métalliques',
    vehicles: ['hélico (recherche)', 'vl police', 'fourgon blindé', 'vl feu', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Évacuation urgente site festival',
      'Sécurisation installations électriques',
      'Extinction incendies électriques',
      'Coupure alimentations dangereuses',
      // POLICE (4 objectifs)
      'Évacuation ordonnée 20000 festivaliers',
      'Gestion panique collective',
      'Coordination centres hébergement',
      'Sécurisation périmètre orage',
      // EAGLE FORCE (4 objectifs)
      'Surveillance météorologique aérienne',
      'Coordination évacuation massive',
      'Reconnaissance zones sécurisées',
      'Logistique transport blessés',
      // SAMU (5 objectifs)
      'Réanimation victimes foudroiement',
      'Traitement arrêts cardiaques multiples',
      'Soins brûlures électriques',
      'Évacuation urgences cardiaques',
      'Triage médical sur site'
    ]
  },
  {
    id: 45,
    title: 'RUPTURE DIGUE TECH — Rupture digue rivière Tech. Inondation soudaine villages Pyrénées-Atlantiques, isolement montagne.',
    location: 'Vallée du Tech, villages pyrénéens',
    conditions: 'Crue subite, Terrain montagneux',
    vehicles: ['bateau pompe', 'annexe', 'hélico (recherche)', 'Quad', 'Camion blindé PC', 'Hélico Eagle', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Sauvetage aquatique villages inondés',
      'Évacuation populations isolées',
      'Renforcement digues aval',
      'Recherche emportés par crue',
      'Pompage zones habitées',
      // POLICE (4 objectifs)
      'Évacuation urgente vallée aval',
      'Fermeture routes montagne',
      'Alerte populations par moyens exceptionnels',
      'Coordination secours montagne',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance rupture et extension',
      'Hélitreuillage villages isolés',
      'Évaluation dommages infrastructures montagne',
      'Transport matériel consolidation',
      'Coordination expertise géotechnique',
      // SAMU (4 objectifs)
      'Secours noyades et hypothermies',
      'Évacuation médicalisée héliportée',
      'Traitement traumatismes crue',
      'Poste médical avancé montagne'
    ]
  },
  {
    id: 46,
    title: 'ATTAQUE CHIMIQUE GARE PAU — Attentat chimique gare SNCF Pau. Gaz de combat, contamination massive, évacuation urgente.',
    location: 'Gare SNCF Pau, centre-ville',
    conditions: 'Heure pointe, Vent faible, Contamination',
    vehicles: ['vl feu', 'vl police', 'fourgon blindé', 'hélico', 'Camion blindé PC', 'Drone', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Décontamination massive victimes',
      'Confinement nuage chimique guerre',
      'Évacuation gare contaminée',
      'Neutralisation agents chimiques',
      'Protection équipes décontamination',
      // POLICE (5 objectifs)
      'Évacuation périmètre contamination',
      'Recherche terroristes responsables',
      'Coordination forces anti-terroristes',
      'Protection populations confinées',
      'Enquête attaque chimique',
      // EAGLE FORCE (4 objectifs)
      'Neutralisation terroristes chimiques',
      'Reconnaissance zones contaminées',
      'Coordination expertise NRBC',
      'Sécurisation intervention spécialisée',
      // SAMU (5 objectifs)
      'Antidotes intoxications guerre chimique',
      'Décontamination corporelle urgente',
      'Traitement détresse respiratoire',
      'Évacuation vers centres spécialisés',
      'Surveillance long terme contamination'
    ]
  },
  {
    id: 47,
    title: 'GLISSEMENT TERRAIN AUTOROUTE — Glissement massif coteau A64 près Pau. Véhicules ensevelis, autoroute coupée.',
    location: 'Autoroute A64, section Pau-Oloron',
    conditions: 'Pluies intenses, Terrain instable',
    vehicles: ['vl feu', 'hélico (recherche)', 'vl police', 'Quad', 'Camion blindé PC', 'Hélico Eagle', 'Camion logistique', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Dégagement véhicules ensevelis',
      'Recherche survivants sous terre',
      'Sécurisation zones instables persistantes',
      'Étaiement urgence talus menaçants',
      'Évacuation blessés terrain difficile',
      // POLICE (4 objectifs)
      'Fermeture A64 et déviations massives',
      'Évacuation véhicules bloqués',
      'Coordination trafic national',
      'Recensement véhicules disparus',
      // EAGLE FORCE (5 objectifs)
      'Reconnaissance géologique instabilité',
      'Hélitreuillage victimes inaccessibles',
      'Transport matériel stabilisation urgent',
      'Évaluation risques géotechniques',
      'Coordination expertise spécialisée sols',
      // SAMU (4 objectifs)
      'Soins polytraumatismes ensevelissement',
      'Traitement asphyxies et écrasements',
      'Évacuation héliportée urgences',
      'Poste médical mobile autoroutier'
    ]
  },
  {
    id: 48,
    title: 'ÉRUPTION SOLAIRE GÉOMAGNÉTIQUE — Tempête solaire majeure. Satellites coupés, GPS inutilisable, réseaux électriques instables.',
    location: 'Région Sud-Ouest, toutes agglomérations',
    conditions: 'Perturbations électromagnétiques majeures',
    vehicles: ['vl police', 'voiture banalisée', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Sécurisation installations électriques sensibles',
      'Maintenance équipements communications',
      'Protection contre surtensions',
      'Surveillance incendies électriques',
      // POLICE (5 objectifs)
      'Régulation trafic sans feux automatiques',
      'Maintien ordre perturbations technologiques',
      'Coordination communications alternatives',
      'Protection infrastructures critiques',
      'Assistance populations désorientées',
      // EAGLE FORCE (4 objectifs)
      'Coordination communications secours',
      'Reconnaissance état infrastructures',
      'Évaluation perturbations systèmes',
      'Installation PC communications autonome',
      // SAMU (4 objectifs)
      'Maintien équipements vitaux hôpitaux',
      'Coordination urgences sans GPS',
      'Surveillance patients appareillages',
      'Communication radio alternative'
    ]
  },
  {
    id: 49,
    title: 'INCENDIE CENTRE HISTORIQUE BAYONNE — Incendie majeur centre historique Bayonne. Rues étroites, bâtiments anciens, propagation rapide.',
    location: 'Petit Bayonne, quartier historique',
    conditions: 'Vent du Sud, Bâtiments serrés, Accès difficile',
    vehicles: ['vl feu', 'bateau pompe', 'hélico (recherche)', 'vl police', 'fourgon blindé', 'ambulance'],
    objectives: [
      // POMPIERS (5 objectifs)
      'Extinction incendie bâtiments anciens',
      'Protection patrimoine historique',
      'Évacuation résidents centre ancien',
      'Approvisionnement eau par Nive',
      'Création coupe-feu préventifs',
      // POLICE (4 objectifs)
      'Évacuation massive centre historique',
      'Fermeture accès véhicules',
      'Coordination patrimoine culturel',
      'Gestion population et visiteurs',
      // EAGLE FORCE (4 objectifs)
      'Reconnaissance progression incendie',
      'Coordination protection patrimoine',
      'Transport matériel spécialisé',
      'Évaluation dommages culturels',
      // SAMU (4 objectifs)
      'Traitement intoxications fumées',
      'Soins brûlures et inhalations',
      'Évacuation blessés rues étroites',
      'Poste médical périmètre'
    ]
  },
  {
    id: 50,
    title: 'PANDÉMIE GRIPPE AVIAIRE — Épidémie grippe aviaire H5N1 mutée. Transmission humaine, hôpitaux saturés, quarantaine générale.',
    location: 'Pyrénées-Atlantiques et Landes',
    conditions: 'Contagion rapide, Panique sanitaire',
    vehicles: ['vl police', 'voiture banalisée', 'hélico', 'Camion blindé PC', 'ambulance'],
    objectives: [
      // POMPIERS (4 objectifs)
      'Décontamination espaces publics',
      'Transport matériel médical urgent',
      'Sécurisation centres quarantaine',
      'Logistique équipements protection',
      // POLICE (5 objectifs)
      'Application mesures quarantaine',
      'Maintien ordre centres isolement',
      'Coordination approvisionnement essentiel',
      'Protection personnels santé',
      'Lutte contre désinformation panique',
      // EAGLE FORCE (4 objectifs)
      'Coordination logistique médicale',
      'Transport vaccins et médicaments',
      'Surveillance respect confinement',
      'Installation centres traitement',
      // SAMU (5 objectifs)
      'Traitement patients grippe mutée',
      'Organisation tri patients infectés',
      'Évacuation cas graves spécialisés',
      'Protection équipes médicales',
      'Coordination épidémiologique régionale'
    ]
  }
];