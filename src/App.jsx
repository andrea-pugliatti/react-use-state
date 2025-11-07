import languages from "./assets/languages.js";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<>
			<Header />
			<Main data={languages} />
		</>
	);
}

export default App;
