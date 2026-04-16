import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t } = useTranslation("translation");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>Description</p>
    </div>
  );
}
