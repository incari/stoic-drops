import React, { useState, ChangeEvent, FormEvent } from "react";
import InputLabel from "./InputLabel";
import Button from "./Button";

interface FormData {
  name: string;
  age: number | undefined;
  email: string;
  language: string;
}

export const UserInfoForm = ({ onComplete }: { onComplete: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: undefined,
    email: "",
    language: "",
  });

  const disableButton = !Object.values(formData).some(
    (value) => value !== "" && value !== undefined
  );

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
    onComplete();
  };

  return (
    <section className="w-full max-w-screen-lg m-auto">
      <div className="py-10">
        <h3 className="py-3 text-4xl font-bold">Welcome to Stoic Drops!</h3>
        <p className="text-lg max-w-xl m-auto">
          We appreciate your subscription. Please provide us with some
          additional information to help us curate a better newsletter for you!
        </p>
      </div>
      <div className="max-w-md w-full p-2 m-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full pb-3 color-black font-bold"
        >
          <InputLabel
            label="Name"
            displayLabel
          />
          <input
            id="name"
            className="hover:shadow-input p-4 border-4 border-black mb-2 focus:shadow-input"
            placeholder="Name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("name", e.target.value)
            }
            value={formData.name}
            //required
          />

          <InputLabel
            label="Age"
            displayLabel
          />

          <input
            id="age"
            className="hover:shadow-input p-4 border-4 border-black mb-2 focus:shadow-input"
            placeholder="Age"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("age", e.target.value)
            }
            value={formData.age}
            //required
          />

          <InputLabel
            label="Language"
            displayLabel
          />

          <select
            id="language"
            className="hover:shadow-input p-4 border-4 border-black mb-2 focus:shadow-input"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleChange("language", e.target.value)
            }
            value={formData.language}
            //required
          >
            <option
              value=""
              disabled
            >
              Select Language
            </option>
            <option value="English">English</option>
            <option value="Latin">Latin</option>
            <option value="Greek">Greek</option>
          </select>

          <Button
            type="submit"
            className="mt-6"
            disable={disableButton}
          >
            Save
          </Button>
        </form>
      </div>
    </section>
  );
};
