import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";
import i18nServer from "~/lib/i18n.server";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: { request: Request }) {
  const language = await i18nServer.getLocale(request);
  return { language };
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { language } = useLoaderData<typeof loader>();
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className="flex gap-5">
        <button
          className={`${language === "en_US" ? "text-white" : "text-gray-400"}`}
          onClick={() => handleChangeLanguage("en_US")}
        >
          EN
        </button>
        <button
          className={`${language === "vi_VN" ? "text-white" : "text-gray-400"}`}
          onClick={() => handleChangeLanguage("vi_VN")}
        >
          VI
        </button>
      </div>
      <h1>{t("title")}</h1>
      <p>Description</p>
    </div>
  );
}
