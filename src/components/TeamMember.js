import React from 'react';

const TeamMember = ({ item }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      
  <img className="w-1/2 mx-24" src={item.image} alt={item.title} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
    {item.subtitle}
    </p>
  </div>
</div>
);

export default TeamMember;