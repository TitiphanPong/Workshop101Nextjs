"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      // TODO : ถ้า login สำเร็จ
      // router.push(`/home?user=${username}`);
    } else {
      // TODO : ถ้า login ไม่สำเร็จ
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <form
        // TODO : เพิ่ม event สำหรับ onSubmit
        onSubmit={loginSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "250px",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username} // ค่า Username ที่เก็บใน state
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password} // ค่า Password ที่เก็บใน state
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}
