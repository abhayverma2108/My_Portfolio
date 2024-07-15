import styles from './ProjectsStyles.module.css';
import messenger from '../../assets/Messenger.png';
import moveIt from '../../assets/Move It.png';
import Bank from '../../assets/Bank.png';
import ProjectCard from '../../common/ProjectCard';
import Vocab from '../../assets/GreekVocab.png'

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
          link="https://abhayverma2108.github.io/MOVE-IT/"
          h3="Move It"
          p="Courier Services"
        />
        <ProjectCard
          src={Bank}
          link="https://github.com/abhayverma2108/Bank_Application"
          h3="Mini Bank"
          p="Bank Application"
        />
        <ProjectCard
          src={Vocab}
          link="https://github.com/BenBinary/greek_vocs"
          h3="Greek Voc"
          p="Vocabulary App"
        />
      </div>
    </section>
  );
}

export default Projects;
