"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch('http://localhost:4000/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(`Backend says: ${data.status}`))
      .catch(() => setMessage("Could not reach the backend"));
  }, []);

  return (
    <main className="p-20">
      <h1>Bit</h1>
      <p>{message}</p>
    </main>
  );
}
