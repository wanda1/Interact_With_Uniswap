const { ChainId, Fetcher, WETH, Route} = require('@uniswap/sdk');

const chainId = ChainId.MAINNET;
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const init = async () => {

	const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
	const weth = WETH[chainId];
	const pair = await Fetcher.fetchPairData(dai, weth);
	const route = new Route([pair], weth);
	console.log(route.midPrice.toSignificant(6));
	console.log(route.midPrice.invert().toSignificant(6));

	/*const provider = ethers.getDefaultProvider('mainnet', {
		infura: 'https://mainnet.infura.io/v3/13f491f0551846a488ae8fab89554780'
	});*/
};



init();
