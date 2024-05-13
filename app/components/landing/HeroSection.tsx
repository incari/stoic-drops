import { useState } from "react";

//const backgroundImage = "images/background2.webp";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    // Add your subscription logic here
  };

  return (
    <div className="hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-black">
      ,
      <h1 className="text-4xl font-bold">
        Start Each Day with Timeless Wisdom
      </h1>
      <p className="mt-2 text-xl">
        Discover daily Stoic insights and actionable advice to transform your
        life.
      </p>
      <div className="mt-4 flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300"
        >
          Subscribe Now — It's Free
        </button>
      </div>
    </div>
  );
};
