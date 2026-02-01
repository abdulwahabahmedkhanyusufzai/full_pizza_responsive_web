import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Popular from './components/Popular'
import Recipe from './components/Recipe'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'
import './App.css'

declare const ScrollReveal: any;

function App() {

  useEffect(() => {
    fetch("http://localhost:8000/api/menu")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    // SCROLL REVEAL ANIMATION
    try {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 300,
      })

      sr.reveal(`.home__data, .popular__container, .footer`)
      sr.reveal(`.home__pizza`, { delay: 1400, distance: '100px', origin: 'bottom', rotate: { z: -90 } })
      sr.reveal(`.home__board`, { delay: 700, distance: '100px', origin: 'right' })
      sr.reveal(`.home__ingredient`, { delay: 2000, interval: 100 })
      sr.reveal(`.about__data, .recipe__list, .contact__data`, { origin: 'right' })
      sr.reveal(`.about__img, .recipe__img, .contact__image`, { origin: 'left' })
      sr.reveal(`.product__card`, { interval: 100 })
    } catch (e) { console.warn("ScrollReveal not loaded", e) }
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Popular />
        <Recipe />
        <Products />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
