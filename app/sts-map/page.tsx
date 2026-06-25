import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HoT / STS Historiographical Landscape | Ling Ding",
  description:
    "Interactive HoT / STS historiographical landscape map by Ling Ding.",
};

export default function StsMapPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-white">
      <iframe
        className="h-full w-full border-0"
        src="/sts-map/map.html"
        title="HoT / STS Historiographical Landscape"
      />
    </main>
  );
}
