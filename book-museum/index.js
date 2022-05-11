const fetch = require("node-fetch");
const BOOKING_SERVICE = process.env.BOOKING_SERVICE;

exports.handler = async (evt) => {
   // fetch the request
   let response = await fetch(BOOKING_SERVICE, {
      method: 'POST',
      body: JSON.stringify(evt)
   })
   
   if(response.status == 200) {
      let json = await response.json()
      return json;
   }
   
   if(response.status == 418) {
      throw new InputInvalidError("InvalidInput: Expected dd-mm-yyyy");
   }
   
   if(response.status == 503) {
      throw new TransientError("TransientError");
   }else{
      throw new Error("Unexpected Error while handling request");
   }
   
}

function InputInvalidError(message) {
   this.name = "InputInvalidError";
   this.message = message;
}

InputInvalidError.prototype = new Error();

function TransientError(message) {
   this.name = "TransientError";
   this.message = message;
}
TransientError.prototype = new Error();