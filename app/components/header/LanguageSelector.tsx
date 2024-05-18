import React, { useState, useEffect, useTransition, ChangeEvent } from "react";
import { MdTranslate } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LanguageDropdown } from "./LanguageDropdown";
import { OtherLanguageInput } from "./OtherLanguageInput";
import { top10Languages } from "../../constants/languages";

const LanguageSelector: React.FC = () => {
  const t = useTranslations();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    top10Languages[0].code
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
    setSelectedLanguage(locale);
  }, [locale]);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    if (nextLocale === "other") {
      setIsOtherSelected(true);
    } else {
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
    }
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOtherSelected(false);
    startTransition(() => {
      router.replace(`/${language}`);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative ml-4">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <MdTranslate className="mr-2 text-gray-800" />
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          onSelectChange={onSelectChange}
        />
      </div>
      {isOtherSelected && (
        <OtherLanguageInput
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onLanguageSelect={handleLanguageChange}
        />
      )}
    </div>
  );
};

export { LanguageSelector };
