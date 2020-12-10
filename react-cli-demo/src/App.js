import logo from './logo.svg';
import './App.css';
import MyDemo from  './demo/index';
import Text from "./demo/text";
import LifeCycle from './demo/lifeCycle'
import MyFourThis from "./demo/myFourThis";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MyDemo />
          ----------------------------------------
          <Text />
          -------------------------------------
          <LifeCycle/>
          ------------------------------------
          <MyFourThis/>
      </header>
    </div>
  );
}

export default App;
