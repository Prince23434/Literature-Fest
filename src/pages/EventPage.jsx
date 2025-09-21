import EventsCompetitions from '../components/EventsCompetitions'
import Footer from '../components/Footer'
import Home from '../components/Home'

const EventPage = () => {
  return (
    <div>
        <Home title='Events' />
        <EventsCompetitions />
        <Footer title='event'/>
    </div>
  )
}

export default EventPage