"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    const { signOut } = await import("next-auth/react");
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Bishopric Dashboard</h1>
      <p>Welcome! This area is completely secured.</p>
      
      <div style={{ marginTop: "20px", padding: "20px", border: "1px dashed #666" }}>
        <h3>Sacrament Planner Admin Tools</h3>
        <p>Here you can manage speakers, hymns, and prayers.</p>
      </div>

      <button 
        onClick={handleLogout} 
        style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Sign Out
      </button>
    </div>
  );
}
