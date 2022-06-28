const arr = ['a','b','c']
function generator(){
    yield i;
    yield* arr;
    yield 2;
}
for(let value of generator ()){
    document.write(value)
}