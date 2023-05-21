import img from "../../../assets/brands/cl2-copyright (1).jpg"
import img2 from "../../../assets/brands/cl3-copyright (1).jpg"
import img3 from "../../../assets/brands/cl4-copyright (1).jpg"
import img4 from "../../../assets/brands/cl5-copyright (1).jpg"

const Brands = () => {
    return (
        <section className="my-container">
              <p className="text-xl text-center text-[#003366] tracking-wide font-medium">Best Brands</p>
            <h2 className="text-center text-2xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#003366] my-5 lg:my-10">Discover the Finest Toy Brands</h2>
            <p className="text-center text-gray-500  mb-8">We appreciate your trust greatly. Meet our regular clients & partners who choose us as their kids’ products supplier, and whom we are happy to work with.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-10">
                <div>
                    <img src={img} alt="brand" />
                </div>
                <div>
                    <img src={img2} alt="brand" />
                </div>
                <div>
                    <img src={img3} alt="brand" />
                </div>
                <div>
                    <img src={img4} alt="brand" />
                </div>
            </div>
        </section>
    );
};

export default Brands;