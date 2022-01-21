import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Layout } from './components/layout/Layout';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
        <Routes >
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home countries={countries} setCountries={setCountries}/>}/>
            <Route path='/country/:name' element={<Details/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
