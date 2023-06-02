import { Chart } from './Chart';
import { WaypointFaction } from './WaypointFaction';
import { WaypointOrbital } from './WaypointOrbital';
import { WaypointTrait } from './WaypointTrait';
import { WaypointType } from './WaypointType';

export type Waypoint = {
    symbol: string;
    type: WaypointType;
    systemSymbol: string;
    x: number;
    y: number;
    orbitals: Array<WaypointOrbital>;
    faction: WaypointFaction;
    traits: Array<WaypointTrait>;
    chart: Chart;
}
