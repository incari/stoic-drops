"use client";
import { FormEvent, useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setError("");
    } else {
      setError("Invalid email format");
    }
  };

  const handleChange = (value: string) => {
    setEmail(value);
    setError("");
  };
  return (
    <section className="w-full max-w-screen-lg m-auto">
      <div className="text-center py-10 px-4 flex flex-col">
        <div className="py-10">
          <h1 className="py-3 text-6xl">Start Each Day with Timeless Wisdom</h1>
          <p className="text-lg">
            Discover daily Stoic insights and actionable advice to transform
            your life.
          </p>
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
              Subscribe Now — It's Free
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Join our community and receive daily Stoic insights.
          </p>
        </div>
      </div>
    </section>
  );
};
