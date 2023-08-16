import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    return (
  <div >
     <div className='max-w-7xl m-auto'>
  <div class="px-4 lg:py-12">
    <div class="lg:gap-4 lg:flex">
      <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="font-bold text-blue-600 text-9xl">{error.status}</h1>
        <p
          class="mb-2 text-2xl font-bold text-center text-[#bd7f7f]  md:text-3xl"
        >
          <span class="text-red-500">Oops!</span> {error ? error.data :'Page not found '}
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          The page youre looking for doesnt exist.
        </p>
        <Link
          to="/"
          class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >Go home</Link
        >
      </div>
      <div class="mt-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
          alt="img"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</div>
  </div>
    );
};

export default Errorpage;