import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold">
            {t("footer.about_us_title")}
          </h2>
          <p className="mt-4 text-gray-400">
            {t("footer.about_us_description")}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {t("footer.quick_links_title")}
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                {t("footer.quick_links.item1")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                {t("footer.quick_links.item2")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                {t("footer.quick_links.item3")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {t("footer.follow_us_title")}
          </h2>
          <div className="mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              {t("footer.social_media.facebook")}
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              {t("footer.social_media.twitter")}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};
