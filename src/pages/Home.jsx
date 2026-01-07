import BestDeals from "../components/BestDeals";
import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import CategoriesBar from "../components/categoriesBar";
import CategoriesSection from "../components/CategoriesSection";
import OfferDeals from "../components/OfferDeals";
import TopDeals from "../components/TopDeals";

const Home = () => {
    return (
        <div className="flex flex-col gap-6">
            <CategoriesBar />
            <Carousel />
            <CategoriesSection />
            <BestDeals />
            <OfferDeals />
            <TopDeals />
            <BestSellers />
        </div>
    );
}

export default Home;