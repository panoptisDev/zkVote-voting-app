import React, { useState } from 'react';

const VotingInput = ({ id, addOption, votingOption, removeOption }) => {
  const [optionValue, setOptionValue] = useState(votingOption || '');

  const updateInformation = (value) => {
    addOption(id, value);
  };

  const updateOptionHandler = (e) => {
    setOptionValue(e.target.value);
    updateInformation(e.target.value);
  };

  return (
    <div className='flex items-center bg-[#181818] py-2 rounded-md px-3'>
      <div className='flex items-center gap-2 text-gray-400 w-[150px] text-sm py-2 border-r-[0.5px] border-gray-700'>
        <p>Option {id + 1}</p>
      </div>
      <input
        className='bg-[#181818] py-3 px-4 w-full rounded-r-md placeholder:text-gray-500 text-gray-300 text-sm  outline-none '
        onChange={updateOptionHandler}
        value={optionValue}
        type='text'
        required
      />
      <button
        onClick={() => {
          removeOption(id);
        }}>
        R
      </button>
    </div>
  );
};

export default VotingInput;
