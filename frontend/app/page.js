import Table from "@/components/table";
import { fetchCampaigns } from "@/components/api";

export default async function Page() {
  const campaigns = await fetchCampaigns();
  return (
      <main className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Campaign Analytics Dashboard</h1>
        <Table campaigns={campaigns} />
      </main>
  );
}