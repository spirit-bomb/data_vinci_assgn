const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchCampaigns() {
    const res = await fetch(`${API_BASE}/campaigns`, { cache: "no-store" });
    return res.json();
}

