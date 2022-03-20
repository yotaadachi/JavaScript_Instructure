window.name =  'john'

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();
    }
}
// const ref = person.hello;
// ref();
person.hello();

function a() {
    console.log('Hello ' + this.name);
}