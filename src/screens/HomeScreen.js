import ContactBlock from './../components/ContactBlock';
import HeroBlock from './../components/HeroBlock';
import ProjectBlock from './../components/ProjectBlock';
import SkillsBlock from './../components/SkillsBlock';

export default function HomeScreen() {
  return (
    <div className='screen snap-y snap-mandatory'>

      <HeroBlock />

      <SkillsBlock />

      <ProjectBlock />
      
      <ContactBlock />

    </div>
  )
}
