function convertToJson(response)
{
    return response.json();
}

function showData(info) //THe purpose of this function is to get basic information, description, name and images
{
    console.log(info);

    const coin_icon = document.getElementById("coin_img");

    /*
    //DOM MANIPULATION FOR IMAGE

    console.log(info.image); //at first we have to see in console to check which URL should we take.
    console.log(info.image.large);
   */
    coin_icon.src = info.image.large;

    const currency_name = document.getElementById("coin_name");
    currency_name.innerText = info.name;

    const currency_content = document.getElementById("coin_content");
    currency_content.innerHTML = info.description.en;


    
}



function showPrice(price)//the purpose of this function is specific i.e. to get the price
{
    console.log(price);

    const inr_value = document.getElementById('inr_price');
    inr_value.innerText = price[coin_key].inr;

    const usd_value = document.getElementById('usd_price');
    usd_value.innerText = price[coin_key].usd;

    const eur_value = document.getElementById('eur_price');
    eur_value.innerText = price[coin_key].eur;


}

function showMarketHistory(market) // the purpose of this function is to get the history of price i.e market history
{
    console.log(market);
    showChart(market);
}


var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
let coin_key = params.get("coin");

console.log(coin_key);










fetch(`https://api.coingecko.com/api/v3/coins/${coin_key}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
.then(convertToJson)
.then(showData);


fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_key}&vs_currencies=inr%2Cusd%2Ceur`)
.then(convertToJson)
.then(showPrice);


//1hr market chart of 7days i.e 168 hrs
//fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=7')

//30days market chart
fetch(`https://api.coingecko.com/api/v3/coins/${coin_key}/market_chart?vs_currency=inr&days=30&interval=daily`) 
.then(convertToJson)
.then(showMarketHistory);



function convertUnixToReadable(timestamp)
{
    
    const date = new Date(timestamp );

    const date_string = date.getDate();

    const month_string = "0" + date.getMonth () + 1;
    
    const readable    = date_string+ ':' + month_string;

    return readable;
    
}



function showChart(market_info)
{
    console.log(market_info.prices);

    let labels = [];
    let prices = [];
    for (let i = 0; i<market_info.prices.length; i +=1)
        {
            const single_price = market_info.prices[i];

            console.log(single_price);

            const readable_lebel = convertUnixToReadable(single_price[0]);

            labels.push(readable_lebel);
            prices.push(single_price[1]);
            

            
        }
        console.log(labels);
        console.log(prices);




    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels : labels,
        datasets: [{
            label: 'Price (in INR)',
            //data : market_info.prices;
            data: prices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: 
    {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display : false,
                }
            },
            x: {
                
                grid: {
                    display : false,
                }
            },

        }
    }
});


}


