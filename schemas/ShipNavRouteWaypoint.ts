import { WaypointType } from './WaypointType';

export type ShipNavRouteWaypoint = {
    symbol: string;
    type: WaypointType;
    systemSymbol: string;
    x: number;
    y: number;
}
