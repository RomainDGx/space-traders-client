import { ShipEngine } from './ShipEngine';
import { ShipFrame } from './ShipFrame';
import { ShipMount } from './ShipMount';
import { ShipNav } from './ShipNav';
import { ShipReactor } from './ShipReactor';
import { ShipRegistration } from './ShipRegistration';

export type ScannedShip = {
    symbol: string;
    registration: ShipRegistration;
    nav: ShipNav;
    frame: {
        symbol: ShipFrame['symbol'];
    };
    reactor: {
        symbol: ShipReactor['symbol'];
    };
    engine: {
        symbol: ShipEngine['symbol'];
    };
    mounts: Array<{
        symbol: ShipMount['symbol'];
    }>;
}
