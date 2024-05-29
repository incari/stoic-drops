import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import InputLabel from "./InputLabel";
import Button from "./Button";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const t = useTranslations();
  const language = useLocale();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Should be a valid email");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post("/api/subscribe", { email, language });

      setIsLoading(false);
      setSubscriptionSuccess(true);
      // Cleaning state after success
      setEmail("");
      setTimeout(() => {
        setSubscriptionSuccess(false);
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    }
  };

  const handleChange = (value: string) => {
    setEmail(value);
    setError("");
  };

  return (
    <>
      <div className="py-10 component">
        <h1 className="py-3 text-6xl font-bold">{t("hero.title")}</h1>
        <p className="text-lg">{t("hero.subtitle")}</p>
      </div>
      <div className="max-w-md w-full p-2 m-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full pb-3 color-black font-bold"
        >
          <InputLabel
            label="Your email"
            displayLabel={Boolean(email.length)}
          />
          <input
            id="email"
            className="hover:shadow-input focus:shadow-input p-4 border-4 border-black"
            placeholder="maurelius@meditations.rome"
            type="email"
            onChange={(e) => handleChange(e.target.value)}
            value={email}
            required
          />
          <div className="text-left my-2 text-sm text-red-600">
            &nbsp;{error}
          </div>
          <Button
            type="submit"
            disable={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 border-4 border-t-transparent border-black rounded-full inline-block"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              t("hero.subscribe_now")
            )}
          </Button>
        </form>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t("hero.join_community")}
        </p>
        <div
          className={`text-green-600 mt-4 ${
            subscriptionSuccess ? "opacity-100" : "opacity-0"
          }`}
        >
          {"Thank you for subscribing!"}
        </div>
      </div>
    </>
  );
};
export { SignUp };
