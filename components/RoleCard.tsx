import React from 'react';

type RoleCardProps = {
  label: string;
  positionClass?: string;
  extraClass?: string;
  isHiddenOnSmall?: boolean;
};

const RoleCardComponent = ({
  label,
  positionClass = '',
  extraClass = '',
  isHiddenOnSmall = true,
}: RoleCardProps) => {
  return (
    <div
      className={`${
        isHiddenOnSmall ? 'hidden sm:flex' : 'flex'
      } justify-center text-lg ${positionClass} border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 p-5 w-52 h-12 rounded-[3rem] items-center z-20 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out ${extraClass}`}>
      <h3 className='text-3xl font-bold'>{label}</h3>
    </div>
  );
};

export const RoleCard = React.memo(RoleCardComponent);
