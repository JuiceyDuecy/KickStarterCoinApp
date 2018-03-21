import web3 from './web3';
import campaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x42a1D6d2Bc712d0c131D5Dea2F6d3B83C48B5C95'
);

export default instance;
