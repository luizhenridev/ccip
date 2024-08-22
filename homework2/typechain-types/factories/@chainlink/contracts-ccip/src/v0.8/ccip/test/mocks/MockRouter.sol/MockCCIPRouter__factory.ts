/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../../common";
import type {
  MockCCIPRouter,
  MockCCIPRouterInterface,
} from "../../../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/test/mocks/MockRouter.sol/MockCCIPRouter";

const _abi = [
  {
    inputs: [],
    name: "InsufficientFeeTokenAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedAddress",
        type: "bytes",
      },
    ],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidExtraArgsTag",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOffRamp",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "ReceiverError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainSelector",
        type: "uint64",
      },
    ],
    name: "UnsupportedDestinationChain",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "sourceChainSelector",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "offRamp",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "calldataHash",
        type: "bytes32",
      },
    ],
    name: "MessageExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "retData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    name: "MsgExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_GAS_LIMIT",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_FOR_CALL_EXACT_CHECK",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "receiver",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "tokenAmounts",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "extraArgs",
            type: "bytes",
          },
        ],
        internalType: "struct Client.EVM2AnyMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipSend",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "receiver",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "tokenAmounts",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "extraArgs",
            type: "bytes",
          },
        ],
        internalType: "struct Client.EVM2AnyMessage",
        name: "",
        type: "tuple",
      },
    ],
    name: "getFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "getOnRamp",
    outputs: [
      {
        internalType: "address",
        name: "onRampAddress",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "isChainSupported",
    outputs: [
      {
        internalType: "bool",
        name: "supported",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOffRamp",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
      {
        internalType: "uint16",
        name: "gasForCallExactCheck",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "routeMessage",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "retData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b506124698061001d5f395ff3fe608060405260043610610085575f3560e01c8063a48a905811610058578063a48a90581461016f578063a8d87a3b146101ab578063d6be695a146101e7578063ee18e0d314610211578063fbca3b741461023b57610085565b806320487ded146100895780633cf97983146100c557806383826b2b1461010357806396f4e9f91461013f575b5f80fd5b348015610094575f80fd5b506100af60048036038101906100aa91906112dc565b610277565b6040516100bc9190611345565b60405180910390f35b3480156100d0575f80fd5b506100eb60048036038101906100e691906113b7565b61027e565b6040516100fa939291906114cb565b60405180910390f35b34801561010e575f80fd5b5061012960048036038101906101249190611507565b6102a7565b6040516101369190611545565b60405180910390f35b6101596004803603810190610154919061157c565b6102b2565b60405161016691906115ee565b60405180910390f35b34801561017a575f80fd5b5061019560048036038101906101909190611607565b610628565b6040516101a29190611545565b60405180910390f35b3480156101b6575f80fd5b506101d160048036038101906101cc9190611607565b610632565b6040516101de9190611641565b60405180910390f35b3480156101f2575f80fd5b506101fb61063f565b6040516102089190611669565b60405180910390f35b34801561021c575f80fd5b50610225610646565b6040516102329190611691565b60405180910390f35b348015610246575f80fd5b50610261600480360381019061025c9190611607565b61064c565b60405161026e9190611761565b60405180910390f35b5f92915050565b5f60605f6102978761028f90611888565b87878761069e565b9250925092509450945094915050565b5f6001905092915050565b5f602082805f01906102c491906118a6565b9050146103175781805f01906102da91906118a6565b6040517f370d875f00000000000000000000000000000000000000000000000000000000815260040161030e929190611934565b60405180910390fd5b5f82805f019061032791906118a6565b8101906103349190611956565b905073ffffffffffffffffffffffffffffffffffffffff801681118061035a5750600a81105b156103ab5782805f019061036e91906118a6565b6040517f370d875f0000000000000000000000000000000000000000000000000000000081526004016103a2929190611934565b60405180910390fd5b5f8190505f6103c88580608001906103c391906118a6565b610855565b5f015190505f856040516020016103df9190611c5e565b6040516020818303038152906040528051906020012090505f6040518060a0016040528083815260200167de41ba4fc9d91ad967ffffffffffffffff168152602001336040516020016104329190611641565b604051602081830303815290604052815260200188806020019061045691906118a6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081526020018880604001906104ad9190611c7e565b808060200260200160405190810160405280939291908181526020015f905b828210156104fc578484839050604002018036038101906104ed9190611ce0565b815260200190600101906104cc565b505050505081525090505f5b8780604001906105189190611c7e565b90508110156105c0576105af33868a80604001906105369190611c7e565b8581811061054757610546611d0b565b5b905060400201602001358b80604001906105619190611c7e565b8681811061057257610571611d0b565b5b9050604002015f0160208101906105899190611d38565b73ffffffffffffffffffffffffffffffffffffffff1661093d909392919063ffffffff16565b806105b990611d90565b9050610508565b505f806105d183611388878961069e565b50915091508161061857806040517f0a8d6e8c00000000000000000000000000000000000000000000000000000000815260040161060f9190611dd7565b60405180910390fd5b8397505050505050505092915050565b5f60019050919050565b5f63499602d29050919050565b62030d4081565b61138881565b60605f67ffffffffffffffff81111561066857610667610f15565b5b6040519080825280602002602001820160405280156106965781602001602082028036833780820191505090505b509050919050565b5f60605f808473ffffffffffffffffffffffffffffffffffffffff163b148061070d575061070b7f85572ffb000000000000000000000000000000000000000000000000000000008573ffffffffffffffffffffffffffffffffffffffff166109c690919063ffffffff16565b155b156107305760015f60405180602001604052805f8152509092509250925061084b565b5f6385572ffb60e01b8860405160240161074a9190611f93565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090506107b78186888a60846109ea565b8094508195508296505050507fa8b0355886b5b7a28bb97e4f0a24feb172618407402721c4012d8b7c6433102f8484846040516107f6939291906114cb565b60405180910390a17f9b877de93ea9895756e337442c657f95a34fc68e7eb988bdfa693d5be83016b6885f015189602001513384805190602001206040516108419493929190611fb3565b60405180910390a1505b9450945094915050565b61085d610ea1565b5f838390500361088a57604051806020016040528062030d4067ffffffffffffffff168152509050610937565b6397a657c960e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168383906108be9190612037565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610914576040517f5247fdce00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828260049080926109279392919061209d565b8101906109349190612110565b90505b92915050565b6109c0846323b872dd60e01b85858560405160240161095e9392919061213b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b12565b50505050565b5f6109d083610bd7565b80156109e257506109e18383610c23565b5b905092915050565b5f60605f8361ffff1667ffffffffffffffff811115610a0c57610a0b610f15565b5b6040519080825280601f01601f191660200182016040528015610a3e5781602001600182028036833780820191505090505b509150863b610a6f577f0c3b563c000000000000000000000000000000000000000000000000000000005f5260045ffd5b5a85811015610aa0577fafa32a2c000000000000000000000000000000000000000000000000000000005f5260045ffd5b85810390508660408204820311610ad9577f37c3be29000000000000000000000000000000000000000000000000000000005f5260045ffd5b5a5f808b5160208d015f8d8df194505a810392503d86811115610afa578690505b808552805f602087013e505050955095509592505050565b5f610b73826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610cdc9092919063ffffffff16565b90505f81511115610bd25780806020019051810190610b92919061219a565b610bd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc890612245565b60405180910390fd5b5b505050565b5f610c02827f01ffc9a700000000000000000000000000000000000000000000000000000000610c23565b8015610c1c5750610c1a8263ffffffff60e01b610c23565b155b9050919050565b5f806301ffc9a760e01b83604051602401610c3e9190612272565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090505f805f60205f8551602087018a617530fa92503d91505f519050828015610cc5575060208210155b8015610cd057505f81115b94505050505092915050565b6060610cea84845f85610cf3565b90509392505050565b606082471015610d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2f906122fb565b60405180910390fd5b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051610d609190612353565b5f6040518083038185875af1925050503d805f8114610d9a576040519150601f19603f3d011682016040523d82523d5f602084013e610d9f565b606091505b5091509150610db087838387610dbc565b92505050949350505050565b60608315610e1d575f835103610e1557610dd585610e30565b610e14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0b906123b3565b60405180910390fd5b5b829050610e28565b610e278383610e52565b5b949350505050565b5f808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b5f82511115610e645781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e989190612413565b60405180910390fd5b60405180602001604052805f81525090565b5f604051905090565b5f80fd5b5f80fd5b5f67ffffffffffffffff82169050919050565b610ee081610ec4565b8114610eea575f80fd5b50565b5f81359050610efb81610ed7565b92915050565b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610f4b82610f05565b810181811067ffffffffffffffff82111715610f6a57610f69610f15565b5b80604052505050565b5f610f7c610eb3565b9050610f888282610f42565b919050565b5f80fd5b5f80fd5b5f80fd5b5f67ffffffffffffffff821115610fb357610fb2610f15565b5b610fbc82610f05565b9050602081019050919050565b828183375f83830152505050565b5f610fe9610fe484610f99565b610f73565b90508281526020810184848401111561100557611004610f95565b5b611010848285610fc9565b509392505050565b5f82601f83011261102c5761102b610f91565b5b813561103c848260208601610fd7565b91505092915050565b5f67ffffffffffffffff82111561105f5761105e610f15565b5b602082029050602081019050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61109d82611074565b9050919050565b6110ad81611093565b81146110b7575f80fd5b50565b5f813590506110c8816110a4565b92915050565b5f819050919050565b6110e0816110ce565b81146110ea575f80fd5b50565b5f813590506110fb816110d7565b92915050565b5f6040828403121561111657611115610f01565b5b6111206040610f73565b90505f61112f848285016110ba565b5f830152506020611142848285016110ed565b60208301525092915050565b5f61116061115b84611045565b610f73565b9050808382526020820190506040840283018581111561118357611182611070565b5b835b818110156111ac57806111988882611101565b845260208401935050604081019050611185565b5050509392505050565b5f82601f8301126111ca576111c9610f91565b5b81356111da84826020860161114e565b91505092915050565b5f60a082840312156111f8576111f7610f01565b5b61120260a0610f73565b90505f82013567ffffffffffffffff81111561122157611220610f8d565b5b61122d84828501611018565b5f83015250602082013567ffffffffffffffff8111156112505761124f610f8d565b5b61125c84828501611018565b602083015250604082013567ffffffffffffffff8111156112805761127f610f8d565b5b61128c848285016111b6565b60408301525060606112a0848285016110ba565b606083015250608082013567ffffffffffffffff8111156112c4576112c3610f8d565b5b6112d084828501611018565b60808301525092915050565b5f80604083850312156112f2576112f1610ebc565b5b5f6112ff85828601610eed565b925050602083013567ffffffffffffffff8111156113205761131f610ec0565b5b61132c858286016111e3565b9150509250929050565b61133f816110ce565b82525050565b5f6020820190506113585f830184611336565b92915050565b5f80fd5b5f60a082840312156113775761137661135e565b5b81905092915050565b5f61ffff82169050919050565b61139681611380565b81146113a0575f80fd5b50565b5f813590506113b18161138d565b92915050565b5f805f80608085870312156113cf576113ce610ebc565b5b5f85013567ffffffffffffffff8111156113ec576113eb610ec0565b5b6113f887828801611362565b9450506020611409878288016113a3565b935050604061141a878288016110ed565b925050606061142b878288016110ba565b91505092959194509250565b5f8115159050919050565b61144b81611437565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561148857808201518184015260208101905061146d565b5f8484015250505050565b5f61149d82611451565b6114a7818561145b565b93506114b781856020860161146b565b6114c081610f05565b840191505092915050565b5f6060820190506114de5f830186611442565b81810360208301526114f08185611493565b90506114ff6040830184611336565b949350505050565b5f806040838503121561151d5761151c610ebc565b5b5f61152a85828601610eed565b925050602061153b858286016110ba565b9150509250929050565b5f6020820190506115585f830184611442565b92915050565b5f60a082840312156115735761157261135e565b5b81905092915050565b5f806040838503121561159257611591610ebc565b5b5f61159f85828601610eed565b925050602083013567ffffffffffffffff8111156115c0576115bf610ec0565b5b6115cc8582860161155e565b9150509250929050565b5f819050919050565b6115e8816115d6565b82525050565b5f6020820190506116015f8301846115df565b92915050565b5f6020828403121561161c5761161b610ebc565b5b5f61162984828501610eed565b91505092915050565b61163b81611093565b82525050565b5f6020820190506116545f830184611632565b92915050565b61166381610ec4565b82525050565b5f60208201905061167c5f83018461165a565b92915050565b61168b81611380565b82525050565b5f6020820190506116a45f830184611682565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6116dc81611093565b82525050565b5f6116ed83836116d3565b60208301905092915050565b5f602082019050919050565b5f61170f826116aa565b61171981856116b4565b9350611724836116c4565b805f5b8381101561175457815161173b88826116e2565b9750611746836116f9565b925050600181019050611727565b5085935050505092915050565b5f6020820190508181035f8301526117798184611705565b905092915050565b61178a816115d6565b8114611794575f80fd5b50565b5f813590506117a581611781565b92915050565b5f60a082840312156117c0576117bf610f01565b5b6117ca60a0610f73565b90505f6117d984828501611797565b5f8301525060206117ec84828501610eed565b602083015250604082013567ffffffffffffffff8111156118105761180f610f8d565b5b61181c84828501611018565b604083015250606082013567ffffffffffffffff8111156118405761183f610f8d565b5b61184c84828501611018565b606083015250608082013567ffffffffffffffff8111156118705761186f610f8d565b5b61187c848285016111b6565b60808301525092915050565b5f61189336836117ab565b9050919050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126118c2576118c161189a565b5b80840192508235915067ffffffffffffffff8211156118e4576118e361189e565b5b602083019250600182023603831315611900576118ff6118a2565b5b509250929050565b5f611913838561145b565b9350611920838584610fc9565b61192983610f05565b840190509392505050565b5f6020820190508181035f83015261194d818486611908565b90509392505050565b5f6020828403121561196b5761196a610ebc565b5b5f611978848285016110ed565b91505092915050565b5f80fd5b5f80fd5b5f80fd5b5f80833560016020038436030381126119a9576119a8611989565b5b83810192508235915060208301925067ffffffffffffffff8211156119d1576119d0611981565b5b6001820236038313156119e7576119e6611985565b5b509250929050565b5f82825260208201905092915050565b5f611a0a83856119ef565b9350611a17838584610fc9565b611a2083610f05565b840190509392505050565b5f8083356001602003843603038112611a4757611a46611989565b5b83810192508235915060208301925067ffffffffffffffff821115611a6f57611a6e611981565b5b604082023603831315611a8557611a84611985565b5b509250929050565b5f82825260208201905092915050565b5f819050919050565b5f611ab460208401846110ba565b905092915050565b5f611aca60208401846110ed565b905092915050565b611adb816110ce565b82525050565b60408201611af15f830183611aa6565b611afd5f8501826116d3565b50611b0b6020830183611abc565b611b186020850182611ad2565b50505050565b5f611b298383611ae1565b60408301905092915050565b5f82905092915050565b5f604082019050919050565b5f611b568385611a8d565b9350611b6182611a9d565b805f5b85811015611b9957611b768284611b35565b611b808882611b1e565b9750611b8b83611b3f565b925050600181019050611b64565b5085925050509392505050565b5f60a08301611bb75f84018461198d565b8583035f870152611bc98382846119ff565b92505050611bda602084018461198d565b8583036020870152611bed8382846119ff565b92505050611bfe6040840184611a2b565b8583036040870152611c11838284611b4b565b92505050611c226060840184611aa6565b611c2f60608601826116d3565b50611c3d608084018461198d565b8583036080870152611c508382846119ff565b925050508091505092915050565b5f6020820190508181035f830152611c768184611ba6565b905092915050565b5f8083356001602003843603038112611c9a57611c9961189a565b5b80840192508235915067ffffffffffffffff821115611cbc57611cbb61189e565b5b602083019250604082023603831315611cd857611cd76118a2565b5b509250929050565b5f60408284031215611cf557611cf4610ebc565b5b5f611d0284828501611101565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611d4d57611d4c610ebc565b5b5f611d5a848285016110ba565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611d9a826110ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611dcc57611dcb611d63565b5b600182019050919050565b5f6020820190508181035f830152611def8184611493565b905092915050565b611e00816115d6565b82525050565b611e0f81610ec4565b82525050565b5f611e1f82611451565b611e2981856119ef565b9350611e3981856020860161146b565b611e4281610f05565b840191505092915050565b5f81519050919050565b5f819050602082019050919050565b604082015f820151611e7a5f8501826116d3565b506020820151611e8d6020850182611ad2565b50505050565b5f611e9e8383611e66565b60408301905092915050565b5f602082019050919050565b5f611ec082611e4d565b611eca8185611a8d565b9350611ed583611e57565b805f5b83811015611f05578151611eec8882611e93565b9750611ef783611eaa565b925050600181019050611ed8565b5085935050505092915050565b5f60a083015f830151611f275f860182611df7565b506020830151611f3a6020860182611e06565b5060408301518482036040860152611f528282611e15565b91505060608301518482036060860152611f6c8282611e15565b91505060808301518482036080860152611f868282611eb6565b9150508091505092915050565b5f6020820190508181035f830152611fab8184611f12565b905092915050565b5f608082019050611fc65f8301876115df565b611fd3602083018661165a565b611fe06040830185611632565b611fed60608301846115df565b95945050505050565b5f82905092915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b5f82821b905092915050565b5f6120428383611ff6565b8261204d8135612000565b9250600482101561208d576120887fffffffff000000000000000000000000000000000000000000000000000000008360040360080261202b565b831692505b505092915050565b5f80fd5b5f80fd5b5f80858511156120b0576120af612095565b5b838611156120c1576120c0612099565b5b6001850283019150848603905094509492505050565b5f602082840312156120ec576120eb610f01565b5b6120f66020610f73565b90505f612105848285016110ed565b5f8301525092915050565b5f6020828403121561212557612124610ebc565b5b5f612132848285016120d7565b91505092915050565b5f60608201905061214e5f830186611632565b61215b6020830185611632565b6121686040830184611336565b949350505050565b61217981611437565b8114612183575f80fd5b50565b5f8151905061219481612170565b92915050565b5f602082840312156121af576121ae610ebc565b5b5f6121bc84828501612186565b91505092915050565b5f82825260208201905092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e5f8201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b5f61222f602a836121c5565b915061223a826121d5565b604082019050919050565b5f6020820190508181035f83015261225c81612223565b9050919050565b61226c81612000565b82525050565b5f6020820190506122855f830184612263565b92915050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f5f8201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b5f6122e56026836121c5565b91506122f08261228b565b604082019050919050565b5f6020820190508181035f830152612312816122d9565b9050919050565b5f81905092915050565b5f61232d82611451565b6123378185612319565b935061234781856020860161146b565b80840191505092915050565b5f61235e8284612323565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000005f82015250565b5f61239d601d836121c5565b91506123a882612369565b602082019050919050565b5f6020820190508181035f8301526123ca81612391565b9050919050565b5f81519050919050565b5f6123e5826123d1565b6123ef81856121c5565b93506123ff81856020860161146b565b61240881610f05565b840191505092915050565b5f6020820190508181035f83015261242b81846123db565b90509291505056fea2646970667358221220a2bcadee9e4a03dfadd0c513eb415c93b726af1450d9dd52d599409d894c6a3b64736f6c63430008140033";

type MockCCIPRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCCIPRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCCIPRouter__factory extends ContractFactory {
  constructor(...args: MockCCIPRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockCCIPRouter> {
    return super.deploy(overrides || {}) as Promise<MockCCIPRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockCCIPRouter {
    return super.attach(address) as MockCCIPRouter;
  }
  override connect(signer: Signer): MockCCIPRouter__factory {
    return super.connect(signer) as MockCCIPRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCCIPRouterInterface {
    return new utils.Interface(_abi) as MockCCIPRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCCIPRouter {
    return new Contract(address, _abi, signerOrProvider) as MockCCIPRouter;
  }
}
