import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseGame from './components/basegame';

class App extends Component{

  state={
    playerchance:'1',
    boxes:[
      "0,012,012,012,012",
      "1,3,4,5,6",
      "2,1,8,3,0",
      "3,1,9,4,2",
      "4,1,10,5,3",
      "5,1,11,6,4",
      "6,1,12,7,5",
      "7,0,13,0,6",
      "8,2,14,9,0",
      "9,3,15,10,8",
      "10,4,16,11,9",
      "11,5,17,12,10",
      "12,6,18,13,11",
      "13,7,19,0,12",
      "14,8,0,15,0",
      "15,9,20,16,14",
      "16,10,22,17,15",
      "17,11,22,18,16",
      "18,12,23,19,17",
      "19,13,0,0,18",
      "20,15,0,21,0",
      "21,16,0,22,0",
      "22,17,0,23,21",
      "23,18,0,0,22"

    ],
    gamestate:['012','2','0','0','2','2','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    meks:['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
    puls:['0','0','0'],
    availablemaks:15,
    availablepuls:0,
    currentmaks:0,
    currentpuls:3,
    playermove:'0',
    kill:0,
    
killer:99



  }


  onClicked =(basestate) =>{
    let detail=basestate.boxclicked.split(",");
    let currentstate=basestate.currentstate;
    let nextstate = basestate.nextstate;
    
    let bridgestate=basestate.bridgestate;
    let gameplay=this.state.gamestate.map(state => {return state});
    let pulstate = this.state.puls.map(state => {return state});
    let currentplayer =this.state.playerchance;
    let currentplayerstatus =this.state.playerchance;
    let avlm,curm,avlp,crp,k,kill=this.state.kill,justkilled,killer=99;
    let a=99;
    this.setState({...this.state,killer:a})
    
    if(gameplay[parseInt(detail[0])]==='0')
    {
      // console.log(currentplayer,this.state)
      if((currentplayer==='1') && (this.state.availablemaks!==0))
      {
        avlm=this.state.availablemaks-1;
        curm=this.state.currentmaks+1;
        // console.log("sate avlm",this.state.currentmaks);
        avlm=avlm;
        curm=curm;

        
        gameplay[parseInt(detail[0])]=currentplayer;
        this.setState({...this.state,playerchance:'2',availablemaks:avlm,currentmaks:curm});
        if(this.state.availablepuls===0)
        {
          // alert("you have to move your puli");
        }
       

      }
      else 
      {
        if((currentplayer==='2') && (this.state.availablepuls!==0))
        {
          avlp=this.state.availablepuls-1;
          crp=this.state.currentpuls+1
          gameplay[parseInt(detail[0])]=currentplayer;
          
          this.setState({...this.state,playerchance:'1',availablepuls:avlp,currentpuls:crp});
         
          // console.log(this.state.playerchance,1);


        }
        
        
        


      }


      this.setState({gamestate:gameplay})

      
    }
    else
    {
      if( (currentstate!=='') && (nextstate!=='') )
      {

        let playerid=gameplay[parseInt(currentstate)];
        let nextchance;
        if(bridgestate!=='0')
        {
          k=this.state.kill;
          kill=k+1;
          justkilled=true;
          gameplay[parseInt(bridgestate)]='0';

        }
        gameplay[parseInt(currentstate)]='0';
        gameplay[parseInt(nextstate)]=playerid;
        if(playerid==='1')
        {
          nextchance='2';
        }
        else{
          if(!justkilled){
            nextchance='1';

          }
          else
          {
            if(this.playerkillchancebonus(parseInt(nextstate)))
            {
              nextchance='2';
              justkilled=false;
              killer=nextstate;

            }
            else
            {
              nextchance='1';

            }
          }
          
          
          
        }
        this.setState({...this.state,playerchance:nextchance,gamestate:gameplay,kill:kill,killer:killer});

      }
    }


    if(this.state.playerchance===currentplayerstatus)
    {
      if(currentplayerstatus==='1')
      {
        // this.setState({playerchance:'2'});
        // console.log("2");

      }
      else
      {
        // this.setState({playerchance:'1'});
        // console.log("1");

      }
      
    }
    
    
  }


  playerkillchancebonus = (nextstate)=>
  {
    let decision=this.state.boxes[nextstate].split(",");
    let index;
    let returnvalue=false;
    decision.map(item => {
      if(item!=="0")
      {
        console.log(item);

          if( (this.state.gamestate[parseInt(item)]!=="0") ||  (this.state.gamestate[parseInt(item)]!=="2") )
          {
            index=decision.indexOf(item);
            if(this.state.boxes[parseInt(item)].split(",")[index]==="0")
            {
              returnvalue=true;

            }
            

          }
    }
     
      
    });
    
    return returnvalue;

  }



  render(){


    return(
      <BaseGame game={this.state}  gamechange={this.onClicked}/>
    )
  }




}



export default App;
