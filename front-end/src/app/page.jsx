import Categories from "@/components/landing/Categories";
import ComingSoon from "@/components/landing/ComingSoon";
import Hero from "@/components/landing/Hero";
import Music from "@/components/landing/Music";
import Popular from "@/components/landing/Popular";
import Trending from "@/components/landing/Trending";

export default function Home() {
  return (
    <>
      <Hero/>
      <Trending/>
      <ComingSoon/>
      <Popular/>
      <Music/>
      <Categories/>
    </>
  );
}
