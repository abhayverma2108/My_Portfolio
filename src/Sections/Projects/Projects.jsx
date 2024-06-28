import styles from './ProjectsStyles.module.css';
import messenger from '../../assets/Messenger.png';
import moveIt from '../../assets/Move It.png';
import Bank from '../../assets/Bank.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={messenger}
          link="https://github.com/abhayverma2108/Passenger-Messenger"
          h3="Passenger Messenger"
          p="Messenger App"
        />
        <ProjectCard
          src={moveIt}
          link="https://github.com/abhayverma2108/MOVE-IT"
          h3="Move It"
          p="Courier Services"
        />
        <ProjectCard
          src={Bank}
          link="https://github.com/abhayverma2108/Bank_Application"
          h3="Mini Bank"
          p="Bank Application"
        />
      </div>
    </section>
  );
}

export default Projects;
