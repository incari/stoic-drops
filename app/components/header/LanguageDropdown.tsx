import React, { ChangeEvent } from "react";
import { top10Languages } from "../../constants/languages";

type LanguageDropdownProps = {
  selectedLanguage: string;
  onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  selectedLanguage,
  onSelectChange,
}) => {
  return (
    <select
      value={selectedLanguage}
      onChange={onSelectChange}
      className="border-none outline-none bg-transparent"
    >
      {top10Languages.map((language) => (
        <option
          key={language.code}
          value={language.code}
        >
          {language.label}
        </option>
      ))}
      <option value="other">...</option>
    </select>
  );
};

export { LanguageDropdown };
