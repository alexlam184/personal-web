import React from "react";
import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div>
      <section
        className="relative flex justify-center items-center min-h-screen z-10 max-h-full overflow-hidden -mb-1  "
        id="top"
        data-section="section1"
      >
        <div
          className="absolute h-full bottom-0 w-full bg-themeyellow z-0"
          id="bottom_gradient"
        ></div>
        <div
          className={`flex-col flex w-full justify-center items-start ml-52 z-[1]`}
        >
          <div className="bg-themeyellow p-5 text-2xl text-bold">
            {t("title")}
          </div>
          <div className="text-white text-7xl">{t("description")}</div>
        </div>
      </section>
    </div>
  );
}
