// Of course, since JavaScript has great support for first-class functions, we can attach a function to any object and change the calling context
var foo = { bar: 123 };
function bas(){
    if(this==global)
        console.log('called from global');
    if(this==foo)
        console.log('called from foo');
}
//global context
bas();
//from foo
foo.bas = bas;
foo.bas();