require("dotenv").config();

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
        eventTitle: event.title,
        datetime: new Date(event.datetime_local).toLocaleString(),
        eventVenue: {
          name: event.venue.name,
          address1: event.venue.address,
          address2: event.venue.extended_address,
        },
        startingPrice: event.stats.lowest_price,
        eventUrl: event.url,
    }));

    return formattedEvents;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchEvents
};