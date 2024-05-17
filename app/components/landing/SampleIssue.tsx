import { useTranslation } from "react-i18next";

export const SampleIssue = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("example.preview_title")}
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {t("example.quote_title")}
          </h3>
          <p className="mt-2 text-gray-600 italic">{t("example.quote")}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("example.insight_title")}
            </h4>
            <p className="text-gray-600">{t("example.insight")}</p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("example.advice_title")}
            </h4>
            <p className="text-gray-600">{t("example.advice")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
