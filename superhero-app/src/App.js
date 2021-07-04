import './App.css';
import Potato from './Potato';

function Hello() {
  return ( // 컴포넌트는 html을 반환하는 함수이다
    <div>
      <h1>hello hero</h1>
      <Potato/>
    </div>
  );
}

export default Hello;
