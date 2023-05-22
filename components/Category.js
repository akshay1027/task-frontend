import React, { Fragment, useState, useEffect } from 'react';

const Category = () => {
    const hoverTransition = {
        transitionDuration: '0.5s'
    };

    return (
        <Fragment>
            <div className="flex max-w-[1300px] m-auto justify-between px-4 mb-[160px]">
                <div style={hoverTransition} className='bg-white flex justify-center items-center shadow-sm hover:bg-[#bead8e] h-40 w-40 ease-in'>
                    <div>
                        <img src="https://www.svgrepo.com/show/169404/biscuit.svg" className="text-[#bead8e]" height="75" width="65" />
                        <p className='pt-4 font-semibold text-sm tracking-wider'>CHICKEN</p>
                    </div>
                </div>
                <div style={hoverTransition} className='bg-white mt-20 flex justify-center items-center shadow-sm hover:bg-[#bead8e] h-40 w-40 ease-in'>
                    <div>
                        <img src="https://www.svgrepo.com/show/169404/biscuit.svg" className="text-[#bead8e]" height="75" width="65" />
                        <p className='pt-4 font-semibold text-sm tracking-wider'>ITALIAN</p>
                    </div>
                </div>
                <div style={hoverTransition} className='bg-white mt-40 flex justify-center items-center shadow-sm hover:bg-[#bead8e] h-40 w-40 ease-in'>
                    <div>
                        <img src="https://www.svgrepo.com/show/169404/biscuit.svg" className="text-[#bead8e]" height="75" width="65" />
                        <p className='pt-4 font-semibold text-sm tracking-wider'>COFFEE</p>
                    </div>
                </div>
                <div style={hoverTransition} className='bg-white mt-20 flex justify-center items-center shadow-sm hover:bg-[#bead8e] h-40 w-40 ease-in'>
                    <div>
                        <img src="https://www.svgrepo.com/show/169404/biscuit.svg" className="text-[#bead8e]" height="75" width="65" />
                        <p className='pt-4 font-semibold text-sm tracking-wider'>BAKE CAKE</p>
                    </div>
                </div>
                <div style={hoverTransition} className='bg-white flex justify-center items-center shadow-sm group hover:bg-[#bead8e] h-40 w-40 ease-in'>
                    <div>
                        <img src="https://www.svgrepo.com/show/169404/biscuit.svg" className="text-[#bead8e]" height="75" width="65" />
                        <p className='pt-4 font-semibold text-sm tracking-wider'>COOKIES</p>
                    </div>
                </div>
            </div >
        </Fragment >
    );
};

export default Category;