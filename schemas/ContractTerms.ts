import { DateTime } from 'luxon';

export type ContractTerms = {
    deadline: DateTime;
    payment: {
        onAccepted: number;
        onFulfilled: number;
    },
    deliver: [
        {
            tradeSymbol: string;
            destinationSymbol: string;
            unitsRequired: number;
            unitsFulfilled: number;
        }
    ]
}
