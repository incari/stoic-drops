import { useTranslations } from "next-intl";
import Button from "./Button";

export const CallToAction = () => {
  const t = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-12 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("call_to_action.title")}</h2>
        <p className="mb-6">{t("call_to_action.description")}</p>
        <Button
          type="button"
          onClick={scrollToTop}
        >
          {t("call_to_action.subscribe_now")}
        </Button>
      </div>
    </div>
  );
};
