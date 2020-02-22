// The variable global is our handle to the global namespace in Node.js. If you are familiar with front-end JavaScript 
// development, this is somewhat similar to the window object. All the true globals we have seen (console, setTimeout, 
// and process) are members of the global variable. You can even add members to the global variable to make it 
// available everywhere, as shown below
global.something = 123;
// Even though adding a member to global is something that you can do, it is strongly discouraged. The reason is 
// that it makes it extremely difficult to know where a particular variable is coming from. The module system is designed 
// to make it easy to analyze and maintain large codebases. Having globals all over the place is not maintainable, 
// scalable, or reusable without risk. It is, however, useful to know the fact that it can be done and, more importantly, as a 
// library developer you can extend Node.js any way you like.