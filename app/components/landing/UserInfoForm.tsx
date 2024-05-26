import React, { useState, ChangeEvent, FormEvent } from "react";

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

  const [error, setError] = useState<string>("");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onComplete();
    // Add your form submission logic here
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
          <input
            id="name"
            className="hover:shadow-input p-4 border-4 border-black"
            placeholder="Name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("name", e.target.value)
            }
            value={formData.name}
            //required
          />
          <div className="text-left my-2 text-sm text-red-600">
            &nbsp;{error}
          </div>

          <input
            id="age"
            className="hover:shadow-input p-4 border-4 border-black"
            placeholder="Age"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("age", e.target.value)
            }
            value={formData.age}
            //required
          />
          <div className="text-left my-2 text-sm text-red-600">
            &nbsp;{error}
          </div>

          <select
            id="language"
            className="hover:shadow-input p-4 border-4 border-black"
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
          <div className="text-left my-2 text-sm text-red-600">
            &nbsp;{error}
          </div>

          <button
            type="submit"
            className="p-5 border-4 border-black shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};
