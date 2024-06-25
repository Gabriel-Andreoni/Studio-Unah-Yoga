import About from './components/About';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import './page.module.css';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Products />
    </main>
  );
}
