import Navbar from './components/navbar';
import MainPoster from './components/Main poster';
import Movies from './components/movie';
import TV from './components/Tv shows'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar />
      </div>
      <MainPoster />
      <Movies title="Popular on Netflix" />
      <TV />
    </div>
  );
}

export default App;
