# Super Hero Wiki with nomad code 🦾

- 노마드 코더를 참고해서 만드는 슈퍼히어로 위키 앱
- 사용할 api : https://superheroapi.com/index.html

##### 210702 (토)

- 포트 변경하는 법 : `pacakge.json` 가서 `"start": "export PORT=8082 && react-scripts start",`

##### 210703 (일)
- 컴포넌트 추가 가능 : https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Potato /> << 이제 추가 가능함 */}
  </React.StrictMode>,
  document.getElementById('root')
);
```

- props : https://ko.reactjs.org/docs/components-and-props.html
- 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.

##### 211004 (월)

* jsx를 통해 컴포넌트에 `props = property`로 하위에 데이터를 넘겨줄 수 있다. -> object로 들어감

```javascript
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
      <Heros name="batman" list={[1,2,3,4,5]} />
      <Heros name="superman" />
      <Heros name="batman" />
      <Heros name="flash" />
      <Heros name="green lantern" />
    </div>
  );
}

export default App;

```

##### 211005 (화)

* 동적 데이터 추가하는 방법

```javascript
const heroList = [{
  name:"superman",
  img:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
},
{
  name:"batman",
  img:"https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
}]

function App() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      {heroList.map(hero => {return <Heros name={hero.name} />})}
    </div>
  );
}
```

### 211013(수)
* `npm i prop-types` : 보낸 prop이 유효한지 확인

### 211017(일)
* ` this.state.count` 와 같은 식으로 mutate 해선 안됨
* `setState`를 실행할 때마다 react는 render 함수를 재실행함 참고자료 : https://ko.reactjs.org/docs/faq-state.html