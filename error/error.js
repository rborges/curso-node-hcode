//throw new Error('It works on my machine');

function exec(){
    execTo();
}

function execTo() {
    throw new Error('It works on my machine');
}

function init(){
    try {
        exec();
    } catch (error) {
        console.log(error.message)
        console.log('Huston - We have a problem')
    }
}

init()

console.log('after error')