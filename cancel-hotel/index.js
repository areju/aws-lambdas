const fetch = require("node-fetch");
const BOOKING_SERVICE = process.env.BOOKING_SERVICE;

exports.handler = async (evt) => {
   // fetch the request
   let response = await fetch(BOOKING_SERVICE, {
      method: 'DELETE',
      body: JSON.stringify({"reservation_id": evt.hotel.reservation_id})
   })
   
   if(response.status == 200){
      let json = await response.json();
      return json;
   }
   
   if(response.status == 418){
      throw new InvalidInputError("Invalid Reservation Id");
   }
   
   if(response.status == 503) {
      throw new TransientError("Transient Error");
   }else {
      return Error("Unexpected error while handling request");
   }
   

}

function InvalidInputError(message) {
   this.name = "InvalidInputError";
   this.message = message;
}

InvalidInputError.prototype = new Error();

function TransientError(message) {
   this.name = "TransientError";
   this.message = message;
}

TransientError.prototype = new Error();