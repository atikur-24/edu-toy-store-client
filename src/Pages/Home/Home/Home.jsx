import Banner from "../Banner/Banner";
import ToysCategory from "../ToysCategory/ToysCategory";
import ToysGallery from "../ToysGallery/ToysGallery";

const Home = () => {
    return (
        <div>
            <Banner />
            <ToysGallery />
            <ToysCategory />
        </div>
    );
};

export default Home;