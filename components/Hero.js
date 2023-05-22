import React from "react";

export default function Hero() {
  return (
    <div className='max-w-[1200px] m-auto my-[100px] py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='flex flex-col h-full justify-center'>
        <p className='pb-6 text-[18px] font-semibold'>
          THE ULTIMATE LUXURY EXPERIENCE
        </p>
        <h3 className='text-5xl md:text-8xl font-bold'>The Perfect Base For You</h3>
      </div>
      <div className='h-[80vh]'>
        <img
          className='object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
      </div>
    </div>
  );
};
