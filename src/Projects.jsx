import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawInSync } from 'react-undraw-illustrations';


class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }
    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }
    render() {
        const projects = this.state.projects
        let projectsList 

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 shadow md y-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }




        return (
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/4">
                    <UndrawInSync primaryColor='#588ee8' height= '250px'/>
                    </div>
                    <div className="w-2/3">
                        <h1 class="font-serif text-4xl text-grey-darkest text-center">My Projects</h1>
                        <p class="font-serif text-lg text-grey-darkest text-center">This is a selection of some of the projects I have been working on at Craft Academy.</p>
                        
                    </div>
    
                </div>
    
                <div className="font-serif georgia text-4xl text-grey-darkest text-center flex flex-wrap -mx-1 lg:-mx-4">
                    {projectsList}
                </div>
            </div>
        )
    }
};

export default Projects