import Footer from '../components/Footer'
import Home from '../components/Home'
import HomeAbout from '../components/HomeAbout'
import HomeCompetitions from '../components/HomeCompetitions'
import HomeEvent from '../components/HomeEvent'
import HomeGlimpse from '../components/HomeGlimpse'
import HomePartners from '../components/HomePartners'
import HomeSpeakers from '../components/HomeSpeakers'

const HomePage = () => {
  return (
    <div>
      <Home title='25-26th Sept 2025' />
      <HomeAbout />
      <HomeEvent />
      <HomeCompetitions />
      <HomeSpeakers />
      <HomePartners />
      <HomeGlimpse />
      <Footer title='home' />
    </div>
  )
}

export default HomePage