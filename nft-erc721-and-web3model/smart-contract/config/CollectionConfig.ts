import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { polygonTestnet, polygonMainnet} from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: polygonTestnet,
  mainnet: polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TestNFT',
  tokenName: 'testnft',
  tokenSymbol: 'TNFT',
  hiddenMetadataUri: 'ipfs://QmXXPa9PPQuHyveDM8x2fX9yhyDiWXRGT1ncBPeoTBo9as/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.3,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 25,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 30,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x334c3A6F41F2aE8A28ab1B219e2E081ab8489e20",
  marketplaceIdentifier: 'TestNFT',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
