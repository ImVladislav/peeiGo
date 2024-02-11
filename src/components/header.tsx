import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import React from "react";

export default function Head() {
  const t = useTranslations("Navigation");

  return (
    <header className="p-4">
      <div>
        <Link href="/">{t("home")}</Link>
        <LocalSwitcher />
      </div>
    </header>
  );
}
