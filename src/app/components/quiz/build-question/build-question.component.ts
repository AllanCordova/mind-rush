import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Quiz from '../../../model/Quiz';
import Question, { AnswerType } from '../../../model/Question';

@Component({
  selector: 'app-build-question',
  imports: [FormsModule, NgClass],
  templateUrl: './build-question.component.html',
  styleUrls: ['./build-question.component.css'],
})
export class BuildQuestionComponent implements OnInit {
  quizId: string = '';
  quiz!: Quiz;

  questionText: string = '';
  answerText: string = '';
  tempAnswers: AnswerType[] = [];
  correctAnswerIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  markCorrect(index: number) {
    this.correctAnswerIndex = index;
  }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id') || '';
    this.quiz = this.quizService.getQuizById(this.quizId);
  }

  addAnswer(): void {
    if (this.answerText.trim()) {
      this.tempAnswers.push({ answer: this.answerText.trim(), select: false });
      this.answerText = '';
    }
  }

  saveQuestion() {
    if (
      !this.questionText.trim() ||
      this.tempAnswers.length < 2 ||
      this.correctAnswerIndex === null
    ) {
      alert(
        'Complete a pergunta com pelo menos duas alternativas e selecione a correta.'
      );
      return;
    }

    const question = new Question(this.questionText, this.tempAnswers);
    question.correctAnswerIndex = this.correctAnswerIndex;

    this.quiz?.questions.push(question);

    // Resetar campos
    this.questionText = '';
    this.tempAnswers = [];
    this.correctAnswerIndex = null;
  }
}
