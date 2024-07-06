import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Calculator from './components/calculator';

function App() {
  return (
    <>
   <NavBar/>
   <Footer/>
   <Login/>
  <Signup/>
  <Calculator/>
   </>
  );
}

export default App;
