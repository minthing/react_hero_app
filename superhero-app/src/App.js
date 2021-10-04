import './App.css';

function Heros({name}){
  console.log(name);
  return (
    <div>
      I, Love {name}!
    </div>
  )
}

function App() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      <h1>hello World!</h1>
      {/* <Heros name="batman" list={[1,2,3,4,5]} /> */}
      <Heros name="superman" />
      <Heros name="batman" />
      <Heros name="flash" />
      <Heros name="green lantern" />
    </div>
  );
}

export default App;
