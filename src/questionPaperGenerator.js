

class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generatePaper(totalMarks, difficultyDistribution) {
      const paper = [];
  
      for (const [difficulty, percentage] of Object.entries(difficultyDistribution)) {
        const difficultyQuestions = this.filterQuestionsByDifficulty(difficulty);
        const marksForDifficulty = Math.floor((percentage / 100) * totalMarks);
  
        paper.push(...this.getRandomQuestions(difficultyQuestions, marksForDifficulty));
      }
  
      return paper;
    }
  
    filterQuestionsByDifficulty(difficulty) {
      return this.questionStore.getQuestions().filter(question => question.difficulty === difficulty);
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      return shuffledQuestions.slice(0, count);
    }
  }
  
  module.exports = QuestionPaperGenerator;
  