CCIP BOOTCAMP HOMEWORK DAY 3
Our Task is to estimate the gas used by the ccipReceive Function on the receiver contract and increase the gas limit of the trasferUSDC contract parameter by 10%.

using Tenderly
After deploying the contracts using the scripts to deploy the contracts SwapTestnetUSDC and the CrossChainReceiver on the Sepolia Testnet. We invoke the trasferUSDC contract.

Using the transaction hash we can estimate the gas used.

messageID : 0xcfc989784341eacf436c657eda53c504a1f60c97ecaa000e9d18148266abc70c
Destination Transaction Hash: 0x6c42ccc54c78623596308a9623db488d6c71c7615a4a38c5adcc50af6d24b7b5
<img width="1201" alt="Captura de Tela 2024-08-23 às 19 31 32" src="https://github.com/user-attachments/assets/b929a278-9c38-4462-81ae-30600eaf06ed">


as for my case the Gas Used : 246.385 Alt text

therefore after increasing it 10% it becomes 271.0235
