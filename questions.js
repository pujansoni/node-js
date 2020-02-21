// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

// To get user to write something in the console we will use the process.stdin.on function
// process.stdin.on("data", data => {
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//     process.exit();
// });

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () =>{
    const [name, activity, lang] = answers;
    // Here note that the template string that we are using honour's white space
    console.log(`

Thank you for your answers

Go ${activity} ${name} you can write ${lang} code later!!!

    `);
});
