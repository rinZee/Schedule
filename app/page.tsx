import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Make and Share
        <br />
        <span className="orange_gradient text-center">
          A schedule to keep your goals on track
        </span>
      </h1>

      <p className="desc text-center">
        Schedule is an world of people like you who have difficulty staying on
        track of your goals
      </p>
    </section>
  );
}
