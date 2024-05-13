const BENEFITS = [
  { text: "Start your day focused and inspired." },
  { text: "Gain practical tools for stress management and decision-making." },
  {
    text: "Join a community of like-minded individuals seeking personal growth.",
  },
  { text: "Tailored ..." },
  { text: "Configurable language" },
];
const BenefitsItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <svg
        className="w-6 h-6 text-green-500 mr-2 mt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      {text}
    </li>
  );
};

export const BenefitsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Subscribe to Our Daily Stoic Newsletter?
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-lg text-gray-600">
          {BENEFITS.map(({ text }) => (
            <BenefitsItem
              key={text}
              text={text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
