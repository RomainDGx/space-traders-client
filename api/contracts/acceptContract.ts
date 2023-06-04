import axios from 'axios';
import { Agent, Contract } from '../../schemas';

type AcceptContractResponse = {
    data: {
        agent: Agent;
        contract: Contract;
    }
}

export async function acceptContract(contractId: string): Promise<AcceptContractResponse['data']> {
    const response = await axios.post<AcceptContractResponse>(`/my/contracts/${contractId}/accept`);
    return response.data.data;
}
