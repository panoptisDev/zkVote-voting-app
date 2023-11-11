import CreateStep1 from '@/components/DAO/CreateStep1';
import VerticalStepper from '@/components/DAO/Stepper';
import Stepper from '@/components/DAO/Stepper';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CreateDao = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    projectName: '',
    tagline: '',
    walletAddress: '',
    categories: [],
    logo: '',
    liveLink: '',
    twitter: '',
    github: '',
    telegram: '',
    discord: '',
    linkedin: '',
    description: '',
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CreateStep1
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <CreateStep1
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return (
        <CreateStep1
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };

  const isConnected = true;

  const nextPageHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousPageHandler = () => {
    if (page > 0) setPage((currPage) => currPage - 1);
  };

  const submitProjectHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='min-h-screen bg-[#111111] pt-20  font-Avenir'>
      <div className='flex  text-white'>
        <div className='flex-[0.35] flex flex-col px-20 py-14 border-r-[0.5px]  border-[#2E2E2E]'>
          <div className='mb-10'>
            <p className='text-3xl font-semibold mb-1 text-[#f2f2f2]'>Create DAO</p>
            <p className='text-sm text-[#707070]'>
              Setup your DAO in few simple steps.
            </p>
          </div>
          <VerticalStepper page={page} />
        </div>
        <form className=' w-[400px] flex-[0.5]  py-8 px-10  mb-10'>
          {/* <p className='text-center font-medium text-2xl'>Create DAO here</p>
          <p className='text-center text-xs text-gray-300 font-light'>
            Create and submit your project for quadratic funding.
          </p> */}
          {PageDisplay()}
          <div className='flex justify-between mt-8 items-center'>
            {page !== 0 ? (
              <button
                type='button'
                onClick={previousPageHandler}
                className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <IoIosArrowBack />
                <p>Previous</p>
              </button>
            ) : (
              <p className='text-[#181818]'>.</p>
            )}

            {page === 2 ? (
              <div>
                {isConnected ? (
                  <button
                    className='w-[150px] text-center  py-3 bg-[#4f4f57] rounded-lg text-gray-100 text-sm hover:bg-[#3b3b44]'
                    onClick={submitProjectHandler}>
                    Submit
                  </button>
                ) : (
                  <ConnectButton />
                )}
              </div>
            ) : (
              <button
                type='button'
                onClick={nextPageHandler}
                className='flex items-center gap-2 text-gray-400 hover:text-white'>
                <p>Next</p>
                <IoIosArrowForward />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDao;
