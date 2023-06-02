import { DateTime } from 'luxon';
import { SurveyDeposit } from './SurveyDeposit';

export type Survey = {
    signature: string;
    symbol: string;
    deposts: Array<SurveyDeposit>;
    expiration: DateTime;
    size: 'SMALL' | 'MODERATE' | 'LARGE';
}
