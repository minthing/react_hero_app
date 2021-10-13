import './App.css';
import propTypes from 'prop-types';

function Heros({name, img, birthday}){
  return (
    <div>
      <h2>hero name: {name}!</h2>
      <h4>hero's birthday : {birthday}</h4>
      <img src={img} alt={name} />
    </div>
  )
}


// propTypes => 데이터 타입이 유효한지를 확인

Heros.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  birthday : propTypes.string.isRequired
};

//unique key 없으면 에러남
const heroList = [{
  birthday:"Fab 29th",
  id:1,
  name:"superman",
  img:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
},
{
  birthday:"March 30th",
  id:2,
  name:"batman",
  img:"https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
}]

// const friends = ["a", "b", "c"];

// friends.map(current => {
//   console.log(current);
//   return current + "✨";
// })

function renderHero(hero){
  console.log(hero);
  return <Heros key={hero.id} name={hero.name} img={hero.img} birthday={hero.birthday}/>
}

function App() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      {/* <Heros name="batman" list={[1,2,3,4,5]} /> */}
      {/* <Heros name="superman" />
      <Heros name="batman" />
      <Heros name="flash" />
      <Heros name="green lantern" /> */}
    {heroList.map(renderHero)}
    {/* {heroList.map(hero => {return <Heros name={hero.name} img={hero.img}/>})} */}
    </div>
  );
}

export default App;
