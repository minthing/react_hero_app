import './App.css';

function Heros({name, img}){
  return (
    <div>
      <h2>hero name: {name}!</h2>
      <img src={img} alt={name} />
    </div>
  )
}

const heroList = [{
  name:"superman",
  img:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
},
{
  name:"batman",
  img:"https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
}]

// const friends = ["a", "b", "c"];

// friends.map(current => {
//   console.log(current);
//   return current + "✨";
// })

function App() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      {/* <Heros name="batman" list={[1,2,3,4,5]} /> */}
      {/* <Heros name="superman" />
      <Heros name="batman" />
      <Heros name="flash" />
      <Heros name="green lantern" /> */}

      {heroList.map(hero => {return <Heros name={hero.name} img={hero.img}/>})}
    </div>
  );
}

export default App;
