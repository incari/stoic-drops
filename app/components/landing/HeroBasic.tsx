import axios from "axios";
import { SignUp } from "./SignUp";

const HeroBasic = () => {
  // For testing porpoises
  /*   const handleClick = async () => {
    const {
      data: { notes },
    } = await axios.get("api/subscribe");
  }; */

  return (
    <section className="w-full max-w-screen-lg m-auto">
      {/*       <button
        className="bg-red-400 text-white p-2"
        onClick={handleClick}
      >
        testing
      </button> */}
      <div className="text-center py-10 px-4 flex flex-col relative">
        <SignUp />
      </div>
    </section>
  );
};

export { HeroBasic };
