import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";

function App() {
	return (
		<div className="main">
			<section id="Hero" className="visible-section">
				<Topbar />
				<Navbar />
				<Hero />
			</section>
			<section id="About" className="md:h-[100vh]">
				<About />
			</section>
			<section id="Portfolio" className=" min-h-[100vh]">
				<Portfolio />
			</section>
			<section id="gallery">
				<Gallery />
			</section>
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
