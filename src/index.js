// index.js

const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

const questionStore = new QuestionStore();


const newQuestions = [
  {
    question: "What is the capital of France?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Easy",
    marks: 3
  },
  {
    question: "Solve the equation 2x + 5 = 15.",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Medium",
    marks: 8
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    subject: "Literature",
    topic: "Drama",
    difficulty: "Easy",
    marks: 4
  },
  {
    question: "Name three programming languages.",
    subject: "Computer Science",
    topic: "Programming Languages",
    difficulty: "Medium",
    marks: 7
  },
  {
    question: "What is the chemical symbol for gold?",
    subject: "Chemistry",
    topic: "Elements",
    difficulty: "Hard",
    marks: 12
  },

  // Add more questions as needed
];

questionStore.addQuestions(newQuestions);

const questionPaperGenerator = new QuestionPaperGenerator(questionStore);


const difficultyDistribution = {
  Easy: 20,
  Medium: 50,
  Hard: 30
};

const totalMarks = 100;
const questionPaper = questionPaperGenerator.generatePaper(totalMarks, difficultyDistribution);

console.log("Generated Question Paper:");
console.log(questionPaper);
