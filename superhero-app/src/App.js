import './App.css';
import React from "react";
import axios from "axios";
// import propTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading:true,
    movies : []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    }, 6000)
    this.getMovies();
  }


  render(h) {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loading...' : 'we are ready'}</div>
  }
}

export default App;
