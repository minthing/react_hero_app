import './App.css';
import React from "react";
// import propTypes from 'prop-types';

class App extends React.Component{
  // function이 아니기 때문에 return 안 씀. 대신 render 사용
  // 자동적으로 class를 실행함
  // class는 state를 가지고 있다 -> object임
  // https://reactjs.org/docs/react-component.html

  state = {
    count : 0
  }

  add = () => {
    console.log("add")
  }
  minus = () => {
    console.log("minus")
  }
  render(h) {
    // vue의 data 같은데...
    // this.add() : 즉시실행
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </div>
  }
}

export default App;
