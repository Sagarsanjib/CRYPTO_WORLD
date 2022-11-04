function convertToJson(response)
{
    return response.json();
}

function showData(data)
{
    console.log(data);

    const bitcoin_price = document.getElementById("bitcoin_price_container");
    bitcoin_price.innerText = data.bitcoin.inr;
    

    const ethereum_price = document.getElementById("ethereum_price_container");
    ethereum_price.innerText = data.ethereum.inr;


    const tether_price = document.getElementById("tether_price_container");
    tether_price.innerText = data.tether.inr;


    const solana_price = document.getElementById("solana_price_container");
    solana_price.innerText = data.solana.inr;


    const fantom_price = document.getElementById("fantom_price_container");
    fantom_price.innerText = data.fantom.inr;


    const polkadot_price = document.getElementById("polkadot_price_container");
    polkadot_price.innerText = data.polkadot.inr;
    

    const litecoin_price = document.getElementById("litecoin_price_container");
    litecoin_price.innerText = data.litecoin.inr;


    const stellar_price = document.getElementById("stellar_price_container");
    stellar_price.innerText = data.stellar.inr;


    const dogecoin_price = document.getElementById("dogecoin_price_container");
    dogecoin_price.innerText = data.dogecoin.inr;


    const binamon_price = document.getElementById("binamon_price_container");
    binamon_price.innerText = data.binamon.inr;
    




}



//fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinamon%2Cdogecoin%2Cethereum%2Cfantom%2Clitecoin%2Cpolkadot%2Csolana%2Cstellar%2Ctether%2Cusd-coin&vs_currencies=inr')

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin%2Cfantom%2Cpolkadot%2Csolana%2Clitecoin%2Cstellar%2Cbinamon%2Cdogecoin%2Cdogecoin%2C&vs_currencies=inr')
.then(convertToJson)
.then(showData);
