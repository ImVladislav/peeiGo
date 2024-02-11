import Head from "@/components/header";
import LocalSwitcher from "@/components/local-switcher";
import { useTranslations } from "next-intl";

// import Activity from "./activity/page";
// import Main from "./main/page";
// import Projects from "@/components/Main/Projects";
export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <LocalSwitcher />
      <Head />
      <p>{t("description")}</p>
    </div>
  );
}
