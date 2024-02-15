import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/Topbar";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import TechStack from "./components/tech-stack/TechStack";

function App() {
	return (
		<div className="main">
			<section id="Hero" className="visible-section">
				<Topbar />
				<Navbar />
				<Hero />
			</section>
			{/* <section id="Parallax">
				<Parallax />
			</section> */}
			<section id="About" className="md:h-[100vh]">
				<About />
			</section>
			<section id="Portfolio" className="visible-section">
				<Portfolio />
			</section>
			<section id="gallery" className="visible-section">
				<Gallery />
			</section>
			{/* <section id="Tech-Stack">
				<TechStack />
			</section> */}
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
