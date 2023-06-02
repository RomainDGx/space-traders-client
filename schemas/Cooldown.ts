import { DateTime } from 'luxon';

export type Cooldown = {
    shipSymbol: string;
    totalSeconds: number;
    remainingSeconds: number;
    expiration: DateTime;
}
