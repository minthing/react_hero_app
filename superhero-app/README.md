# Super Hero Wiki with nomad code ð¦¾

- ë¸ë§ë ì½ëë¥¼ ì°¸ê³ í´ì ë§ëë ìí¼íì´ë¡ ìí¤ ì±
- ì¬ì©í  api : https://superheroapi.com/index.html

##### 210702 (í )

- í¬í¸ ë³ê²½íë ë² : `pacakge.json` ê°ì `"start": "export PORT=8082 && react-scripts start",`

##### 210703 (ì¼)
- ì»´í¬ëí¸ ì¶ê° ê°ë¥ : https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Potato /> << ì´ì  ì¶ê° ê°ë¥í¨ */}
  </React.StrictMode>,
  document.getElementById('root')
);
```

- props : https://ko.reactjs.org/docs/components-and-props.html
- ëª¨ë  React ì»´í¬ëí¸ë ìì ì propsë¥¼ ë¤ë£° ë ë°ëì ìì í¨ìì²ë¼ ëìí´ì¼ í©ëë¤.

##### 211004 (ì)

* jsxë¥¼ íµí´ ì»´í¬ëí¸ì `props = property`ë¡ íìì ë°ì´í°ë¥¼ ëê²¨ì¤ ì ìë¤. -> objectë¡ ë¤ì´ê°

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
  return ( // ì»´í¬ëí¸ë htmlì ë°ííë í¨ìì´ë¤
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

##### 211005 (í)

* ëì  ë°ì´í° ì¶ê°íë ë°©ë²

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
  return ( // ì»´í¬ëí¸ë htmlì ë°ííë í¨ìì´ë¤
    <div>
      {heroList.map(hero => {return <Heros name={hero.name} />})}
    </div>
  );
}
```

### 211013(ì)
* `npm i prop-types` : ë³´ë¸ propì´ ì í¨íì§ íì¸

### 211017(ì¼)
* ` this.state.count` ì ê°ì ìì¼ë¡ mutate í´ì  ìë¨
* `setState`ë¥¼ ì¤íí  ëë§ë¤ reactë render í¨ìë¥¼ ì¬ì¤íí¨ ì°¸ê³ ìë£ : https://ko.reactjs.org/docs/faq-state.html

### 211018(ì)
* mounting : ì»´í¬ëí¸ ìì±
* update : ìë°ì´í¸
* unmounting : ì»´í¬ëí¸ ì£½ì ë