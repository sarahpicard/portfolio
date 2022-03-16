import logo from './logo.svg';
import './App.css';
import Greeting from './pages/Greeting';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Greeting />
    </div>
  );
}

export default App;
