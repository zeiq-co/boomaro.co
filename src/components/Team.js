import React from 'react';

import TeamMember from './TeamMember';

const team = [
  {
    id: 1,
    title: 'Perminder Klair',
    subtitle: 'Founder & CEO',
    image: '/images/team/perminder.jpg'
  },
  {
    id: 2,
    title: 'Gagan Saini',
    subtitle: 'Front-End Developer',
    image: '/images/team/gagan.jpg'
  },
  {
    id: 3,
    title: 'Kunal Sharma',
    subtitle: 'Front-End Developer',
    image: '/images/team/kunal.jpg'
  },
  {
    id: 4,
    title: 'Balwinder Klair',
    subtitle: 'Marketing Strategist',
    image: '/images/team/balwinder.jpg'
  }
];

const Team = () => (
  <div className='container px-3 mx-auto pb-24'>
    <h2 className='text-5xl text-black text-center bg-white pb-20'>
      Meet Our Team
    </h2>
    <div className='flex bg-white'>
      <div className='w-1/5'></div>
      <div className='w-3/5'>
        <div className='flex flex-wrap -mb-4'>
          {team.map(item => (
            <div className='w-1/2 mb-4'>
              <div className='text-gray-700 text-center p-2'>
                <TeamMember key={item.id} item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-1/5'></div>
    </div>
  </div>
);

export default Team;
