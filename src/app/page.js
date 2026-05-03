import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import NewLaunch from "@/components/NewLaunch";
import BestSellers from "@/components/BestSellers";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Banner />
      <Categories />
      <NewArrivals />
      <NewLaunch />
      <BestSellers />
      <PromoBanner />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
}
