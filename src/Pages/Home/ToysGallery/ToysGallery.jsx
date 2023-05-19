const ToysGallery = () => {
    return (
        <section className="my-container">
            <p className="text-xl text-center text-[#003366] tracking-wide font-medium">Toys Gallery</p>
            <h2 className="text-center text-2xl md:text-5xl font-bold tracking-wide lg:leading-tight text-[#003366] my-5 lg:my-10">Discover the Perfect Toy for Your Child Developmental Journey</h2>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="hover:rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate- group-hover:scale-110" src="https://img.freepik.com/premium-vector/happy-kid-laboratoy_23-2147544550.jpg?w=740" alt="science toy" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">                         
                        </div>
                        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30%]">
                            <h1 className="text-3xl font-bold text-white">Science Toys</h1>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-3">See More</button>
                        </div>
                    </div>
                    <div className="hover:rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate- group-hover:scale-110" src="https://img.freepik.com/free-photo/front-view-child-with-abacus-desk_23-2148524670.jpg?w=740&t=st=1684506156~exp=1684506756~hmac=9fccf36349e0d26191f1d46f6101e466a865ba7c366db9116d757b66ccd6f8a0" alt="math-toys" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">                         
                        </div>
                        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30%]">
                            <h1 className="text-3xl font-bold text-white">Math Toys</h1>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-3">See More</button>
                        </div>
                    </div>
                    <div className="hover:rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate- group-hover:scale-110" src="https://img.freepik.com/premium-photo/cute-little-indian-boy-playing-with-toy-crane-wearing-yellow-construction-hat-hard-hat-childhood-education-concept-isolated-green-chalkboard_466689-15483.jpg?w=740" alt="Engineering-kits" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">                         
                        </div>
                        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30%]">
                            <h1 className="text-3xl font-bold text-white">Engineering Kits</h1>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-3">See More</button>
                        </div>
                    </div>
                    <div className="hover:rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate- group-hover:scale-110" src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-cubes-with-letters_23-2149345296.jpg?w=740&t=st=1684506029~exp=1684506629~hmac=c2fe0a3ce626dd29801638846b8b1877c41eac56ed889608c04cad707c90f024" alt="language toys" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">                         
                        </div>
                        <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[30%]">
                            <h1 className="text-3xl font-bold text-white">Language Toys</h1>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-3">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToysGallery;