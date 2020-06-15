
import React,{Component} from 'react';

class Movements extends Component{
    


    render(){
         console.log(this.props.message,this.props.player)

        return(
            <div className="container ml-auto mr-auto">
            <div className="row">
            {this.props.state.place && <button className="ml-auto mr-auto" onClick={this.props.buttonClick} value="place">*place*</button>}
            </div>
            <div className="row">
            {this.props.state.up && <button   className="ml-auto mr-auto" onClick={this.props.buttonClick } value="up">{this.props.state.boxclicked.split(",")[0]!=='1'?"up":"1down"}</button>}
            
            </div>
            <div className="row ml-auto mr-auto">
            {this.props.state.left &&  <button className="col6 ml-auto mr-auto" onClick={this.props.buttonClick} value="left">{this.props.state.boxclicked.split(",")[0]!=='1'?"left":"4down"}</button>}
            {this.props.state.right &&  <button className="col6 ml-auto mr-auto" onClick={this.props.buttonClick} value="right">{">"}{this.props.state.boxclicked.split(",")[0]!=='1'?"roght":"3down"}</button>}
            </div>
            <div className="row">
            {this.props.state.down &&  <button className="ml-auto mr-auto" onClick={this.props.buttonClick}value="down">{this.props.state.boxclicked.split(",")[0]!=='1'?"down":"2down"} </button>}
            
            </div>
            
            { ((this.props.state.up)||(this.props.state.down)||(this.props.state.right)||(this.props.state.left))&& <button  className="col ml-auto mr-auto" onClick={this.props.submit} value="place">makemove</button>}
      
            </div>
        )


    }



}
export default Movements;