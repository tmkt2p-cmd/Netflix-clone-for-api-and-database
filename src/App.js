import Navbar from './components/navbar';
import MainPoster from './components/Main poster';
import Movies from './components/movie';
import TV from './components/Tv shows';
import Bottom from './components/Bottom';
import './App.css';

function App() {
  return (
    <div className="App">
   
      <Navbar />
      <MainPoster />

      <Movies title="Popular on Netflix" />
      <TV />
      <Movies title="Popular on Netflix" />

    <Bottom />

    </div>
  );
}

export default App;
