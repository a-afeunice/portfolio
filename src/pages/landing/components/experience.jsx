import React from 'react'

const achieve = [
    {
        year: '2024',
        role: 'Frontend Developer Trainee',
        company: 'MEST Africa',
        description: 'Developed responsive web applications using React.js and Tailwind CSS, improving user engagement by 30%.',
      },
      {
        year: '2022 - 2023',
        role: 'Secretary',
        company: 'Ghana Revenue Authority (National Service)',
        description: 'Provided a positive customer experience with fair, friendly, and courteous service. Resolved customer issues and answered questions and processed return transactions.' 

      },
      {
        year: '2021',
        role: 'sales personnel',
        company: 'K Tuffuor Enterprise',
        description: 'Managed customer transactions, provided product information, and ensured efficient inventory handling to maximize sales and customer satisfaction.',
      },
]

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>

        <div>
        {achieve.map((achieve, index) => (
          <div
          key={index} className='mb-8 flex flex-wrap lg:justify-center'
          >
            <div className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-500'>{achieve.year}</p>
            </div>
               <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>
                    {achieve.role} -{""}
                    <span className='text-sm text-purple-500'>
                        {achieve.company}
                    </span>
                </h6>
                <p className='mb-4 text-neutral-400'>{achieve.description}</p>
                </div> 
          </div>
        ))}
        </div>
    </div>
  )
}

export default Experience