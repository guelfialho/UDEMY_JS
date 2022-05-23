'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(`What is your favourite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`)
    );
    if (answer >= 0 && answer <= 3) {
      poll.answers[answer]++;
    }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      const results = this.answers;
      console.log(`Poll results are ${results}.`);
    }
  },
};

const btnPoll = document.querySelector('.poll');
btnPoll.addEventListener('click', poll.registerNewAnswer);
