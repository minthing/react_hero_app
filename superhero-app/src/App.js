import './App.css';
import React from "react";
import axios from "axios";
import Movie from "./Movie";
// component 가 state 를 가지고 있지 않을 경우 class 로 제작할 필요가 xxx
class App extends React.Component{
  state = {
    isLoading:true,
    movies : []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies)
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false})
    // }, 6000)
    this.getMovies();
  }


  render(h) {
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? 'Loading...' : movies.map(movie => {
      return <Movie id={movie.id}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image} />
          })}</div>
  }
}

export default App;
