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
const juju = [{
    type: "select",
    name: "Coach_julie",
    message: "You go up the stairs, they take you directly to the BeCode room. There you meet Julie who introduces you to the witch Lara Vel. She asks you if you want to become her Artisan ? ",
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
const eric = [{
    type: "select",
    name: "Eric_admin",
    message: " Do you want to read it? ",
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
const antony = [{
    type: "select",
    name: "Coach_anto",
    message: "You enter the arcade and the master of the game Anthony invites you to face him in a airhockey game in VR. ",
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




    let begin = async () => {
        const resp = await prompts(first);
        let thisChoice = resp.firstChoice;

        if (thisChoice == "Elevator") {
            console.log(` 
            You take the elevator and come face to face with Nicolas. He generates an ACF field around you.
            To get out, you have to answer his question : "Is CHIMMO the best site in the world ?" `)

            let second = async () => {
                const respTwo = await prompts(two);
                let thisChoiceTwo = respTwo.twoChoice;
                if (thisChoiceTwo == "yes") {
                    console.log(`The elevator goes up and you can go to the BeCode class`)
                    score = score + 1;
                    console.log(`There you meet Julie who introduces you to the witch Lara Vel. 
                    She asks you if you want to become her "Artisan" ?`)
                    let julie = async () => {
                        const respJuju = await prompts(juju);
                        let thisChoiceJuju = respJuju.Coach_julie;
                        if (thisChoiceJuju == "yes") {
                            console.log(`She's asking you to take him back to the « Terminal ».`)

                            console.log(`GAME OVER!`)
                            score = score + 1;
                        } else {
                            console.log(`She’s asking you to look for him with Ashraf, aka « Harry-Coder `)
                            let antony_coach = async () => {
                                const respAnto = await prompts(antony);
                                let thisChoiceAntony = respAnto.Coach_anto;
                                if (thisChoiceAntony == "yes") {
                                    console.log(` You accept, but Jessica who was hidden in the room throws a real puck in the face. Game Over.`)
                                    score = score + 1;
                                } else {
                                    console.log(`You refuse because you don't want to test a game before you see his code. Good choice !`)

                                }
                            }
                            antony_coach();
                        }
                    }
                    julie();

                } else {
                    console.log(`The elevator explodes and you find yourself in BeCode's cellar.
                                You meet Eric who asks you to sign an attendance contract.`)
                    let admin_eric = async () => {
                        const respEric = await prompts(eric);
                        let thisChoiceEric = respEric.Eric_admin;
                        if (thisChoiceEric == "yes") {
                            console.log(` GAME OVER`)
                            score = score + 1;
                        } else {
                            console.log(`You run to the arcadee...`)
                            let antony_coach = async () => {
                                const respAnto = await prompts(antony);
                                let thisChoiceAntony = respAnto.Coach_anto;
                                if (thisChoiceAntony == "yes") {
                                    console.log(` You accept, but Jessica who was hidden in the room throws a real puck in the face. Game Over.`)
                                    score = score + 1;
                                } else {
                                    console.log(`You refuse because you don't want to test a game before you see his code. Good choice !`)

                                }
                            }
                            antony_coach();


                        }
                    }
                    admin_eric();
                }
            }
            second();
        } else {


            let julie = async () => {
                const respJuju = await prompts(juju);
                let thisChoiceJuju = respJuju.Coach_julie;
                if (thisChoiceJuju == "yes") {
                    console.log(`She's asking you to take him back to the « Terminal ».`)
                    console.log(`GAME OVER!`)
                    score = score + 1;

                } else {
                    console.log(`She’s asking you to look for him with Ashraf, aka « Harry-Coder `)
                    let antony_coach = async () => {
                        const respAnto = await prompts(antony);
                        let thisChoiceAntony = respAnto.Coach_anto;
                        if (thisChoiceAntony == "yes") {
                            console.log(` You accept, but Jessica who was hidden in the room throws a real puck in the face. Game Over.`)
                            score = score + 1;
                        } else {
                            console.log(`You refuse because you don't want to test a game before you see his code. Good choice !`)

                        }
                    }
                    antony_coach();
                }
            }
            julie();
        }

    }


    begin();
};
play();