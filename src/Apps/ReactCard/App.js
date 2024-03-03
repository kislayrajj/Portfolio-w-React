
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import MainContent from "./components/maincontent"
import ReactLogo from './images/logo192.png'

function App() {
  return (
    <div className='ReactCard m-auto mt-2  h-[600px] w-[350px] border-2 border-black relative bg-slate-900 rounded-md overflow-hidden'>
      <img src={ReactLogo} alt=""className='h-96  absolute top-44 right-[-140px] opacity-5' />        
    <Header />
 <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
