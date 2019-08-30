#!/usr/bin/env node

const prompts = require('prompts');
let score = 0;
/* Questions */
const questions = [{
        type: "text",
        name: "chooseName",
        message: "Choose your name : "
    },
    {
        type: "select",
        name: "chooseCharacterClass",
        message: "Choose your class : ",
        choices: [{
                title: "Developer",
                description: "Your are the code guardian",
                value: "Developer"
            },
            {
                title: "Pioupiou",
                description: "Your are a small duck, you say yes to everything",
                value: "Pioupiou"
            },
            {
                title: "Unicorn",
                description: "You are a babymetal rockstar",
                value: "Unicorn"
            },
            {
                title: "The redhead",
                description: "He was as red-faced as he was red-headed",
                value: "The redhead"
            },
        ],
        initial: 0
    }
];

/* */
let play = async () => {
    const response = await prompts(questions);

    let thisName = response.chooseName;
    let thisClass = response.chooseCharacterClass;

    if (thisName == "") {
        thisName = "Christophe-Michel";
        thisClass = "THE singer God"
    }


    console.log(`
    Hello ${thisName}, you are ${thisClass} 
    `);

    console.log(`
    Oh, miserable! You have decided to venture into the Fort-BeCode! 
    You don’t know what’s going to happen (and we either). 
    You will have to be brave and make good choices!`)



    const first = [{
        type: "select",
        name: "firstChoice",
        message: " Where do you want to go : ",
        choices: [{
                title: "Stairs",
                description: "Beautiful stairs but very long",
                value: "Stairs"
            },
            {
                title: "Elevator",
                description: "Easy and relaxing",
                value: "Elevator"
            }
        ],
        initial: 0
    }];

    let begin = async () => {
        const resp = await prompts(first);
        let thisChoice = resp.firstChoice;

        if (thisChoice == "Elevator") {
            console.log(` 
            You take the elevator and come face to face with Nicolas. He generates an ACF field around you.
            To get out, you have to answer his question : "Is CHIMMO the best site in the world ?" `)
            const two = [{
                type: "select",
                name: "twoChoice",
                message: "Is CHIMMO the best site in the World: ",
                choices: [{
                        title: "Yes",
                        description: "It's a your last word?",
                        value: "yes",

                    },
                    {
                        title: "No",
                        description: "Are you sure",
                        value: "no",
                    }
                ],
                initial: 0
            }];
            let second = async () => {
                const respTwo = await prompts(two);
                let thisChoiceTwo = respTwo.twoChoice;
                if (thisChoiceTwo == "yes") {
                    console.log(`The elevator goes up and you can go to the BeCode class`)
                    score = score + 1;
                } else {
                    console.log(`The elevator explodes and you find yourself in BeCode's cellar.
                                You meet Eric who asks you to sign an attendance contract.`)

                }
            }
            second();
        } else {
            console.log(`
        You go up the stairs, they take you directly to the BeCode room. 
        There you meet Julie who introduces you to the witch Lara Vel. 
        She asks you if you want to become her "Artisan" ?`)
            const juju = [{
                type: "select",
                name: "ju",
                message: " ",
                choices: [{
                        title: "Yes",
                        description: "",
                        value: "yes",

                    },
                    {
                        title: "No",
                        description: "",
                        value: "no",
                    }
                ],
                initial: 0
            }];
            let julie = async () => {
                const respJuju = await prompts(juju);
                let thisChoiceJuju = respJuju.ju;
                if (thisChoiceJuju == "yes") {
                    console.log(`She's asking you to take him back to the « Terminal ».`)
                    score = score + 1;
                } else {
                    console.log(`She’s asking you to look for him with Ashraf, aka « Harry-Coder `)

                }
            }
            julie();
        }

    }


    begin();
};
play();