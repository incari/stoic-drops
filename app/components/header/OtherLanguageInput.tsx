import React, { ChangeEvent } from "react";
import { other30Languages } from "../../constants/languages";

type OtherLanguageInputProps = {
  searchQuery: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLanguageSelect: (language: string) => void;
};

const OtherLanguageInput: React.FC<OtherLanguageInputProps> = ({
  searchQuery,
  onSearchChange,
  onLanguageSelect,
}) => {
  const filteredLanguages = other30Languages.filter((language) =>
    language.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
      <div className="p-2">
        <input
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search language..."
          className="w-full border border-gray-300 rounded-md px-3 py-1 mb-2"
        />
        <ul className="max-h-40 overflow-y-auto">
          {filteredLanguages.map((language) => (
            <li
              key={language.code}
              onClick={() => onLanguageSelect(language.code)}
              className="px-3 py-1 cursor-pointer hover:bg-gray-100"
            >
              {language.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { OtherLanguageInput };
