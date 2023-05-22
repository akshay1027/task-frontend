import { useState, useEffect } from "react"

const RoomType = () => {
    const [option, setOption] = useState(1)

    const handleOption = (option) => {
        setOption(option);
    };

    return (
        <div className="mb-[100px]">
            <div className="max-w-[1400px] m-auto py-16 px-4">
                <div className='flex h-full justify-between'>
                    <div>
                        <p className='text-sm font-semibold'>
                            ROOM TYPE
                        </p>
                        <h3 className='text-5xl md:text-6xl font-bold'>Inspired Loding</h3>
                    </div>
                    <div>
                        <button className={`bg-grey=100 px-10 hover:border-4 ${option === 1 ? 'border-4' : ''} p-6 mx-4`} onClick={() => handleOption(1)}>Luxury</button>
                        <button className={`bg-grey=100 px-10 hover:border-4 ${option === 2 ? 'border-4' : ''} p-6 mx-4`} onClick={() => handleOption(2)}>Family</button>
                    </div>
                </div>
            </div>
            {option === 1 &&
                <div className='ease-out max-w-[1400px] m-auto py-16 px-4 grid gap-4'>
                    <div className='grid grid-cols-3 grid-rows-6 h-[80vh]'>
                        <img
                            className='row-span-3 col-span-2 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
                            alt='/'
                        />

                        <img
                            className='row-span-6 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                            alt='/'
                        />
                        <img
                            className='row-span-3 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
                            alt='/'
                        />
                        <img
                            className='row-span-3 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
                            alt='/'
                        />
                    </div>
                </div>
            }
            {option === 2 &&
                <div className='ease-out max-w-[1400px] m-auto py-16 px-4 grid gap-4'>
                    <div className='grid grid-cols-3 grid-rows-6 h-[80vh]'>
                        <img
                            className='row-span-3 col-span-2 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='/'
                        />
                        <img
                            className='row-span-6 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='/'
                        />
                        <img
                            className='row-span-3 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='/'
                        />
                        <img
                            className='row-span-3 col-span-1 object-cover w-full h-full p-2'
                            src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='/'
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default RoomType;