import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GamePage from "./components/GamePage";
import Select from './components/Select';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/game' element={<GamePage />} />
          <Route index element={<Select />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
