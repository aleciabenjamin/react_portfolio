import React from "react"

const employmentcard = (props) => {
    let employment = props.employment
    return (

        <div key={employment.employer} className="overflow-hidden border">
            <a href={employment.url} target="_blank">
            <img src={employment.image} className="block h-auto w-full" style={{ height: '250px', objectFit: 'cover' }} />
            </a>

             <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="font-bold text-2xl text-grey-darker mb-2">{employment.employer}</div>
                    <p className="text-grey-darker text-base">
                        {employment.job_title}
                            </p>
             </div>
             <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={employment.url} target="_blank">
                    <button className="bg-grey-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">
                        Go to 
                    </button>
                </a>
                
             </div>

         </div>
    )
}

export default employmentcard