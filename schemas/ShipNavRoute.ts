import { DateTime } from 'luxon';
import { ShipNavRouteWaypoint } from './ShipNavRouteWaypoint';

export type ShipNavRoute = {
    destination: ShipNavRouteWaypoint;
    departure: ShipNavRouteWaypoint;
    departureTime: DateTime;
    arrival: DateTime;
}
