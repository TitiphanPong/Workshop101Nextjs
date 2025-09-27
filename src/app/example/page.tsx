import {ComponentsSection} from "./components/component";
import {PropsSection} from "./components/props";
import StateSection from "./components/state";

export default function Page() {
	return (
		<div>
			<div>
				<h1>--- Components section ---</h1>
				<ComponentsSection />
			</div>

			<div style={{marginTop: "100px"}}>
				<h1>--- Props section ---</h1>
				<PropsSection />
			</div>

			<div style={{marginTop: "100px"}}>
				<h1>--- State section ---</h1>
				<StateSection />
			</div>
		</div>
	);
}
