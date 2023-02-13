import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Images from "../images/Images";
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
            <span>
              <Link to={"/how"} className="linkBtn">
                See how it works
              </Link>
              <Link to={"/how"} className="">
                Get a free demo →{" "}
              </Link>
            </span>
          </div>
          <img src={Images.HeroImg} alt={'heroImg'} />
        </section>
      </main>
    </>
  );
};

export default Home;
