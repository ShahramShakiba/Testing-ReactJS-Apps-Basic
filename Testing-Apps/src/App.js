import Greeting from './components/Greeting';
import Async from './components/Async';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Greeting />

      <Async />
    </div>
  );
}
