import Header from './components/header';
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume';
import Works from './components/works';
import MobileDesigns from './components/mobileDesigns';
import PortfolioPage from './components/portfolio-page';
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
      <MobileDesigns />
      {/* <PortfolioPage /> */}
    </div>
  );
}

export default App;
