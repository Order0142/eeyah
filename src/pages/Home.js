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
            on the goals, track engagements for report your business .
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
      <section className="section flex_c" id="acad">
        <div class="flex_r affiliates wow animate__animated animate__slideInUp">
          <img src={Images.Slack} alt="" />
          <img src={Images.Netflix} alt="" />
          <img src={Images.Google} alt="" />
          <img src={Images.Airbnb} alt="" />
          <img src={Images.Uber} alt="" />
        </div>
        <div className="flex_cr">
          <img src={Images.Iphone12} alt={"iphone"} />
          <span>
            <h3 className="h3Color">Measure Impressions and Reach Post</h3>
            <p>
              Graphs displaying your performance for metrics like follower
              evolution, average engagement rate per post and reach and
              impressions to give you the insights.
            </p>
            <Link to={"/how"} className="blue">
              Learn about graphs →{" "}
            </Link>
          </span>
        </div>
      </section>
      <section className="section" id="acad">
        <div>
          <h3>Schedule Your Post Whenever You Want</h3>
          <p>Publish your content automatically to ensure that your content 
            reaches the right people. Built-in features such as</p>
          <ul>
          <li>
          <img src={Images.Tick} alt="" />
          <p>Best time to Post</p>
          </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
