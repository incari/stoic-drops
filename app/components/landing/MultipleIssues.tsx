import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
type IssueContent = {
  title: string;
  author: string;
  quote: string;
  insight: string;
  advice: string;
};

export const MultipleIssues = () => {
  const locale = useLocale();
  const t = useTranslations();

  const initialContent: IssueContent =
    {
      title: t("example.preview_title"),
      author: t("example.author"),
      quote: t("example.quote"),
      insight: t("example.insight"),
      advice: t("example.advice"),
    } || {};

  const [content, setContent] = useState([initialContent]);

  const handleAdd = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/chat-gpt", { lang: locale });

      const newContent = JSON.parse(res.data.output.content);
      setContent((content) => [newContent, ...content]);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <div className="flex flex-col bg-slate-100 ">
      <button
        className="
        my-6 m-auto p-5 border-4 border-black shadow-button 
        hover:shadow-button-hover hover:-translate-y-0.5"
        onClick={handleAdd}
      >
        Generate a new example
      </button>
      {content.map((issue, index) => (
        <SampleIssues
          key={index}
          content={issue}
          title={
            index + 1 === content.length
              ? t("example.preview_title")
              : `Generated issue nº:${index + 1} `
          }
        />
      ))}
    </div>
  );
};

const SampleIssues = ({
  content,
  title,
}: {
  content: IssueContent;
  title: string;
}) => {
  const t = useTranslations();

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {content.title}
          </h3>
          <p className="mt-2 text-gray-600 italic">
            {`${content.quote} - ${content.author}`}
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("example.insight_title")}
            </h4>
            <p className="text-gray-600"> {content.insight}</p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {t("example.advice_title")}
            </h4>
            <p className="text-gray-600">{content.advice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
