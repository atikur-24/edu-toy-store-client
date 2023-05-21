
const TopBanner = ({ children }) => {
    return (
        <section>
            <div className='relative'>
                <img src="https://img.freepik.com/premium-photo/colorful-wooden-toy-building-blocks_155165-168.jpg?w=740" className='w-full h-80 rounded-lg' alt="banner" />
                <div className='rounded-lg top-0 h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 10)]'>
                <h3 className='text-gray-300 tracking-wider text-[45px] absolute top-1/3 right-1/2 font-bold'> { children } </h3>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;