import React from 'react'

import ProjectItem from '../../components/UI/ProjectItem'

interface projectType {
  id: string
  name: string
  image: string
  githubLink: string
  smallDescription?: string
  largeDescription?: string
  builtWith: string
  actionLink: string
}

const Projects = ({ loadedProjects }: any) => {
  return (
    <>
      <h1 className="project_header">My Projects</h1>
      <section className="project_section">
        {loadedProjects.map((project: projectType) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://portfolio-380c8-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
  )
  const projects = await res.json()
  const loadedProjects: projectType[] | null = []
  for (const key in projects) {
    loadedProjects.push({
      id: key,
      name: projects[key].name,
      image: projects[key].image,
      githubLink: projects[key].github_link,
      smallDescription: projects[key].description_sm,
      largeDescription: projects[key].description_lg,
      builtWith: projects[key].built_with,
      actionLink: projects[key].action_link,
    })
  }
  return {
    props: {
      loadedProjects: JSON.parse(JSON.stringify(loadedProjects)),
    },
    revalidate: 3600,
  }
}

export default Projects
