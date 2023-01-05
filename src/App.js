import logo from './logo.svg';
import './App.css';
import  Navigation  from './components/Nav';
import  About  from './components/About';
import Footer from './components/Footer';
 
function App() {
  return (
    <>
    <div className="App">
      <Navigation />
      <About />
      <Footer />
    </div>
    </>
  );
}

export default App;
