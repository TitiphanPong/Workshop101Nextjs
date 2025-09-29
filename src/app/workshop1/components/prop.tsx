function Greeting(props: {name: string , age : number}) {
	return <h1>Hello {props.name}, you are {props.age} years old.</h1>;
}

export function PropsSection() {
	return (
		<div>
			<Greeting name="Ant" age={20} />
            <Greeting name="Bird" age={10} />
		</div>
	);
}

