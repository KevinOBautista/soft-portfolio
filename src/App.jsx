import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/Topbar";

function App() {
	return (
		<div className="main">
			<section>
				<Topbar />
				<Navbar />
				<Hero />
			</section>
			<section>
				<Parallax />
			</section>
			<section>
				<Portfolio />
			</section>
			<section>Tech Stack</section>
			<section>
				<Contact />
			</section>
		</div>
	);
}

export default App;
