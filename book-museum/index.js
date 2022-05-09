exports.handler = async(evt) => {
    console.log("Inside event");
    
    const fetch = require("node-fetch");
    const WEBSERVICE_URL= "https://trcinpm9o1.execute-api.us-east-1.amazonaws.com/Prod/museum";

    const body = {
     "buyer_id": "mariano",
     "museum_name": "tate gallery",
     "when": "2020-03-14"
    }

    const response = await fetch(WEBSERVICE_URL,{method: "POST", body: JSON.stringify(body), headers: {'Content-Type':'application/json'}});
    const result = await response.json();

    console.log(result);

}