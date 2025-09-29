import {PropsSection} from "../workshop1/components/prop";
import {ComponentsSection} from "../workshop1/components/component";

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
				{/* <StateSection /> // TODO : ทำการ Import Component ของ StateSection */}
			</div>
		</div>
	);
}
