import { saveQuestions, saveQuestionAnswered } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
function addquestion(question) {
    console.log('heys', question)
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(Q1text, Q2text) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestions({
            Q1text, Q2text,
            author: authedUser
        })
            .then((question) => dispatch(addquestion(question)))
            .then(() => dispatch(hideLoading()))


    }
}
function addAnswer(answer) {
    console.log('hey', answer)
    return {
        type: ADD_ANSWER,
        answer
    }
}
export function handleAddAnswer(answer, id) {
    console.log('Action', answer)
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestionAnswered({
            answer,
            authedUser,
            qid: id,
           
        }).then((answers) => dispatch(addAnswer(answers)))
          .then(() => dispatch(hideLoading()))


    }
}