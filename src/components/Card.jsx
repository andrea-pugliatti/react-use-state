export default function Card({ title, description }) {
	return (
		<div className="card p-4 m-5">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
