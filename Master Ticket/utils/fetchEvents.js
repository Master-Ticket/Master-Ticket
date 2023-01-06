require("dotenv").config();

// const types = require("./eventTypes.json");
const fetch = require("node-fetch");

async function fetchEvents(postalCode, eventType, radius) {
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
    const formattedEvents = events.map((event) => ({
        title: event.title,
        datetime: new Date(event.datetime_local).toLocaleString(),
        venue: {
          name: event.venue.name,
          address: event.venue.extended_address,
          link: `https://www.google.com/search?q=${event.venue.name}`
        },
        
    }));

    const uniqueFormattedEvents = [...new Map(formattedEvents.map(event => [event.title, event]))];
    

    console.log(uniqueFormattedEvents);
    return formattedEvents;
  } catch (err) {
    console.log(err);
  }
}

fetchEvents('60018', '', '10mi')

module.exports = {
  fetchEvents
};