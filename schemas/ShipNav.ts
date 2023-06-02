import { ShipNavFlightMode } from './ShipNavFlightMode';
import { ShipNavRoute } from './ShipNavRoute';
import { ShipNavStatus } from './ShipNavStatus';

export type ShipNav = {
    systemSymbol: string;
    waypointSymbol: string;
    route: ShipNavRoute;
    status: ShipNavStatus;
    flightMode: ShipNavFlightMode;
}
