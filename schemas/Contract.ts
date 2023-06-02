import { DateTime } from 'luxon';
import { ContractTerms } from './ContractTerms';

export type Contract = {
    id: string;
    factionSymbol: string;
    type: 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE';
    terms: ContractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: DateTime;
    deadlineToAccept: DateTime;
}
