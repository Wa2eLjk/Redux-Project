import { getInitialData } from '../utils/api'
import { receiveUsers } from '../Actions/users'
import { receiveQuestions } from '../Actions/questions'
import { recieveAuthedUser } from '../Actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

// const Authed_ID = "tylermcginnis"

export function handleInitialData(Authed_ID) {
    return (dispatch) => {
        
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            if (typeof(Authed_ID) !== 'undefined') {
                
                dispatch(recieveAuthedUser(Authed_ID))
            }
            
            dispatch(hideLoading())
        })
    }
}