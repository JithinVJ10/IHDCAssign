import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { HOME, LOGIN } from './Route/RoutePath';
import Login from './Page/Login';
import Home from './Page/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login/>} />
        <Route path={HOME} element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

