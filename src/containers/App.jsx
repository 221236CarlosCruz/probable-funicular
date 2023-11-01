import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrazo from '../pages/Carrazo';

function App(){
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Carrazo/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
};

export default App;
