import React,{Component} from 'react';

class Move extends Component{
    


    render(){
         console.log(this.props.message,this.props.player)

        return(
        <div className="alert alert-primary" >
        <p > message  :{this.props.message}   </p>
        <p>playerid:{this.props.player.playerchance==="1"?"mekha":"puli"}</p>
        <p>kills:{this.props.player.kill}</p>
        <p>remaing maks:{this.props.player.availablemaks}</p>
        </div>
        )


    }



}
export default Move;