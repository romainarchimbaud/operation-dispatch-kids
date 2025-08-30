export interface Mission {
  id: number;
  title: string;
  location: string;
  conditions: string;
  vehicles: string[];
  objectives: string[];
  // Pour les missions d'alerte générale
  objectivesByService?: {
    pompiers: string[];
    police: string[];
    eagle: string[];
    samu: string[];
  };
}

export interface Vehicles {
  [key: string]: {
    name: string;
    description: string;
  };
}
