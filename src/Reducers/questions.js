import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../Actions/questions'



export default function questions(state = [], action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
                console.log('ADD_Question', action)
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ADD_ANSWER:
            console.log('Action',action.answer.info.answer)
            // if(action.answer.info.answer === 'optionOne'){
                const Choice = action.answer.info.answer
                console.log(Choice)
                console.log('state',state[action.answer.info.qid].Choice)
            // }
            // else{
            //     console.log('optionTwo')
            // }
             
                // [action.answer.info.votes]:{
                //     ...state[action.answer.info.qid].optionOne.votes,
                //     votes: state[action.answer.info.qid].optionOne.votes.concat(action.answer.info.authedUser)
                // }
                let questions = {}
                 questions = {
                    ...state,
                    [action.answer.info.qid]:{
                        ...state[action.answer.info.qid],
                        [action.answer.info.answer]:{
                                ...state[action.answer.info.qid][action.answer.info.answer],
                                votes:state[action.answer.info.qid][action.answer.info.answer].votes.concat([action.answer.info.authedUser])
                            
                        }
                    }
                        
                
                  }
            console.log(questions)
            
            return{
                ...state,
                ...questions
               
            }
        default:
            return state
    }
}