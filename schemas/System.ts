import { SystemFaction } from './SystemFaction';
import { SystemType } from './SystemType';
import { SystemWaypoint } from './SystemWaypoint';

export type System = {
    symbol: string;
    sectorSymbol: string;
    type: SystemType;
    x: number;
    y: number;
    waypoints: Array<SystemWaypoint>;
    factions: Array<SystemFaction>
}
