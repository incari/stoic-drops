// SignUp.tsx
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type SignUpProps = {
  onComplete: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ onComplete }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const t = useTranslations();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onComplete();

    /* if (validateEmail(email)) {
      setError("");
    } else {
      setError("Invalid email address");
    } */
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
          <input
            id="email"
            className="hover:shadow-input p-4 border-4 border-black"
            placeholder="maurelius@meditations.rome"
            type="email"
            onChange={(e) => handleChange(e.target.value)}
            value={email}
            // required
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
    </>
  );
};

export default SignUp;
