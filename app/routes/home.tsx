import SDGDashboard from "~/dashboard/page";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "SDG Dashboard" },
  ];
}

export default function Home() {
  return <SDGDashboard />;
}
