require("dotenv").config();

const types = require("./eventTypes.json");
const fetch = require("node-fetch");

const postalCode = "60018";
const eventType = "";
const radius = "10mi";

async function fetchEventsbyZip(postalCode, eventType, radius) {
  try {
    const res = await fetch(
      `https://api.seatgeek.com/2/events?postal_code=${postalCode}&type=${eventType}&range=${radius}`,
      {
        method: "get",
        headers: {
          Authorization: "Basic " + btoa(`${process.env.CLIENT_ID}`),
          "Content-Type": "application/json",
        },
      }
    );
    const { events } = await res.json();
    const formattedEvents = events.map((event) => {
      return {
        title: event.title,
        venue: {
          name: event.venue.name,
          city: event.venue.city,
        },
        datetime: new Date(event.datetime_local),
      };
    });
    return formattedEvents;
  } catch (err) {
    console.log(err);
  }
}



function getEventTypes() {
  console.log(types)
  return types;
}

fetchEventsbyZip('60018', 'family', '10mi');

module.exports = {
  getEventTypes,
  fetchEventsbyZip,
};