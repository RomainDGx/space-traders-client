import { WaypointType } from './WaypointType';

export type SystemWaypoint = {
    symbol: string;
    type: WaypointType;
    x: number;
    y: number;
}
