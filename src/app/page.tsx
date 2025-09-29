import Link from "next/link";

export default function HomePage() {
	return (
		<main style={styles.container}>
			<h1>Welcome to Next.js Workshop</h1>
			<div style={styles.buttonGroup}>
				<Link href="/workshop1" style={styles.button}>
					CoreConcept (Section 1)
				</Link>
				<Link href="/login" style={styles.button}>
					Login (Section 2)
				</Link>
			</div>
		</main>
	);
}

const styles: {[key: string]: React.CSSProperties} = {
	container: {
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "2rem",
	},
	buttonGroup: {
		display: "flex",
		gap: "1rem",
	},
	button: {
		display: "inline-block",
		padding: "0.75rem 1.5rem",
		backgroundColor: "#0070f3",
		color: "white",
		textDecoration: "none",
		borderRadius: "6px",
		fontSize: "1rem",
		fontWeight: "bold",
		textAlign: "center",
	},
};
