
import styles from '../styles/Home.module.css';

// Demo components
import IntroA from '../components/intro_a';
import AboutA from '../components/about_a';
import AboutB from '../components/about_b';
import PartnersA from '../components/partners_a';
import PartnersB from '../components/partners_b';
import FeatureA from '../components/feature_a';


export default function Home() {
  return (
    <div className={styles.container}>

      {/* Main section */}
      <IntroA/>
      
      {/* Feature section */}
      <FeatureA/>
      
      {/* About Section section */}
      <AboutB/>      
    
      {/* Partners Section */}
      <PartnersB/>



    </div>
  )
}
