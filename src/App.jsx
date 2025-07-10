import About from './components/about';
import Hero from './components/Hero'
import Nav from './components/Nav'
import Purpose from './components/purpose'
import Services from './components/services';
import Projects from './components/projects';
import Quote from './components/quote';
import Skills from './components/skills';
import Images from './components/images';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  let logoSrc = "https://creofyx.com/public/Instagram post - 3.png";
  return (
    <div className="bg-black text-white">
      <Nav />
      <Hero />
      <Purpose />
      <About />
      <Services />
      <Projects />
      <Quote />
      <Skills />
      <Images />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
