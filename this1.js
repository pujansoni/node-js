var foo = {
    bar: 123,
    bas: function(){
        console.log('inside this.bar is: ', this.bar);
    }
}
console.log('foo.bar is: ', foo.bar);
foo.bas();