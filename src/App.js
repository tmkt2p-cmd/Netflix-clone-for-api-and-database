import Notification from './components/Notification';
import Search from './components/Search';
import Navbar from './components/navbar';
import MainPoster from './components/Main poster';
import Movies from './components/movie';
import TV from './components/Tv shows';
import Bottom from './components/Bottom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
          <BrowserRouter>
   

      <Routes>

           <Route path="/" element={<>
                                    <Navbar />
                                    <MainPoster />

                                    <Movies title="Popular on Netflix" />
                                    <TV />
                                    <Movies title="Popular on Netflix" />

                                     <Bottom />
                                     </>
                                  } />

           <Route path="/SignUp" element={<SignUp />}   />
           <Route path="/SignIn" element={<SignIn />}   />
            <Route path="/Search" element={<Search />} />
            <Route path="/Notification" element={<Notification/>} />

        
      </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
