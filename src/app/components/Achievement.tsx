import React from 'react'

const achievementlist = [
{
    metric : 'Projects',
    value : '100+',
},

{
    metric : 'Users',
    value : '1M+',
},

{
    metric : 'Awards',
    value : '10+',
},

{
    metric : 'Years',
    value : '5+',
},  
];

const AchievementList = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='flex flex-row item-center justify-between py-8 px-16 border border-gray-700 rounded-lg'>  
      {
        achievementlist.map((achievement,index) => {
            return(
               <div 
               key={index}
               className='flex flex-col items-center justify-center mx-4'>
               <h2 className='text-white text-4xl font-bold'>{achievement.value}</h2>
                <p className='text-gray-500 text-base'>{achievement.metric}</p>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default AchievementList  
