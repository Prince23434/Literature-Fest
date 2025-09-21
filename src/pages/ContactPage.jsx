import ContactTouch from '../components/ContactTouch'
import ContactVenue from '../components/ContactVenue'
import Footer from '../components/Footer'
import Home from '../components/Home'

const ContactPage = () => {
  return (
    <div>
        <Home title='Contact Us' />
        <ContactTouch />
        <ContactVenue />
        <Footer title='contact'/>
    </div>
  )
}

export default ContactPage