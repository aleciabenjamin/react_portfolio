import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="overflow-hidden border">
            <a href={project.url} target="_blank">
            <img src={project.image} className="block h-auto w-full" style={{ height: '250px', objectFit: 'cover' }} />
            </a>

            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="font-bold text-2xl text-grey-darker mb-2">{project.name}</div>
                    <div>             
                    </div>
                            <p className="text-grey-darker text-base">
                                {project.description}
                            </p>
                </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.url} target="_blank">
                    <button className="bg-blue-dark hover:bg-blue-lighter text-white text-xs py-3 px-2 rounded-full">
                        Go to 
                    
                    </button>
                </a>
                
                
                
                
            </div>

        </div>
    )
}

export default ProjectCard