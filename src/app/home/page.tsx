"use client";

import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const params = useSearchParams();
  const user = params.get("user") || "Guest";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {user}</h1>
    </div>
  );
}