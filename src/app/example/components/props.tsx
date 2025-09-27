function Greeting(props: {name: string}) {
	return <h1>Hello {props.name}</h1>;
}

export function PropsSection() {
	return (
		<div>
			<Greeting name="Ant" />
			<Greeting name="Bird" />
		</div>
	);
}