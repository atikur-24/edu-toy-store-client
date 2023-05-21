import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;