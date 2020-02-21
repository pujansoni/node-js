// So, what is the calling context if I call a function without any prefix? The default calling context is the Node.js global
function foo(){
    console.log('is this called from globals? : ', this==global);
}
foo();