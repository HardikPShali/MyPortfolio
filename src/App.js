import Header from './components/header';
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume';
import Works from './components/works';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id='main' className="main-2">
        <Home />
        <About />
        <Resume />
        <Works />
      </main>
    </div>
  );
}

export default App;
