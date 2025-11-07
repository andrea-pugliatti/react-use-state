export default function Button({ id, title, active, handleClick }) {
	console.log(handleClick);
	return (
		<li className="nav-item">
			<button
				onClick={handleClick}
				type="button"
				className={`nav-link ${active === id ? "active" : ""} me-1`}
			>
				{title}
			</button>
		</li>
	);
}
