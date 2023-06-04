import axios from 'axios';
import { Contract, ShipCargo } from '../../schemas';

type DeliverContractResponse = {
    data: {
        contract: Contract;
        cargo: ShipCargo;
    };
}

export async function deliverContractAsync(contractId: string, shipSymbol: string, tradeSymbol: string, units: number): Promise<DeliverContractResponse['data']> {
    const response = await axios.post<DeliverContractResponse>(`/my/contracts/${contractId}/deliver`, { shipSymbol, tradeSymbol, units });
    return response.data.data;
}
