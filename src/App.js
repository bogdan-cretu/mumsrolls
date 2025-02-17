import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';
import Footers from './components/Footers';
import Header from './components/Header';
import Menu from './components/Menu';
import Preparation from './components/Preparation';
import StorySection from './components/StorySection';

export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};


function App() {
  return (
    <div className="App">
      <Header />
      <StorySection />
      <Menu />
      <Preparation />
      <Events />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
