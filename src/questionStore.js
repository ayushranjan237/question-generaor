

class QuestionStore {
  constructor() {
    this.questions = [];
  }

  addQuestions(newQuestions) {
    this.questions.push(...newQuestions);
  }

  getQuestions() {
    return this.questions;
  }
}

module.exports = QuestionStore;
