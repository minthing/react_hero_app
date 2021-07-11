import './App.css';

function Hello({world}){
  console.log(world)
  return (
    <div>
      I, {world}!
    </div>
  )
}

const foodList = ['cake', 'sushi', 'bulgogi']

function App() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      <h1>hello World!</h1>
      <Hello world="dio" />
    </div>
  );
}

export default App;
