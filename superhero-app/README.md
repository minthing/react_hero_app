# Super Hero Wiki with nomad code 🦾

- 노마드 코더를 참고해서 만드는 슈퍼히어로 위키 앱
- 사용할 api : https://superheroapi.com/index.html

##### 210702 (토)

- 포트 변경하는 법 : `pacakge.json` 가서 `"start": "export PORT=8082 && react-scripts start",`

##### 210703 (일)
- 컴포넌트 추가 가능
```
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Potato /> << 이제 추가 가능함 : https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html */}
  </React.StrictMode>,
  document.getElementById('root')
);
```