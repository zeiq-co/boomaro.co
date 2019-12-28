import React from 'react';

import TeamMember from './TeamMember';


const team = [
  {
    id: 1,
    title: 'Perminder Klair',
    subtitle: 'Founder & CEO',
    image: '/images/team/gagan.jpeg',
  },
  {
    id: 2,
    title: 'Nasim Akthar',
    subtitle: 'Lead Developer',
    image: '/images/team/gagan.jpeg',
  },
  {
    id: 3,
    title: 'Gagan Saini',
    subtitle: 'Front-End Developer',
    image: '/images/team/gagan.jpeg',
  },
  {
    id: 4,
    title: 'Balwinder Klair',
    subtitle: 'Marketing Strategist',
    image: '/images/team/gagan.jpeg',
  },
];

const Team = () => (
    <div>  
        <h2 className="text-5xl text-black text-center bg-white pb-20">
            Meet Our Team
        </h2>
          <div class="flex bg-white">
          <div class="w-1/5"></div>
          <div class="w-3/5">
        <div className="flex flex-wrap -mb-4">
            {team.map(item => (
                <div className="w-1/2 mb-4">
                    <div className="text-gray-700 text-center p-2">
                        <TeamMember key={item.id} item={item} />
                    </div>
                </div>
            ))}
        </div>
        </div>
        <div class="w-1/5"></div>
        </div>
    </div>
);

export default Team;