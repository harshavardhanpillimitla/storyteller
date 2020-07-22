import React, { Component } from 'react';

class Board extends Component {



  render() {


    return (
      // <table className="ml-auto mr-auto">
      //   <thead>
      //     <tr>
      //       <th className="m-4 alert alert-info  pl-4 ">0</th>
      //       <th className=" alert alert-info  pl-4 mr-4">1</th>
      //       <th className=" alert alert-info  pl-4 mr-4">2</th>
      //       <th className=" alert alert-info  pl-4 mr-4">3</th>
      //       <th className=" alert alert-info  pl-4 mr-4">4</th>
      //       <th className=" alert alert-info  pl-4 mr-4">5</th>
      //       <th className=" alert alert-info  pl-4 mr-4">6</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td className="outvar"></td>
      //       <td className="outvar"></td>
      //       <td className="outvar"></td>
      //       <td id="1,3,4,5,6" className={"m-2" + this.props.color(1)} onClick={this.props.click}>1</td>
      //       <td className="outvar"></td>
      //       <td className="outvar"></td>
      //       <td className="outvar"></td>

      //     </tr>
      //     {/* second */}
      //     <tr >
      //       <td id="2,0,8,3,0" className={'mt-2' + this.props.color(2)} onClick={this.props.click}>2</td>
      //       <td id="3,1,9,4,2" className={'mt-2' + this.props.color(3)} onClick={this.props.click}>3</td>
      //       <td id="4,1,10,5,3" className={'mt-2' + this.props.color(4)} onClick={this.props.click}>4</td>
      //       <td className="outvar"></td>
      //       <td id="5,1,11,6,4" className={'mt-2' + this.props.color(5)} onClick={this.props.click}>5</td>
      //       <td id="6,1,12,7,5" className={'mt-2' + this.props.color(6)} onClick={this.props.click}>6</td>
      //       <td id="7,0,13,0,6" className={'mt-2' + this.props.color(7)} onClick={this.props.click}>7</td>

      //     </tr>
      //     {/* third */}
      //     <tr className="mt-5">
      //       <td id="8,2,14,9,0" className={'mt-2' + this.props.color(8)} onClick={this.props.click}>8</td>
      //       <td id="9,3,15,10,8" className={'mt-2' + this.props.color(9)} onClick={this.props.click}>9</td>
      //       <td id="10,4,16,11,9" className={'mt-2' + this.props.color(10)} onClick={this.props.click}>10</td>
      //       <td className="outvar" ></td>
      //       <td id="11,5,17,12,10" className={'mt-2' + this.props.color(11)} onClick={this.props.click}>11</td>
      //       <td id="12,6,18,13,11" className={'mt-2' + this.props.color(12)} onClick={this.props.click}>12</td>
      //       <td id="13,7,19,0,12" className={'mt-2' + this.props.color(13)} onClick={this.props.click}>13</td>

      //     </tr>
      //     {/* fourth */}
      //     <tr>
      //       <td id="14,8,0,15,0" className={'mt-2' + this.props.color(14)} onClick={this.props.click}>14</td>
      //       <td id="15,9,20,16,14" className={'mt-2' + this.props.color(15)} onClick={this.props.click}>15</td>
      //       <td id="16,10,21,17,15" className={'mt-2' + this.props.color(16)} onClick={this.props.click}>16</td>
      //       <td className="outvar"></td>
      //       <td id="17,11,22,18,16" className={'mt-2' + this.props.color(17)} onClick={this.props.click}>17</td>
      //       <td id="18,12,23,19,17" className={'mt-2' + this.props.color(18)} onClick={this.props.click}>18</td>
      //       <td id="19,13,0,0,18" className={'mt-2' + this.props.color(19)} onClick={this.props.click}>19</td>

      //     </tr>
      //     {/* fifth */}
      //     <tr>
      //       <td className="outvar"></td>
      //       <td id="20,15,0,21,0" className={'mt-2' + this.props.color(20)} onClick={this.props.click}>20</td>
      //       <td id="21,16,0,22,20" className={'mt-2' + this.props.color(21)} onClick={this.props.click}>21</td>
      //       <td className="outvar"></td>
      //       <td id="22,17,0,23,21" className={'mt-2' + this.props.color(22)} onClick={this.props.click}>22</td>
      //       <td id="23,18,0,0,22" className={'mt-2' + this.props.color(23)} onClick={this.props.click}>23</td>
      //       <td className="outvar"></td>

      //     </tr>
      //   </tbody>
      // </table>



      <div className="container-fluid my-5 " align="center" >
        <div className="row my-5">
          {/* firstrow */}
          <div className="col">

            <span id="2,0,8,3,0" className={'p-2 mt-2'} > </span>
            <span className="mx-5 outvar"></span>
            <span id="3,1,9,4,2" className={'p-2 mt-2'}> </span>
            <span className="mx-3 outvar"></span>
            <span id="4,1,10,5,3" className={'p-2 mt-2'} > </span>
            <span id="1,3,4,5,6" className={" p-3 mx-3 outvar" + this.props.color(1)} onClick={this.props.click}>1</span>
            <span id="5,1,11,6,4" className={'p-2 mt-2'} ></span>
            <span className="mx-3 outvar"></span>
            <span id="6,1,12,7,5" className={'p-2 mt-2'} ></span>
            <span className="mx-5 outvar"></span>
            <span id="7,0,13,0,6" className={'p-2 mt-2'} ></span>


          </div>

        </div>
        <div className="row my-5">

          <div className="col">
          </div>
        </div>
        <div className="row my-5">
          {/* second */}
          <div className="col">

            <span id="2,0,8,3,0" className={'p-3 mt-2' + this.props.color(2)} onClick={this.props.click}>02</span>
            <span className="mx-5 outvar"></span>
            <span id="3,1,9,4,2" className={'p-3 mt-2' + this.props.color(3)} onClick={this.props.click}>03</span>
            <span className="mx-3 outvar"></span>
            <span id="4,1,10,5,3" className={'p-3 mt-2' + this.props.color(4)} onClick={this.props.click}>04</span>
            <span className="mx-2 outvar"></span>
            <span id="5,1,11,6,4" className={'p-3 mt-2' + this.props.color(5)} onClick={this.props.click}>05</span>
            <span className="mx-3 outvar"></span>
            <span id="6,1,12,7,5" className={'p-3 mt-2' + this.props.color(6)} onClick={this.props.click}>06</span>
            <span className="mx-5 outvar"></span>
            <span id="7,0,13,0,6" className={'p-3 mt-2' + this.props.color(7)} onClick={this.props.click}>07</span>


          </div>

        </div>
        <div className="row my-5">
          {/* third */}
          <div className="col">
            <span id="8,2,14,9,0" className={'p-3 mt-2' + this.props.color(8)} onClick={this.props.click}>08</span>
            <span className="mx-5 outvar"></span>
            <span id="9,3,15,10,8" className={'p-3 mt-2' + this.props.color(9)} onClick={this.props.click}>09</span>
            <span className="mx-3 outvar"></span>
            <span id="10,4,16,11,9" className={'p-3 mt-2' + this.props.color(10)} onClick={this.props.click}>10</span>
            <span className="mx-2 outvar"></span>
            <span id="11,5,17,12,10" className={'p-3 mt-2' + this.props.color(11)} onClick={this.props.click}>11</span>
            <span className="mx-3 outvar"></span>
            <span id="12,6,18,13,11" className={'p-3 mt-2' + this.props.color(12)} onClick={this.props.click}>12</span>
            <span className="mx-5 outvar"></span>
            <span id="13,7,19,0,12" className={'p-3 mt-2' + this.props.color(13)} onClick={this.props.click}>13</span>

          </div>
        </div>
        <div className="row my-5">
          {/* four */}
          <div className="col">
            <span id="14,8,0,15,0" className={'p-3 mt-2' + this.props.color(14)} onClick={this.props.click}>14</span>
            <span className="mx-5 outvar"></span>
            <span id="15,9,20,16,14" className={'p-3 mt-2' + this.props.color(15)} onClick={this.props.click}>15</span>
            <span className="mx-3 outvar"></span>
            <span id="16,10,21,17,15" className={'p-3 mt-2' + this.props.color(16)} onClick={this.props.click}>16</span>
            <span className="mx-2 outvar"></span>
            <span id="17,11,22,18,16" className={'p-3 mt-2' + this.props.color(17)} onClick={this.props.click}>17</span>
            <span className="mx-3 outvar"></span>
            <span id="18,12,23,19,17" className={'p-3 mt-2' + this.props.color(18)} onClick={this.props.click}>18</span>
            <span className="mx-5 outvar"></span>
            <span id="19,13,0,0,18" className={'p-3 mt-2' + this.props.color(19)} onClick={this.props.click}>19</span>

          </div>
        </div>
        <div className="row my-5">

          <div className="col">
          </div>
        </div>

        <div className="row my-5">
          {/* five */}
          <div className="col">
            <span id="14,8,0,15,0" className={'p-3 mt-2'} ></span>
            <span className="mx-5 outvar"></span>
            <span id="20,15,0,21,0" className={'p-3 mt-2' + this.props.color(20)} onClick={this.props.click}>20</span>
            <span className="mx-3 outvar"></span>
            <span id="21,16,0,22,20" className={'p-3 mt-2' + this.props.color(21)} onClick={this.props.click}>21</span>
            <span className="mx-2 outvar"></span>
            <span id="22,17,0,23,21" className={'p-3 mt-2' + this.props.color(22)} onClick={this.props.click}>22</span>
            <span className="mx-3 outvar"></span>
            <span id="23,18,0,0,22" className={'p-3 mt-2' + this.props.color(23)} onClick={this.props.click}>23</span>
            <span className="mx-5 outvar"></span>
            <span id="19,13,0,0,18" className={'p-3 mt-2'} ></span>

          </div>
        </div>



      </div>


    )


  }



}
export default Board;