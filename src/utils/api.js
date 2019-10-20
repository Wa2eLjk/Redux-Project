import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
} from './_Data.js'


export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export function saveQuestionAnswered (info) {
    
    return _saveQuestionAnswer(info)
    .then((answer)=>({info})).then(console.log(info))
  }

export function saveQuestions (info) {
    return _saveQuestion(info)
  }
  
 