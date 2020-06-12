import React,{Component} from "react";
import Move from './move';



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
        nextstate:'',
        directiion:0,
        message:''


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
        let initial = {boxclicked:'',place:false,up:false,down:false,left:false,
        right:false,
        currentstate:'',
        bridgestate:'0',
        nextstate:'',
        message:''


    };
            this.setState(initial);
          let detail=e.target.id.split(",");
          let place;
          let up = parseInt(detail[1]);
          let down = parseInt(detail[2]);
          let right = parseInt(detail[3]);
          let left = parseInt(detail[4]);
          let upmove=false,downmove=false,rightmove=false,leftmove=false;
          
          
          
          if((this.props.game.gamestate[parseInt(detail[0])]!=='0')&&(this.props.game.gamestate[parseInt(detail[0])]===this.props.game.playerchance) )
          {
            
            if(this.props.game.killer===99)
            {     
            upmove  = this.nextmove(up,1);
            downmove = this.nextmove(down,2);
            rightmove= this.nextmove(right,3);
            leftmove = this.nextmove(left,4);
            // alert("no killer")
            }
            else 
            {
              if(this.props.game.killer===detail[0])
              {
                // alert(this.props.game.killer===detail[0])
                upmove  = this.nextmove(up,1);
                downmove = this.nextmove(down,2);
                rightmove= this.nextmove(right,3);
                leftmove = this.nextmove(left,4);

              }
              

            }




                
                
          }
          else
          {
            place=true;
          }
          

         
          e.target.className="m-2alert alert-primary rounded-circle ";
           
          this.setState({boxclicked:e.target.id,up:upmove,down:downmove,right:rightmove,left:leftmove,place:place})
          e.target.className=this.color(parseInt(detail[0]));

        //   
      }

      ButtonClick =e =>
      {
        let message;
         let det=this.state.boxclicked;
         let detail = det.split(",");

        
          let up = parseInt(detail[1]);
          let down = parseInt(detail[2]);
          let right = parseInt(detail[3]);
          let left = parseInt(detail[4]);
          let pos,posdir;
          let t=true,f=false;
        let switchcase=e.target.value;
        switch(switchcase)
        {
          case 'up': pos=1;
                     posdir=up;
                     break;
          case 'down': pos=2;
                       posdir=down;
                       break;
          case 'right': pos=3;
                        posdir=right;
                        break;
          case 'left': pos=4;
                       posdir=left;
                       break;
        }


          // console.log("values",pos,posdir,this.props.game.gamestate[parseInt(detail[0])],detail[0],detail)
          if( this.props.game.gamestate[parseInt(detail[0])]==='0' )
          {
              this.setState({...this.state,place:f});
              this.setState({...this.state,place:false,up:false,down:false,left:false,
                right:false,
                currentstate:'',
                bridgestate:'0',
                nextstate:'',
              message:''});
              this.props.gamechange(this.state);
              
          }
          else
          {
              //up has player
              if(detail[0]==='1'){
                posdir=down;
              }
              
              if((this.props.game.gamestate[posdir]!=="0") && (this.props.game.playerchance==='2') )
              {
                
                  let decision=this.props.game.boxes[posdir].split(",");

                  // console.log("decision ",decision);
                  if(this.props.game.gamestate[parseInt(decision[pos])]==='0')
                  {
                      message="kill available";
                      this.setState({...this.state,currentstate:detail[0],nextstate:decision[pos],bridgestate:detail[pos],message});

                      // alert("kill available");
                      
                  }
                  // else this.setState({...this.state,posdir:f});


              }else 
              {
                //up doesnt have player we can move\
                message="you can move one step above";
                this.setState({...this.state,currentstate:detail[0],nextstate:detail[pos],message});
                // alert("you can move one step above")

              }
            
          }

















        // console.log("====================",this.state)
        
        
      
       

      }
      abc =() => {
        // console.log(this.state);
        this.winner();
        if(this.props.game.killer===99)
        {
          this.props.gamechange(this.state);
          
        }
        else if(this.props.game.killer===this.state.boxclicked.split(",")[0])
        {
          this.props.gamechange(this.state);

        }
        
        
        

      }
      nextstrike = (index,direct) =>
      {
        let decision=this.props.game.boxes[index].split(",");
        // console.log("decision ",decision);
        if(this.props.game.gamestate[parseInt(decision[direct])]==='0')
        {
            if(decision[0]!=='1')
            {
              return  true;

            }
        }
        
        else
        return false;
           

      }
      winner =()=>{
        let a=[],win=false;
        this.props.game.gamestate.map(state => {
          if(state==='2')
          return a.push(this.props.game.gamestate.indexOf(state));
        })
         a.map(indexofpuli => {
           let directions=this.props.game.boxes[indexofpuli].split(",");
           if(  (this.nextmove(parseInt(directions[1]),1) )||(this.nextmove(parseInt(directions[2]),2) )|| (this.nextmove(parseInt(directions[3]),3) )||(this.nextmove(parseInt(directions[4]),4) ) )
           {
             win=false;
           }
           else
           {
             win = true;
           }


         });
         if(win)
         {
           alert("yellow victory");

         }
         else if(this.props.kills===15)
         {
           alert("red wins");
         }
         


      }
      
      nextmove =(direction,value)=>{
        if( (this.props.game.gamestate[direction]==='0')||((this.props.game.gamestate[direction]==='1')&&this.nextstrike(direction,value)) )
        {
          
         return true;
        }
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
      <div className="container ml-auto mr-auto">
      <div className="row">
      {this.state.place && <button className="ml-auto mr-auto" onClick={this.ButtonClick.bind(this)} value="place">*place*</button>}
      </div>
      <div className="row">
      {this.state.up && <button   className="ml-auto mr-auto" onClick={this.ButtonClick.bind(this) } value="up">/\</button>}
      
      </div>
      <div className="row ml-auto mr-auto">
      {this.state.left &&  <button className="col6 ml-auto mr-auto" onClick={this.ButtonClick.bind(this)}value="left">{"<"}left</button>}
      {this.state.right &&  <button className="col6 ml-auto mr-auto" onClick={this.ButtonClick.bind(this)}value="right">{">"}right</button>}
      </div>
      <div className="row">
      {this.state.down &&  <button className="ml-auto mr-auto" onClick={this.ButtonClick.bind(this)}value="down">\/</button>}
      
      </div>
      
      { ((this.state.up)||(this.state.down)||(this.state.right)||(this.state.left))&& <button  className="col ml-auto mr-auto" onClick={this.abc.bind(this)} value="place">makemove</button>}

      </div>
      <Move message={this.state.message} player={this.props.game.playerchance}/>

      </React.Fragment>
        )

    }
}

export default BaseGame;