import { DateTime, DateTimeOptions } from 'luxon';

/**
 * Take a string date and return a DateTime intance.
 */
export function stringToDateTime(date: DateTime, options?: DateTimeOptions): DateTime {

    if (typeof(date) === 'string') {
        return DateTime.fromISO(date, options);

    } else if (date instanceof DateTime) {
        return date;

    } else {
        throw new TypeError(`Invalid type of "date" parameter, expected string but ${typeof(date)}.`);
    }
}
