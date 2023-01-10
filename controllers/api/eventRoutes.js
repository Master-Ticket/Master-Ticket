const router = require('express').Router();
const Event = require('../../models/Event');
router.get('/' , (req , res) => {
    Event.findAll().then((eventData) => {
        res.json(eventData);
    });
});
router.post('/' , async (req , res) => { 
    const event = await Event.create({
        name: req.body.name,
        location: req.body.location,
        price: req.body.price,
        description: req.body.description,
        ticket_link: req.body.ticket_link,
        event_date: req.body.event_date,
    }
    )
    res.json(event);
});
router.put('/:event_id', (req, res) => {
    
    Event.update(
      {
        name: req.body.name,
        location: req.body.location,
        price: req.body.price,
        description: req.body.description,
        ticket_link: req.body.ticket_link,
        event_date: req.body.event_date,
      },
      {
        where: {
          event_id: req.params.event_id,
        },
      }
    )
      .then((updatedEvent) => {
        res.json(updatedEvent);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
  router.delete('/:event_id', (req, res) => {
    Event.destroy({
      where: {
        event_id: req.params.event_id,
      },
    })
      .then((deletedEvent) => {
        res.json(deletedEvent);
      })
      .catch((err) => res.json(err));
  });
  router.post('/seed', (req , res) => {
    Event.bulkCreate([
        {

        },
    ]).then(() => {
        res.send("Event Added");
    });
  });
  module.exports = router;