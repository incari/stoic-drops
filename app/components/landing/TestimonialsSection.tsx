import { useTranslations } from "next-intl";

export const TestimonialsSection = () => {
  const t = useTranslations();

  const TESTIMONIALS = [
    {
      id: 1,
      quote: t("testimonials.testimonial1.quote"),
      name: t("testimonials.testimonial1.name"),
      title: t("testimonials.testimonial1.title"),
    },
    {
      id: 2,
      quote: t("testimonials.testimonial2.quote"),
      name: t("testimonials.testimonial2.name"),
      title: t("testimonials.testimonial2.title"),
    },
    {
      id: 3,
      quote: t("testimonials.testimonial3.quote"),
      name: t("testimonials.testimonial3.name"),
      title: t("testimonials.testimonial3.title"),
    },
    {
      id: 4,
      quote: t("testimonials.testimonial4.quote"),
      name: t("testimonials.testimonial4.name"),
      title: t("testimonials.testimonial4.title"),
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t("testimonials.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center p-4 shadow-md rounded-lg"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="text-gray-900 font-semibold mt-4">
                {testimonial.name}
              </p>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
