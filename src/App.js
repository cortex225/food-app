import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import PreviewCard from "./components/PreviewCard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <PreviewCard imageUrl="/img/car-rental-full.c58b37da333d73238fdd.webp" />

      <Food />
      <Category />
    </div>
  );
}

export default App;
