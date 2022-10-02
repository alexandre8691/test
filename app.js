let questions = [
    "what is your name ?",
    "What is your job ?",
    "What is your favorite color ?"
]

let answers = []

let ask = (question)=>{
    process.stdout.write(`${question} > \n`)
}

process.stdin.on('data',(data)=>{
    answers.push(data.toString().trim())

    if(answers.length < questions.length){
        ask(questions[answers.length])
    }else{
        console.log('Thanks you !')
        process.exit()
    }
})

process.on('exit',()=>{
    process.stdout.write('\n\n')
    process.stdout.write(`You are ${answers[0]}, you work as a ${answers[1]} and your favorite color is ${answers[2]}`)
    process.stdout.write('\n\n')
})

ask(questions[0])

