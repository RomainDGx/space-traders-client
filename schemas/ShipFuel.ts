import { DateTime } from 'luxon';

export type ShipFuel = {
    current: number;
    capacity: number;
    consumed: {
        amount: number;
        timestamp: DateTime;
    };
}
