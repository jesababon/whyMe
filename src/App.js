import "./CMS.css";
import Header from "./header";
import Footer from "./footer";
import First from "./1page";
import Second from "./2page";
import Third from "./3rdpage";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={First} />
			<Route exact path="/Second" component={Second} />
			<Route exact path="/Third" component={Third} />
			<Footer />
		</div>
	);
}

export default App;
