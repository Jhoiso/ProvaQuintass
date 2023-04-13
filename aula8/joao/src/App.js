import { Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './home';
import Pokemon from './user/Pokemon';
import User from './user/User';
import Users from './user/Users';
 
function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
      </Route>
      <Route path='/user'>
        <Route index element={<Users/>}/>
        <Route path=':userId' element={<User/>} />
      </Route>
      <Route path='/pokemon'>
        <Route path=':pokemonId' element={<Pokemon />} />
      </Route>
    </Routes>

  );
}

export default App;