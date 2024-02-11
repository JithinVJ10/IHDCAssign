import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { HOME, LOGIN, TEST } from './Route/RoutePath';
import Login from './Page/Login';
import Home from './Page/Home';
import PrivatePage from './Components/PrivatePage';
import CarouselDefault from './Page/CarouselDefault';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login/>} />
        <Route path={TEST} element={<CarouselDefault/>} />
        <Route element={<PrivatePage/>} >

          <Route path={HOME} element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

