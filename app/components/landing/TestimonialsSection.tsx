const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "This newsletter has not only educated me on Stoicism but has also made it relevant to my everyday challenges.",
    position: "Product Manager",
  },
  {
    id: 2,
    name: "Jane Smith",
    quote:
      "I've noticed a significant improvement in how I handle work stress since I started reading the daily quotes.",
    position: "Entrepreneur",
  },
  {
    id: 3,
    name: "Alice Johnson",
    quote:
      "The daily insights have helped me remain calm and focused, even in the most hectic times.",
    position: "Freelance Writer",
  },
  {
    id: 4,
    name: "Michael Brown",
    quote:
      "Stoicism taught me how to separate what I can control from what I cannot, improving my overall happiness.",
    position: "Software Developer",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hear From Our Subscribers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center p-4 shadow-md rounded-lg"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold mt-4">
                {testimonial.name}
              </p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
