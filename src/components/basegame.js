import React,{Component} from "react";



class BaseGame extends Component
{
    state={
        boxclicked:'',
        place:false,
        up:false,
        down:false,
        left:false,
        right:false,
        currentstate:'',
        bridgestate:'0',
        nextstate:''


    }



    color = data =>{
        data=data
        
        let game=this.props.game.gamestate;
        
        if(game[data]==='1')
        {
          return "alert alert-warning rounded-circle"
        }
        else if(game[data]==='2')
        {
          return "alert alert-danger rounded-circle"
    
        }
        return "alert alert-secondary rounded-circle"
        
    
    
    
    
      }
      onClick=e=>{
          let detail=e.target.id.split(",");
          let up = parseInt(detail[1]);
          let down = parseInt(detail[2]);
          let right = parseInt(detail[3]);
          let left = parseInt(detail[4]);

          if( this.props.game.gamestate[parseInt(detail[0])]==='0' )
          {
              this.setState({...this.state,place:true});
          }
          else
          {
              //up has player
              if(this.props.game.gamestate[up]!=="0")
              {
                  let decision=this.props.game.boxes[up].split(",");
                  console.log("decision ",decision);
                  if(this.props.game.gamestate[parseInt(decision[1])]==='0')
                  {
                      this.setState({...this.state,up:true,currentstate:detail[0],nextstate:decision[1],bridgestate:detail[1]});

                      alert("up available");
                  }
                  else this.setState({...this.state,up:false});


              }else 
              {
                //up doesnt have player we can move
                this.setState({...this.state,up:true,currentstate:detail[0],nextstate:detail[1]})

                alert("you can move one step above")

              }
            
          }
          e.target.className="m-2alert alert-primary rounded-circle ";
           
          this.setState({boxclicked:e.target.id})
          e.target.className=this.color(parseInt(detail[0]));

        //   
      }

      ButtonClick =e =>
      {
        let sendingcurrentState=this.state.currentstate;
        let sendingnextstate=this.state.nextstate;
        this.props.gamechange(this.state);
        this.setState({boxclicked:'',place:false,up:false,down:false,left:false,right:false,currentstate:'',nextstate:'',bridgestate:'0'})


      }



    render()
    {
        return(
        <React.Fragment>

        <table className="ml-auto mr-auto">
        <thead>
          <tr>
            <th className="m-4 alert alert-info  pl-4 ">0</th>
            <th className=" alert alert-info  pl-4 mr-4">1</th>
            <th className=" alert alert-info  pl-4 mr-4">2</th>
            <th className=" alert alert-info  pl-4 mr-4">3</th>
            <th className=" alert alert-info  pl-4 mr-4">4</th>
            <th className=" alert alert-info  pl-4 mr-4">5</th>
            <th className=" alert alert-info  pl-4 mr-4">6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="outvar"></td>
            <td className="outvar"></td>
            <td className="outvar"></td>
            <td id="1,3,4,5,6"  className={"m-2"+this.color(1)} onClick={this.onClick.bind(this)}>1</td>
            <td className="outvar"></td>
            <td className="outvar"></td>
            <td className="outvar"></td>
            
          </tr>
          {/* second */}
          <tr >
            <td id="2,0,8,3,0"  className={'mt-2'+this.color(2)} onClick={this.onClick.bind(this)}>2</td>
            <td id="3,1,9,4,2"  className={'mt-2'+this.color(3)} onClick={this.onClick.bind(this)}>3</td>
            <td id="4,1,10,5,3"  className={'mt-2'+this.color(4)} onClick={this.onClick.bind(this)}>4</td>
            <td className="outvar"></td>
            <td id="5,1,11,6,4" className={'mt-2'+this.color(5)} onClick={this.onClick.bind(this)}>5</td>
            <td id="6,1,12,7,5" className={'mt-2'+this.color(6)} onClick={this.onClick.bind(this)}>6</td>
            <td id="7,0,13,0,6" className={'mt-2'+this.color(7)} onClick={this.onClick.bind(this)}>7</td>
            
          </tr>
          {/* third */}
          <tr className="mt-5">
            <td id="8,2,14,9,0" className={'mt-2'+this.color(8)}  onClick={this.onClick.bind(this)}>8</td>
            <td id="9,3,15,10,8" className={'mt-2'+this.color(9)} onClick={this.onClick.bind(this)}>9</td>
            <td id="10,4,16,11,9" className={'mt-2'+this.color(10)} onClick={this.onClick.bind(this)}>10</td>
            <td className="outvar" ></td>
            <td id="11,5,17,12,10" className={'mt-2'+this.color(11)} onClick={this.onClick.bind(this)}>11</td>
            <td id="12,6,18,13,11" className={'mt-2'+this.color(12)} onClick={this.onClick.bind(this)}>12</td>
            <td id="13,7,19,0,12" className={'mt-2'+this.color(13)} onClick={this.onClick.bind(this)}>13</td>
            
          </tr>
          {/* fourth */}
          <tr>
            <td id="14,8,0,15,0" className={'mt-2'+this.color(14)} onClick={this.onClick.bind(this)}>14</td>
            <td id="15,9,20,16,14" className={'mt-2'+this.color(15)} onClick={this.onClick.bind(this)}>15</td>
            <td id="16,10,21,17,15" className={'mt-2'+this.color(16)} onClick={this.onClick.bind(this)}>16</td>
            <td className="outvar"></td>
            <td id="17,11,22,18,16" className={'mt-2'+this.color(17)} onClick={this.onClick.bind(this)}>17</td>
            <td id="18,12,23,19,17" className={'mt-2'+this.color(18)} onClick={this.onClick.bind(this)}>18</td>
            <td id="19,13,0,0,18" className={'mt-2'+this.color(19)} onClick={this.onClick.bind(this)}>19</td>
            
          </tr>
          {/* fifth */}
          <tr>
            <td className="outvar"></td>
            <td id="20,15,0,21,0" className={'mt-2'+this.color(20)} onClick={this.onClick.bind(this)}>20</td>
            <td id="21,16,0,22,20" className={'mt-2'+this.color(21)} onClick={this.onClick.bind(this)}>21</td>
            <td className="outvar"></td>
            <td id="22,17,0,23,21"  className={'mt-2'+this.color(22)} onClick={this.onClick.bind(this)}>22</td>
            <td id="23,18,0,0,22" className={'mt-2'+this.color(23)} onClick={this.onClick.bind(this)}>23</td>
            <td className="outvar"></td>
            
          </tr>
        </tbody>
      </table>
      
      <button onClick={this.ButtonClick.bind(this)}>place</button>

      {this.state.up && <button onClick={this.ButtonClick.bind(this)} >Up</button>}
      {this.state.down &&  <button onClick={this.ButtonClick.bind(this)}>down</button>}
      {this.state.right &&  <button onClick={this.ButtonClick.bind(this)}>Right</button>}
      {this.state.left &&  <button onClick={this.ButtonClick.bind(this)}>left</button>}

      </React.Fragment>
        )

    }
}

export default BaseGame;