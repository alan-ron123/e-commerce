import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Header1 from "./Header1";
function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <Header1 />
      <div className="d-flex m-0">
        <div className="card px-2">
          <br />
          <br />
          <h5>
            Leading Website Design Company in Chennai - About Us THE BEST
            WEBSITE DESIGN COMPANY IN CHENNAI, SEO COMPANY IN CHENNAI
          </h5>
          <br />
          WiseWebTek is a Multi National Company, Provides E-commerce
          Solutions.With our best software Technologies, we will help the
          Business community to reach their Goals faster.Having supported many
          companies and individuals to create their online solutions,we will
          continue to provide the best support and solutions to the global
          business community. WiseWebTek Provides the Best Digital Marketing
          Solutions. We also Provide Digital Marketing Training Services and we
          trained entrepreneurs,Students,many Professionals in the area of
          Digital Marketing We provide Responsive Web Design Services.All our
          web designs are unique designs. We have designed more than 1000+
          websites both in India as well as outsourced clients all over the
          world.Get your high quality website designed with the leading website
          design company in chennai
        </div>
        <div>
          {" "}
          <img
            id="img-size"
            src="https://webleodesign.com/wp-content/uploads/2020/05/Small-Business-Web-Development-1042x665-1-1024x654.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
