import axios from 'axios';
import { Agent, MarketTransaction, ShipCondition, ShipFuel } from '../../schemas';

type RefuelShipResponse = {
    data: {
        agent: Agent;
        fuel: ShipFuel;
        transaction: MarketTransaction;
    };
}

/**
 * Refuel your ship by buying fuel from the local market.
 * Requires the ship to be docked in a waypoint that has the Marketplace trait, and the market must be selling fuel in order to refuel.
 * Each fuel bought from the market replenishes 100 units in your ship's fuel.
 * Ships will always be refuel to their frame's maximum fuel capacity when using this action.
 * @param shipSymbol The ship symbol.
 * @param units The amount of fuel to fill in the ship's tanks. When not specified, the ship will be refueled to its maximum fuel capacity. If the amount specified is greater than the ship's remaining capacity, the ship will only be refueled to its maximum fuel capacity. The amount specified is not in market units but in ship fuel units.
 * @returns Refueled successfully.
 */
export async function refuelShipAsync(shipSymbol: string, units: ShipCondition = 100): Promise<RefuelShipResponse['data']> {
    const response = await axios.post<RefuelShipResponse>(`/my/ships/${shipSymbol}/refuel`, { units });
    return response.data.data;
}
