console.clear();
console.time()
console.log('showing messages');

//error
//console.error(new Error('Ma bad'));

const list = [
    'qert',
    'asdas',
    'asda3s'
];

console.table(list);

const obj = {
    name: 'Rodrigo Borges',
    company: 'skeedoo'
}

console.table(obj);

console.count('process');
console.count('process');
console.count('process');
console.countReset('process');
console.count('process');


for (let index = 0; index < 100 ; index++){
}

console.assert(true, 'right')
console.assert(false, 'error')
console.timeEnd();
