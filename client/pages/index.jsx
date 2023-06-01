import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";
import { cards, projectsCards, testimonyData } from "@/assets/data";
import React from "react";
import Slides from "@/components/Slides/Slides";
import SingleCard from "@/components/HomeComponents/SingleCard";
import Features from "@/components/HomeComponents/Features";
import Marketplace from "@/components/HomeComponents/Marketplace";
import Business from "@/components/HomeComponents/Business";
import Testimony from "@/components/HomeComponents/Testimony";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";

const Home = () => {
  return (
    <div className="">
      <Layout>
        <Hero />
        <TrustedBy />
        <Slides rowId="1" distance={500} text="Popular professional services">
          {cards.map((item, i) => (
            <SingleCard key={i} item={item} />
          ))}
        </Slides>
        <Features />
        <Marketplace />
        <Business />
        <Slides rowId="2" distance={1200}>
          {testimonyData.map((item, i) => (
            <Testimony item={item} key={i} />
          ))}
        </Slides>
        <Slides
          rowId="3"
          distance={500}
          text="Get inspired with projects made by our freelancers"
        >
          {projectsCards.map((item, i) => (
            <Projects item={item} key={i} />
          ))}
        </Slides>
      </Layout>
    </div>
  );
};

export default Home;
