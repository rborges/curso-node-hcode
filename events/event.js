const { EventEmitter } = require('events');
//const eventEmitter = require('events');

class Event extends EventEmitter {}

const e = new Event;

// on to create events
// subscriber
e.on('security', (x,y)=> {
    console.log(`Event: ${x} ${y}`);
})

//publisher
e.emit('security', 'user', 'done something');

e.on('close', (data) => {
    console.log(`Subscriber ${data}`)
})

e.emit('close', 'Event close');

