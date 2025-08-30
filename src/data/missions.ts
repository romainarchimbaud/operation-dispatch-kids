import { pompiersMissions } from './missions-pompiers';
import { policeMissions } from './missions-police';
import { eagleMissions } from './missions-eagle';
import { samuMissions } from './missions-samu';
import { alertesMissions } from './missions-alertes';
import { vehicles } from './vehicles';

export type { Mission, Vehicles } from './types';
export { vehicles };

export const missions = {
  pompiers: pompiersMissions,
  police: policeMissions,
  eagle: eagleMissions,
  samu: samuMissions,
  alertes: alertesMissions
};
