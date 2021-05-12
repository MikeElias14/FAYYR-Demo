
import styles from '../styles/Home.module.css';

// Demo components
import IntroA from '../components/intro_a';
import AboutA from '../components/about_a';
import PartnersA from '../components/partners_a';


export default function Home() {
  return (
    <div>

      {/* Main section */}
      <IntroA/>
      
      {/* About section */}
      <AboutA/>
    
      {/* Partners Section */}
      <PartnersA/>



    </div>
  )
}
