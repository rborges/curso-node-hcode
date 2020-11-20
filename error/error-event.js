const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const objectValidate = (a)=> {
    if(typeof a !== 'object') {
        return emitter.emit('error', new Error('Wrong type'))
    }
    console.log('Eureka!!! it works!!!')
}

emitter.addListener('error', (err) => {
    console.log('Event:' + err.message)
})

let data = {
    name: 'Rodrigo Borges'
}

objectValidate(data)

