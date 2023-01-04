require('dotenv').config();
const fetch = require('node-fetch');

async function fetchEventsbyZip(postalCode, eventType, radius) {
  try {
    const res = await fetch(`https://api.seatgeek.com/2/events?postal_code=${postalCode}&type=${eventType}&range=${radius}`, {
  
      method: 'get',
      headers: {
        'Authorization': 'Basic ' + btoa(`${process.env.CLIENT_ID}`),
        'Content-Type': 'application/json'
      },
    });

    console.log('Status Code:', res.status);

    const data = await res.json();

    console.log(data)
    
    console.log(`We found ${data.meta.total} events within ${data.meta.geolocation.range} of ${data.meta.geolocation.city}, ${data.meta.geolocation.state} ${data.meta.geolocation.postal_code}.`);
 
    } catch (err) {
    console.log(err); 
  }
};

fetchEventsbyZip('60018', 'family', '5mi' );
