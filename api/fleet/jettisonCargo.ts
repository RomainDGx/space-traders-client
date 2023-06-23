import axios from 'axios';
import { ShipCargo, TradeSymbol } from '../../schemas';

type JettisonCargoResponse = {
    data: {
        cargo: ShipCargo;
    };
}

export async function jettisonCargoAsync(shipSymbol: string, symbol: TradeSymbol, units: number): Promise<JettisonCargoResponse['data']> {
    const response = await axios.post<JettisonCargoResponse>(`/my/ships/${shipSymbol}/jettison`, { symbol, units });
    return response.data.data;
}
