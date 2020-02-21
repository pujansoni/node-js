// console.log(process.pid);
// console.log(process.versions.node);
// console.log(process.argv);
// for the code below write the command: node globalProcess Pujan Soni
// const [ , , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);
// for the code below write the command: node globalProcess --user pujan --greeting "Hello Mr."
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);