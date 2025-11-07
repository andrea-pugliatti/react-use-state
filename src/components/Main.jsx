import { useState } from "react";
import languages from "../assets/languages";
import Button from "./Button";
import Card from "./Card";

export default function Main({ data }) {
	const [active, setActive] = useState(0);

	const handleClick = (id) => {
		if (id === active) {
			setActive(0);
		} else {
			setActive(id);
		}
	};

	return (
		<div className="bg-body p-3">
			<div className="container">
				<ul className="nav nav-pills m-5">
					{data.map((language) => (
						<Button
							key={language.id}
							id={language.id}
							title={language.title}
							handleClick={() => handleClick(language.id)}
							active={active}
						/>
					))}
				</ul>
				{active > 0 ? (
					<Card
						title={languages.at(active - 1).title}
						description={languages.at(active - 1).description}
					/>
				) : (
					<Card
						title={"Nessun linguaggio selezionato"}
						description={
							"Clicca su uno dei bottoni per scoprire di più sui linguaggi di programmazione."
						}
					/>
				)}
			</div>
		</div>
	);
}
