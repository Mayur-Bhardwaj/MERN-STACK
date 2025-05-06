// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Button from './Components/Button';
import TextInput from './Components/TextInput/TextInput';
import TextInputForm from './Components/TextInputForm/TextInputForm';
import TextInputFormContainer from './Components/TextInputForm/TExtInputFormContainer';
import StartGame from "./Pages/StartGame";
import PlayGame from "./Pages/PlayGame";

function App(){

  return (
    <>
      <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<div>Home</div>} />
    </Routes>
    </>
  );
}

export default App
