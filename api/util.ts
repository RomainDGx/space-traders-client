import { DateTime } from 'luxon';

export function formatDateTimeToString<T>(object: T): T | string {

    if (object instanceof DateTime) {
        const stringDate = object.toUTC().toISO();
        if (!stringDate) throw new Error('Null DateTime.');
        return stringDate;
    }
    if (typeof(object) === 'object') {
        for (const key in object) {
            object[key] = formatDateTimeToString(object[key]) as (T & object)[Extract<keyof T, string>];
        }
    }
    return object;
}

/**
 * Check recursively all values in the object.
 * If the value is a string datetime, format to DateTime.
 */
export function formatStringToDateTime<T>(object: T): T | DateTime {

    if (typeof(object) === 'string') {
        const date = DateTime.fromISO(object, { zone: 'utc' });
        return date.isValid ? date : object;
    }
    if (typeof(object) === 'object') {
        for (const key in object) {
            object[key] = formatStringToDateTime(object[key]) as (T & object)[Extract<keyof T, string>];
        }
    }
    return object;
}
