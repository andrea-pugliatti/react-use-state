import { useState } from "react";
import languages from "../assets/languages";
import Card from "./Card";

export default function Main({ data }) {
	const [active, setActive] = useState(1);

	const handleClick = (id) => {
		console.log(id);
		setActive(id);
	};

	return (
		<div className="bg-body p-3">
			<div className="container">
				<ul className="nav nav-pills m-5">
					{data.map((language) => (
						<li key={language.id} className="nav-item">
							<button
								onClick={() => handleClick(language.id)}
								type="button"
								className={`nav-link ${active === language.id ? "active" : ""} me-1`}
							>
								{language.title}
							</button>
						</li>
					))}
				</ul>
				<Card
					title={languages.at(active - 1).title}
					description={languages.at(active - 1).description}
				/>
			</div>
		</div>
	);
}
