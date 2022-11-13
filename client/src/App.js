import Home from "./pages/home/Home";
import About from "./pages/about/About"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
