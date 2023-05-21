import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Popular from "../Popular/Popular";
import ToysCategory from "../ToysCategory/ToysCategory";
import ToysGallery from "../ToysGallery/ToysGallery";

const Home = () => {
    return (
        <div>
            <Banner />
            <ToysGallery />
            <ToysCategory />
            <Popular />
            <Brands />
        </div>
    );
};

export default Home;