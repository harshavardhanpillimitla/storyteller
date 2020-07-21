
import React, { Component } from 'react';

class Movements extends Component {



    render() {


        return (
            <div>

                {
                    this.props.display ? <div className="container ml-auto mr-auto">
                        <div className="row">
                            {this.props.state.place && <button className="btn btn-primary ml-auto mr-auto" onClick={this.props.buttonClick} value="place">*place*</button>}
                        </div>
                        <div className="row">
                            {this.props.state.up && <button className="btn btn-primary ml-auto mr-auto" onClick={this.props.buttonClick} value="up">{this.props.state.boxclicked.split(",")[0] !== '1' ? "up" : "1down"}</button>}

                        </div>
                        <div className="row ml-auto mr-auto">
                            {this.props.state.left && <button className="btn btn-primary col6 ml-auto mr-auto" onClick={this.props.buttonClick} value="left">{this.props.state.boxclicked.split(",")[0] !== '1' ? "left" : "4down"}</button>}
                            {this.props.state.right && <button className="btn btn-primary col6 ml-auto mr-auto" onClick={this.props.buttonClick} value="right">{">"}{this.props.state.boxclicked.split(",")[0] !== '1' ? "roght" : "3down"}</button>}
                        </div>
                        <div className="row">
                            {this.props.state.down && <button className="btn btn-primary ml-auto mr-auto" onClick={this.props.buttonClick} value="down">{this.props.state.boxclicked.split(",")[0] !== '1' ? "down" : "2down"} </button>}

                        </div>

                        {((this.props.state.up) || (this.props.state.down) || (this.props.state.right) || (this.props.state.left)) && <button className="btn btn-primary col ml-auto mr-auto" onClick={this.props.submit} value="place">makemove</button>}

                    </div> : <div className="row">
                            <button className="btn btn-primary ml-auto mr-auto" onClick={this.props.buttonClick} value="place">wait for your turn</button>}
                        </div>
                }
            </div>
        )


    }



}
export default Movements;