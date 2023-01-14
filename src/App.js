import logo from './logo.svg';
import './App.css';
import   Navigation   from './components/Nav/index';
import  Footer  from './components/Footer/index';
import  Projects  from './components/Projects/index';
import Banner from './components/Banner/index';
import Skills from './components/Skills/index';
import Resume from './components/Resume/index';
import Contact from './components/Contact/index';
 
function App() {
  return (
    <>
    <div className="App">
      <Navigation />
      <main>
      <Banner/>
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      </main>
    </div>
    </>
  );
}

export default App;
