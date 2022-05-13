import './App.less';
import TestAlias from '@feat/testAlias';

function App() {
  return (
    <div className="App">
      <ul>
        <li className="red">支持less显示红色</li>
      </ul>
      <TestAlias />
    </div>
  );
}

export default App;
