"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setMessage("Login Success");
      router.push(`/home?username=${username}&password=${password}`);
    } else {
      setMessage("Login Failed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // TODO: เก็บค่า username
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // TODO: เก็บค่า password
        />

        <button type="submit">Login</button>

        {/* TODO: แสดง message (success/failed) */}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
