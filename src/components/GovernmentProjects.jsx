import { HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { governmentProjects } from '../data/siteData'
import useReveal from '../hooks/useReveal'

export default function GovernmentProjects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section section-dark blueprint-grid">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow eyebrow--light">Government Projects</p>
          <h2 className="section-title">Trusted engineering partner</h2>
          <p className="section-sub">
            Government Certified Contractor &middot; Successful Installations &middot;
            Long-Term Maintenance Services
          </p>
        </div>

        <div className="gov-grid reveal" ref={ref}>
          {governmentProjects.map((project) => (
            <div className="gov-card" key={project.short}>
              <HiOutlineBuildingLibrary size={30} />
              <h3>{project.short}</h3>
              <p className="gov-card__name">{project.name}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
