import { QuestionSet, Question, DefaultFor, ChoicesFor } from 'nest-commander';

@QuestionSet({ name: 'are-you-sure' })
export class AreYouSureQuestion {
  @Question({
    message: 'Are you sure you want to kill this process?',
    name: 'are-you-sure',
  })
  parseTask(val: string) {
    return val;
  }

  @DefaultFor({
    name: 'are-you-sure',
  })
  defaultAnswerNo() {
    return 'no';
  }
}
