"use client";
import { useState } from "react";

export default function Table({ campaigns }) {
    const [filter, setFilter] = useState("All");

    const filtered = campaigns.filter(
        (c) => filter === "All" || c.status === filter
    );

    return (
        <div className="space-y-4">
            <select
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
            >
                <option value="All" className="text-black">All</option>
                <option value="Active" className="text-black">Active</option>
                <option value="Paused" className="text-black">Paused</option>
            </select>

            <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
                <thead>
                <tr className="bg-gray-900">
                    <th className="p-2 text-left">Campaign Name</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-right">Clicks</th>
                    <th className="p-2 text-right">Cost ($)</th>
                    <th className="p-2 text-right">Impressions</th>
                </tr>
                </thead>
                <tbody>
                {filtered.map((c) => (
                    <tr key={c.id} className="border-t">
                        <td className="p-2 text-black">{c.name}</td>
                        <td className="p-2 text-black">{c.status}</td>
                        <td className="p-2 text-right text-black">{c.clicks}</td>
                        <td className="p-2 text-right text-black">${c.cost.toFixed(2)}</td>
                        <td className="p-2 text-right text-black">{c.impressions}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
