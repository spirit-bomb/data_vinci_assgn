const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchCampaigns() {
    try {
        const res = await fetch(`${API_BASE}/campaigns`, { cache: "no-store" });

        if (!res.ok) {
            console.error("API error:", res.statusText);
            return [];
        }
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.error("Fetch error:", err);
        return [];
    }
}


