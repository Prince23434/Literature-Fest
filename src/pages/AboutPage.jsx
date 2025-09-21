import AbourSir from '../components/AbourSir'
import About from '../components/About'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'
import Home from '../components/Home'

const AboutPage = () => {
  return (
    <div>
        <Home title='About' />
        <AbourSir />
        <About />
        <AboutTeam />
        <Footer title="about" />
    </div>
  )
}

export default AboutPage