import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const ToysCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Engineering");

    useEffect( () => {
        fetch(`http://localhost:5000/toys/cat/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])

    // handle tap when user clicked
    const handleTabToggle = (tab_name) => {
        setActiveTab(tab_name)
    }

    return (
        <section className="my-container">
            <p className="text-xl text-center text-[#003366] tracking-wide font-medium">Toys By Category</p>
            <h2 className="text-center text-2xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#003366] my-5 lg:my-10">Choose Your Toy Category Exciting <br /> Options Await</h2>
            <p className="text-center text-gray-500 ">Discover a wide range of thrilling toy categories, offering endless possibilities for fun, imagination, and unforgettable adventures.</p>
            <div className='flex justify-center gap-10 my-5 lg:my-8'>
                <div onClick={ () => handleTabToggle("Engineering")} className={activeTab == "Engineering" ? "active-tab" : "default-tab"}>Engineering</div>
                <div onClick={ () => handleTabToggle("Medical")} className={activeTab == "Medical" ?  "active-tab" : "default-tab"}>Medical</div>
                <div onClick={ () => handleTabToggle("Math")} className={activeTab == "Math" ? "active-tab" : "default-tab"}>Math</div>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 mt-14 lg:mt-24 gap-8'>
                {
                    toys?.map(toy => <ToyCard key={toy._id} toy={toy} />)
                }
            </div>
        </section>
    );
};

export default ToysCategory;