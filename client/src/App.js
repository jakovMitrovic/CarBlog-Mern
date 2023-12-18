import './App.css';
import Layout from './Layout';
import BlogPost from './components/BlogPost';
import {Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  




  return (
    <>

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/register'} element={<RegisterPage/>} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
