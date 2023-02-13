import React from "react";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header ColorFill={"white"} colors="white" />
      <main>
        <section className={"section"} id={"hero"}>
          <div>
            <h2>
              We help you grow your business{" "}
              <span>
                <b>faster</b> <img src={""} alt={""} />
              </span>
            </h2>
            <p>
              Ehya is the Instagram analytics platform teams use to stay focused
              on the goals, track engagement for report your business .
            </p>
            <button>See how it works</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
