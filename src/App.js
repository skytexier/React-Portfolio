import logo from './logo.svg';
import './App.css';
import   Navigation   from './components/Nav/index';
import   About   from './components/About/index';
import  Footer  from './components/Footer/index';
import  Projects  from './components/Projects/index';
 
function App() {
  return (
    <>
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default App;