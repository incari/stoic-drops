import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("call_to_action.title")}</h2>
        <p className="mb-6">{t("call_to_action.description")}</p>
        <button
          type="button"
          className="p-5 border-4 border-black shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
        >
          {t("call_to_action.subscribe_now")}
        </button>
      </div>
    </div>
  );
};
