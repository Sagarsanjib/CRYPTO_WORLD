function convertToJson(response)
{
    return response.json();
}


function ShowResult(show)
{
        //console.log(show);
        //console.log(show.coins);

    const Table_created = document.getElementById("search_result");


    for (let i = 0; i < show.coins.length; i += 1)
    {
        const single_data = show.coins[i];
        
        console.log(single_data); 

        const New_row = document.createElement('tr');

        const New_ID = document.createElement('td');
        const New_logo = document.createElement('td');
        const New_name = document.createElement('td');
        const New_link = document.createElement('td');
        
        //for log we have to create an image 

        const New_img = document.createElement('img');
        
        const New_anchor = document.createElement('a');

        
        New_ID.innerText = i + 1;

        New_img.src = single_data.thumb;
        New_logo.appendChild(New_img);

        New_name.innerText = single_data.name +  " (" + single_data.symbol + ")" ;
        
        New_anchor.innerText = "show more";
        New_anchor.href = `detail.html?coin=${single_data.id}`;
        
        
        New_link.appendChild(New_anchor);

        New_row.appendChild(New_ID);
        New_row.appendChild(New_logo);
        New_row.appendChild(New_name);
        New_row.appendChild(New_link);
        
        
        
         Table_created.appendChild(New_row);
        
    }
}

const search_now = document.getElementById("search_field");


var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
let query = params.get("q");

search_now.value = query;

//console.log(window.location.href); // browser object model

console.log(query); 












fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
.then(convertToJson)
.then(ShowResult);