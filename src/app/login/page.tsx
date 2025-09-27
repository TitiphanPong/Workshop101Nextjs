"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (username === "admin" && password === "1234") {
      alert("✅ Login สำเร็จ");
			router.push(
				`/home?username=${username}&password=${password}`
			);
		} else {
			alert("❌ Username หรือ Password ไม่ถูกต้อง");
		}
	};

	return (
		<div style={{textAlign: "center"}}>
			<h1>Login Page</h1>

			<form onSubmit={handleSubmit}>
				<input
					placeholder="Username"
					value={username}
					onChange={(e) =>
						setUsername(e.target.value)
					}
				/>
				<input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) =>
						setPassword(e.target.value)
					}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
