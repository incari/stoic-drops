import React, { useState } from "react";
import { MdTranslate } from "react-icons/md";

const top10Languages = [
  { label: "English", code: "en" },
  { label: "Spanish", code: "es" },
  { label: "Chinese", code: "zh" },
  { label: "Hindi", code: "hi" },
  { label: "Arabic", code: "ar" },
  { label: "Portuguese", code: "pt" },
  { label: "Bengali", code: "bn" },
  { label: "Russian", code: "ru" },
  { label: "Japanese", code: "ja" },
  { label: "Punjabi", code: "pa" },
];

const other30Languages = [
  { label: "French", code: "fr" },
  { label: "German", code: "de" },
  { label: "Javanese", code: "jv" },
  { label: "Korean", code: "ko" },
  { label: "Telugu", code: "te" },
  { label: "Tamil", code: "ta" },
  { label: "Vietnamese", code: "vi" },
  { label: "Italian", code: "it" },
  { label: "Turkish", code: "tr" },
  { label: "Urdu", code: "ur" },
  // ... add the remaining languages
];

export const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    top10Languages[0].code
  ); // Default to the first language
  const [searchQuery, setSearchQuery] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== "other") {
      setSelectedLanguage(value);
      setIsOtherSelected(false);
    } else {
      setIsOtherSelected(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setSearchQuery("");
    setIsOtherSelected(false);
  };

  const filteredLanguages = other30Languages.filter((language) =>
    language.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedLanguageLabel =
    top10Languages.find((language) => language.code === selectedLanguage)
      ?.label || "Select Language";

  return (
    <div className="relative ml-4">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <MdTranslate className="mr-2 text-gray-800" />

        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className=""
        >
          <option
            value=""
            disabled
          >
            {selectedLanguageLabel}
          </option>
          {top10Languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
            >
              {language.label}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>
      {isOtherSelected && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
          <div className="p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search language..."
              className="w-full border border-gray-300 rounded-md px-3 py-1 mb-2"
            />
            <ul className="max-h-40 overflow-y-auto">
              {filteredLanguages.map((language) => (
                <li
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className="px-3 py-1 cursor-pointer hover:bg-gray-100"
                >
                  {language.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
