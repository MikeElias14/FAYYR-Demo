
import styles from '../styles/Home.module.css';

// Demo components
import IntroA from '../components/intro_a';
import AboutA from '../components/about_a';
import PartnersA from '../components/partners_a';
import FeatureA from '../components/feature_a';
import AboutB from '../components/about_b';


export default function Home() {
  return (
    <div>

      {/* Main section */}
      <IntroA/>
      
      {/* Feature section */}
      <FeatureA/>
      
      {/* About Section section */}
      <AboutB/>      
    
      {/* Partners Section */}
      <PartnersA/>



    </div>
  )
}
