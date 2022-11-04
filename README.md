 April 2022 Live Project


PROJECT @ 1------------ Cryptocurrency Website.
->Landing Page (Home Page).
->Search Functionality. (Search Input and list of all)
-> Detail Screen, Show some sort of Price, Histroy chart or something like that.

-> We will be hosting this. (Github Pagesd, Netlify / Heroku)

To Acess API we can use the website ------------Coingecko.

here we use HTML, CSS & JS
----------------------------------------------
COLOR PALLETE
----------
d8f3dc
b7e4c7
95d5b2
74c69d
52b788
40916c
2d6a4f
1b4332
081c15
---------

ffa69e
faf3dd
b8f2e6
aed9e0
5e6472

Background - EAEAEA upto F9F9F9
#000000 IS absence of color that is completely bright
#ffffff is completely bright white

---------
0b090a
161a1d
660708
a4161a
ba181b
e5383b
b1a7a6
d3d3d3
f5f3f4
ffffff

--------


#caf0f8, #03045e, #efefef

For instagram facebook icon we know we can download the flaticon and use it. BUT BUT BUT today we can use a different way to acess the icon by their source code.
For this we may use different sites. Popular sites according to me is.

https://www.chartjs.org/docs/latest/-------------------------------website
https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js------------------library




The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

----------------------------------------------------------------------------------------------

for price API
====https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinamon%2Cdogecoin%2Cethereum%2Cfantom%2Clitecoin%2Cpolkadot%2Csolana%2Cstellar%2Ctether%2Cusd-coin&vs_currencies=inr
---------------------------------------------------------------------------------------------
---------------------------------HOME PAGE IS ALMOST 70% DONE
-----now we have to move to Detail Page

so for this COINGECKO ------------EXPLORE API -----------COIN'S ID API
DETAIL SCREEN --------------WE WANT

a. Name
b. Current Price (INR and USD)---------to get this we use different UPI. i.e. PRICE API
c. image ie. coin logo
d. symbol
e. description
f. country origin
g. genesis data (START DATE)
h. Market capital -------------MARKET API
i. Sparkline---------------actualy a JS LIBRARY for graph data. it is a library to generate graph.--------we use MARKET API

----------------------------------------------------------------------------------------
A. DESCRIPTION API

https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false

B. PRICE API of IFFFFFF bitocin into INR, USD AND EUR

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur



C. MARKET API ----------------Coingecko.com ------------coins/id/history

https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=7



SO NOW WE HAVE ALL BASIC REQUIRED COMPONENTS FOR DETAILED PAGE
i.e detail description, price and chart data






Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency


ALIGN ITEMS IS for CROSS AXIS AND JUSTIFY CONTENT IS FOR MAIN AXIS


For graph --https://www.chartjs.org/




Prices of bitcoin of 1 day having array =  24 so bitcoin chart market of 1 week = 7 * 24 == 168 having every 1 hour bitcoin update i.e total 168 hr bitcoin market rate will be defined in the chart.



-------------------------Detail Screnn is almost done


-----------Now move to search screen



1. Query parameter ----- means whenever we are sending something in the url known as Parameter of URL.
IN THE URL anything after ? is the query parameter.

Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed.


For e.g YOUTUBE doesn't create separate separate HTML file to show each and every video. there are million of videos. 
so YOUTUBE create only one page and based on the QUERY PARAMETERS they are loading the data.

another e.g.  how amazon show us a specific product e.g. mobile, tab, laptop .bcoz there are million of products in the amazon. 
how does amazon know that it has to show a specific data ?
so for this to show the specific data amazon use the technique called query parameters

----------------------------------------------------

TWO PARTS:
A. When the input is submitted.Submit the form and prepare the Query parameter. ---------this is done
B. When the page is loaded, check for query parameter and load that data.--------to do this JS has something called BOM  ---Browser Object Model


The Browser Object Model (BOM) in JavaScript includes the properties and methods for JavaScript to interact with the web browser. BOM provides you with a window objects, for example, to show the width and height of the window. It also includes the window. screen object to show the width and height of the screen.

window.location.href will show the current location




http://127.0.0.1:5500/detail.html?coin=tether



























https://unsplash.com/s/photos/crypto-transparent
https://www.humaaans.com/



























read about ALIGN ITEMS




<p>
                    &lt;p&gt;------------ENTITIES
 </p>

















https://www.wallpaperflare.com/search?wallpaper=cryptocurrency
freekpik.com
https://wallpaperaccess.com/4k-bitcoin