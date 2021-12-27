import React from 'react'

import ProjectDetail from '../../../components/UI/ProjectDetail'

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
const Index = ({ project }: { project: projectType }) => {
  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://portfolio-380c8-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
  )
  const projects = await res.json()
  const projectIds = []
  for (const key in projects) {
    projectIds.push(key)
  }
  const paths = projectIds.map((id) => ({
    params: { id: id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://portfolio-380c8-default-rtdb.europe-west1.firebasedatabase.app/projects/${params.id}.json`
  )
  const project = await res.json()

  return { props: { project } }
}

export default Index
