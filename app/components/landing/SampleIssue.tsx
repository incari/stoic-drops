export const SampleIssue = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Preview a Sample Newsletter
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Today's Stoic Quote
          </h3>
          <p className="mt-2 text-gray-600 italic">
            "He who fears death will never do anything worth of a man who is
            alive." — Seneca
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">Insight</h4>
            <p className="text-gray-600">
              This quote from Seneca reminds us of the importance of living our
              lives to the fullest and not being held back by the fear of the
              inevitable. Each day is an opportunity to make meaningful
              contributions, face our fears, and grow beyond them.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Actionable Advice
            </h4>
            <p className="text-gray-600">
              Today, take a moment to reflect on what fears might be holding you
              back from achieving your goals. Identify one small step you can
              take to confront and overcome one of those fears.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
