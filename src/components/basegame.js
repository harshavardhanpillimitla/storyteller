import React,{Component} from "react";
import Move from './move';
import Board from './board';
import Movement from './movements'



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
          let direction1=1,direction2=2,direction3=3,direction4=4;
        
          
          
          
          if((this.props.game.gamestate[parseInt(detail[0])]!=='0')&&(this.props.game.gamestate[parseInt(detail[0])]===this.props.game.playerchance) )
          {
            if(detail[0]==="1")
            {
              direction1=2;
              direction2=2;
              direction3=2;
              direction4=2;
            }

            
            upmove  = this.nextmove(up,direction1);
            downmove = this.nextmove(down,direction2);
            rightmove= this.nextmove(right,direction3);
            leftmove = this.nextmove(left,direction4);
            // alert("no killer")
          




                
                
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
              
              
              
              if((this.props.game.gamestate[posdir]!=="0") && (this.props.game.playerchance==='2') )
              {
                if(detail[0]==='1'){
                  pos=2;
                   }
                
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


      
       

      }
      abc =() => {
        // console.log(this.state);
        this.winner();
       
          this.props.gamechange(this.state);
          
        
        
        
        

      }
      nextstrike = (index,direct) =>
      {
        
        let decision=this.props.game.boxes[index].split(",");
        
    
        if(this.props.game.gamestate[parseInt(decision[direct])]==='0')
        {
            
              return  true;

            
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
        console.log("at next movr",direction,value)
        
        
        if( (this.props.game.gamestate[direction]==='0') || ((this.props.game.gamestate[direction]==='1')&&this.nextstrike(direction,value)) )
        {
          
         return true;
        }
        return false;
      }



    render()
    {
     


        return(
        <React.Fragment>

      <Board color={this.color.bind(this)} click={this.onClick.bind(this)}/>
      <Movement buttonClick={this.ButtonClick.bind(this)}   submit={this.abc.bind(this)} state={this.state}/>
      
      <Move message={this.state.message} player={this.props.game}/>
      

      </React.Fragment>
        )

    }
}

export default BaseGame;