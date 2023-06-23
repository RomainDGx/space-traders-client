import axios from 'axios';
import { Agent, MarketTransaction, ShipCargo, TradeSymbol } from '../../schemas';

type SellCargoResponse = {
    data: {
        agent: Agent;
        cargo: ShipCargo;
        transaction: MarketTransaction;
    };
}

export async function sellCargoAsync(shipSymbol: string, symbol: TradeSymbol, units: number): Promise<SellCargoResponse['data']> {
    const response = await axios.post<SellCargoResponse>(`/my/ships/${shipSymbol}/sell`, { symbol, units });
    return response.data.data;
}
