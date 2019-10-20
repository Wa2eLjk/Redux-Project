import React, {Component} from 'react'
import {connect} from 'react-redux'

class Leader extends Component{
    render(){
        const {users,userIds} = this.props
       
        
        return(
            <div className="Leader">
                
                {userIds.map((id)=>(
                    <div key={id} className="panel">
                        <div className="rounded-circle"><img src={users[id].avatarURL} alt="Getimage"/></div>
                    
                    {users[id].name}
                    <p>Answred Questions : {Object.keys(users[id].answers).length}</p>
                    
                    <p>AskedQuestion :  {users[id].questions.length}</p>
                    <p>Total:  {users[id].questions.length + Object.keys(users[id].answers).length}</p>
                    </div>
                ))}
                {/* {console.log(length)} */}
                
            </div>
        )
    }
}
function mapStateToProps({users}){
   
    return{
        userIds: Object.keys(users).sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length ) - (Object.keys(users[a].answers).length +users[a].questions.length ) ),
        users
    }
}
export default connect(mapStateToProps)(Leader)