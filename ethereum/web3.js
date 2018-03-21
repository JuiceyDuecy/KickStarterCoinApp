import Web3 from 'web3';

let web3;
//check to see if we are running in the browser
//typeof is a variable check
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we must be on the server *OR* user doesn't use Metamask so we need the below...
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/NEdMY2uRcQXlastodmKW'
    );
    web3 = new Web3(provider);
}
//const web3 = new Web3(window.web3.currentProvider); //only available on browsers
//therefore, serverside rendering will give an error!
export default web3;
