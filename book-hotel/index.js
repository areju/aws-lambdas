exports.handler =  async(evt) => {
    console.log("Starting event: Book hotel");
    const fetch = require("node-fetch");
    const WEBSERVICE_URL = "https://trcinpm9o1.execute-api.us-east-1.amazonaws.com/Prod/hotel";
    const body = {
        "buyer_id": "mariano",          
        "start_date": "2020-03-13",      
        "end_date": "2020-03-15",        
        "near": "tate gallery",          
     }
     
    console.log(body);
    const result = await fetch(WEBSERVICE_URL,{method: 'POST',body: JSON.stringify(body),headers: {'Content-Type':'application/json' }});
    const data = await result.json();

    console.log(data);
}