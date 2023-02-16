import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Images from "../images/Images";
const Home = () => {
  return (
    <main>
      <Header ColorFill={"white"} colors="white" />
      <section className={"section flex_c"} id={"hero"}>
        <div>
          <h2>
            We help you grow your business{" "}
            <b>
              faster <img src={Images.BorderImg} alt="borderimg" />
            </b>
          </h2>
          <p>
            Ehya is the Instagram analytics platform teams use to stay focused
            on the goals, track engagement for report your business .
          </p>
          <span className="flex_cr">
            <Link to={"/how"} className="linkButton Bgwhite">
              See how it works
            </Link>
            <Link to={"/how"} className="white">
              Get a free demo →{" "}
            </Link>
          </span>
        </div>
        <img src={Images.HeroImg} alt={"heroImg"} />
      </section>
      <section className="section" id="acad">
        <div class="flex_r affiliates wow animate__animated animate__slideInUp">
          <img src="/assets/img/ibm.svg" alt="" />
          <img src="/assets/img/microsoft.svg" alt="" />
          <img src="/assets/img/java.svg" alt="" />
          <img src="/assets/img/python.svg" alt="" />
          <img src="/assets/img/google.svg" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
