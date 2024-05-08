const quizData = [
    // Define a dictionary type data with key-pair pair
    {
        question: "In season 9, which map has wind tunnels?",
        options: ["Airship", "Blossom", "Sand Shrine", "Aztec"],
        answer: "Blossom"    
    },

    {
        question: "How much projectile damage resistance do diamond guardians have?",
        options: ["0%", "10%", "40%", "45%"],
        answer: "0%"
    },

    {
        question: "How much does emerald armour cost?",
        options: ["30", "35", "40", "50"],
        answer: "40"
    },

    {
        question: "Which season was Fortuna added?",
        options: ["S5", "S6", "S7", "S8"],
        answer: "S8"
    },

    {
        question: "Which enchant is similiar to Zephyr kit's ability?",
        options: ["Rapid Regen", "Static", "Cloud", "Wind"],
        answer: "Wind"
    },

    {
        question: "How many diamonds do capturing a diamond generator award you?",
        options: ["0", "1", "2", "4"],
        answer: "1"
    },

    {
        question: "What is barbarian's special weapon?",
        options: ["Twirl blade", "Emerald sword", "Spear", "Rageblade"],
        answer: "Rageblade"
    },

    {
        question: "Which block does Monarch spawn?",
        options: ["Diamond block", "Magma block", "Volatile stone", "Moss block"],
        answer: "Volatile stone"
    },

    {
        question: "What is Kresh's technical name?",
        options: ["void_grass", "kobblak", "fisherman_coral", "blue_tile"],
        answer: "void_grass"
    },
    
    {
        question: "Which kit can buy the ice sword?",
        options: ["Aery", "Yeti", "Sheila", "Freiya"],
        answer: "Freiya"
    },

    {
        question: "Which battlepass had the bubble kill effect?",
        options: ["S7 Free BP", "S7 Paid BP", "S8 Free BP", "S8 Paid BP"],
        answer: "S8 Free BP"
    },

    {
        question: "Which season had the 'Kindom Lobby' lobby music?",
        options: ["S4", "S5", "S6", "S7"],
        answer: "S6"
    },

    {
        question: "Which 1v1/2v2 map can be crossed without blocks using yamini?",
        options: ["Volatile", "Glade", "Sand Temple", "Farmland"],
        answer: "Sand Temple"
    },

    {
        question: "Which Roblox event did Bedwars take part in?",
        options: ["The Hunt: First Edition", "Metaverse Champions", "Roblox Innovation Awards", "Eggstravaganza"],
        answer: "The Hunt: First Edition"
    },

    {
        question: "Which kit cannot spawn entities?",
        options: ["Elektra", "Taliyah", "Crypt", "Sigrid"],
        answer: "Elektra"
    },

    {
        question: "What is the technical name for red wool?",
        options: ["redwool", "red_wool", "wool_red", "red_wool_block"],
        answer: "wool_red"
    },

    {
        question: "What block appears in the Large Pop Up Box? (The structure)",
        options: ["iron block", "glass", "grass", "coral"],
        answer: "glass"
    },

    {
        question: "Which item cannot be dropped?",
        options: ["arrow", "snowball", "tesla coil trap", "wool"],
        answer: "arrow"
    },

    {
        question: "Which gamemode awards a badge if the player wins?",
        options: ["30v30", "ranked", "skywars royale", "gun game"],
        answer: "skywars royale"
    },

    {
        question: "What gamemode does No Build gamemode use?",
        options: ["doubles", "5v5", "30v30", "squads"],
        answer: "squads"
    }
];





const questionElement = document.getElementById('question');
const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('timer');
const timerText = document.getElementById('countdown');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const optionsElement = document.getElementById('option-container');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0
progressBar.style.width = "0%";

startButton.addEventListener('click', startQuiz);

function startQuiz()
{
    startButton.style.display = 'none';
    progressBarContainer.style.display = 'block' // to show progress bar container
    loadQuestion();
}


function loadQuestion()
{
    clearInterval(timer);

    

    if(currentQuestion < quizData.length)
    {
        progressBar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
        const currentQuizData = quizData[currentQuestion];
        questionElement.textContent = currentQuizData.question;

        // Set initital countdown value
        timerText.textContent = 15;

        //remove  previous options
        optionsElement.innerHTML = '';
        //clone a button for each button in a question
        currentQuizData.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn'); 
            optionsElement.appendChild(button);

            button.addEventListener('click', () => {
                checkAnswer(option);
            });
        });


        //Start the countdown for the current question
        timer = setInterval(() => {
            timerText.textContent = parseInt(timerText.textContent) - 1;
            if(parseInt(timerText.textContent) === 0)
            {
                //reset timer for next question
                clearInterval(timer);
                //raise current question number by 1
                currentQuestion++;

                loadQuestion();
            }
        }, 1000);
    } else {
        endQuiz();
    }
}

function checkAnswer(option)
{
    const currentQuizData = quizData[currentQuestion];

    if(option ===currentQuizData.answer)
    {
        score++;
    }

    resultElement.textContent = `You scored ${score} points!`;
    currentQuestion++;
    loadQuestion();
}

function endQuiz()
{
    progressBarContainer.style.display = 'none';
    timerElement.style.display = 'none';
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
}