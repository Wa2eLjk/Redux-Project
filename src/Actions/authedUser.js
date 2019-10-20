export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER"


export function recieveAuthedUser(id){
    return{
        type:SET_AUTHED_USER,
        id
    }
}
 function setAuthedUser (id){
    return{
        type:SET_AUTHED_USER,
        id
    }
}
 function unsetAuthedUser (id){
    return{
        type:UNSET_AUTHED_USER
        ,id
    }
}
export function handdleSetAuthedUser(id){
    
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    }
    
}
export function handdleunSetAuthedUser(id){
    
    return (dispatch) => {
        dispatch(unsetAuthedUser(id))
    }
    
}
