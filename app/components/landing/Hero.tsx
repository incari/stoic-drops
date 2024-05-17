"use client";
import { eventNames } from "process";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("submiting");
    if (validateEmail(email)) {
      setError("");

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Subscription successful!");
      } else {
        console.error("Failed to subscribe");
      }
    }
  };

  const handleChange = (value: string) => {
    setEmail(value);
    setError("");
  };

  const handleGetContacts = async () => {
    event?.preventDefault();
    const response = await fetch("/api/subscribe");

    console.log(response.json());
  };
  return (
    <section className="w-full max-w-screen-lg m-auto">
      <div className="text-center py-10 px-4 flex flex-col">
        <div className="py-10">
          <h1 className="py-3 text-6xl font-bold">{t("hero.title")}</h1>
          <p className="text-lg">{t("hero.subtitle")}</p>
        </div>

        <div className="max-w-md w-full p-2 m-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full pb-3 color-black font-bold"
          >
            <input
              id="email"
              className="hover:shadow-input p-4 border-4 border-black"
              placeholder="maurelius@meditations.rome"
              type="email"
              onChange={(e) => handleChange(e.target.value)}
              value={email}
              required
            />
            <div className="text-left my-2 text-sm text-red-600">
              &nbsp;{error}
            </div>

            <button
              type="submit"
              className="p-5 border-4 border-black shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
            >
              {t("hero.subscribe_now")}
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t("hero.join_community")}
          </p>
        </div>
      </div>
    </section>
  );
};
