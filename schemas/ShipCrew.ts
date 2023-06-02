export type ShipCrew = {
    current: number;
    required: number;
    capacity: number;
    rotation: 'STRICT' | 'RELAXED';
    morale: number;
    wages: number;
}
