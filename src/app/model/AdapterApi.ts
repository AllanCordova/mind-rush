import Question from './Question';
import Quiz from './Quiz';

export class AdapterApi {
  static fromOpenTDB(data: any): Quiz {
    if (!data.results || data.results.length === 0) {
      throw new Error('Quiz inválido ou sem perguntas');
    }

    const category = decodeURIComponent(data.results[0].category);
    const difficulty = decodeURIComponent(data.results[0].difficulty);

    const questions = data.results.map((item: any) => {
      const answers = [...item.incorrect_answers, item.correct_answer]
        .sort(() => Math.random() - 0.5)
        .map((ans) => ({
          answer: decodeURIComponent(ans),
          select: false,
        }));

      const correctIndex = answers.findIndex(
        (a) => a.answer === decodeURIComponent(item.correct_answer)
      );

      const q = new Question(decodeURIComponent(item.question), answers);
      q.correctAnswerIndex = correctIndex;
      return q;
    });

    return new Quiz(category, `${difficulty}`, questions);
  }
}
