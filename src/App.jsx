import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import 'react';
import './scss/App.scss';
import Login from './jsx/Login.jsx';
import CreateAcc from './jsx/CreateAcc.jsx';
import Layout from './jsx/Layout.jsx';
import './jsx/Client.jsx';
import OddajRzeczy from './jsx/afterlogin/oddajrzeczy.jsx';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/createAcc" element={<CreateAcc/>}></Route>
          <Route path="/oddaj-rzeczy" element={<OddajRzeczy />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default App;
