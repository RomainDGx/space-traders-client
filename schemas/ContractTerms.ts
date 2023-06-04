import { DateTime } from 'luxon';
import { ContractPayment } from './ContractPayment';
import { ContractDeliverGood } from './ContractDeliverGood';

export type ContractTerms = {
    deadline: DateTime;
    payment: ContractPayment;
    deliver: Array<ContractDeliverGood>;
}
