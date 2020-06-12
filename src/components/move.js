import React,{Component} from 'react';

class Move extends Component{
    


    render(){
         console.log(this.props.message,this.props.player)

        return(
        <div className="alert alert-primary" >
        <p > message  :{this.props.message}   </p>
        <p>playerid:{this.props.player==="1"?"mekha":"puli"}</p>
        </div>
        )


    }



}
export default Move;