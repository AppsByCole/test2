import ContactBlock from './../components/ContactBlock';
import HeroBlock from './../components/HeroBlock';
import ProjectBlock from './../components/ProjectBlock';
import SkillsBlock from './../components/SkillsBlock';

export default function HomeScreen() {
  return (
    <div className='screen'>

      <HeroBlock />

      <SkillsBlock />

      <ProjectBlock />
      
      <ContactBlock />

    </div>
  )
}
