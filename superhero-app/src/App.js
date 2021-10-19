import './App.css';
import React from "react";
// import propTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading:true,
    movies : []
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    }, 6000)
  }


  render(h) {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'we are ready'}</div>
  }
}

export default App;
