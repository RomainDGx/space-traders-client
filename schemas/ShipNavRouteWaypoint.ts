export type ShipNavRouteWaypoint = {
    symbol: string;
    type: 'PLANET' | 'GAS_GIANT' | 'MOON' |
          'ORBITAL_STATION' | 'JUMP_GATE' |
          'ASTEROID_FIELD' | 'NEBULA' |
          'DEBRIS_FIELD' | 'GRAVITY_WELL';
    systemSymbol: string;
    x: number;
    y: number;
}
