import { DateTime } from 'luxon';

export type Chart = {
    waypointSymbol: string;
    submittedBy: string;
    submittedOn: DateTime;
}
