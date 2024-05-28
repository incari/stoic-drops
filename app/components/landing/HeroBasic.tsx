import { SignUp } from "./SignUp";

const HeroBasic = () => {
  return (
    <section className="w-full max-w-screen-lg m-auto">
      <div className="text-center py-10 px-4 flex flex-col relative">
        <SignUp />
      </div>
    </section>
  );
};

export { HeroBasic };
