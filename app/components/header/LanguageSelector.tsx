import React, { useState, useEffect } from "react";
import { MdTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { other30Languages, top10Languages } from "../../constants/languages";

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language || top10Languages[0].code
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (language: string) => {
    if (language !== "other") {
      setSelectedLanguage(language);
      setIsOtherSelected(false);
    } else {
      setIsOtherSelected(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredLanguages = other30Languages.filter((language) =>
    language.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedLanguageLabel =
    top10Languages.find((language) => language.code === selectedLanguage)
      ?.label ||
    other30Languages.find((language) => language.code === selectedLanguage)
      ?.label ||
    t("select_language");

  return (
    <div className="relative ml-4">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <MdTranslate className="mr-2 text-gray-800" />
        <select
          value={isMounted ? selectedLanguage : ""}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border-none outline-none bg-transparent"
        >
          {!isMounted ? (
            <option>{selectedLanguageLabel}</option>
          ) : (
            <>
              {top10Languages.map((language) => (
                <option
                  key={language.code}
                  value={language.code}
                >
                  {language.label}
                </option>
              ))}
              <option value="other">{t("other")}</option>
            </>
          )}
        </select>
      </div>
      {isOtherSelected && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
          <div className="p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t("search_language")}
              className="w-full border border-gray-300 rounded-md px-3 py-1 mb-2"
            />
            <ul className="max-h-40 overflow-y-auto">
              {filteredLanguages.map((language) => (
                <li
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
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

export { LanguageSelector };
