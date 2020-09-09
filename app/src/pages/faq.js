import React , { useState } from 'react'
import FAQ from '../components/common/FAQ.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Faq() {

    const [faqs, setfaqs] = useState([
    
        {
            question: 'What is Frosh?',
            answer: 'Frosh is a four-day event for new undergraduate students at McGill. During Frosh new students get the chance to meet other new students, connect with upper year student-leaders, and get introduced to the McGill Engineering community.',
            open: true
          },
          {
            question: 'When is Frosh?',
            answer: 'Frosh takes place from August 27th - August 30th 2020. Frosh is one of the events of Orientation Week, which takes place from August 26th - August 30th and classes will begin on September 3rd',
            open: false
          },
          {
            question: 'What happens during frosh?',
            answer: 'Frosh is made up of a variety of social events, completely organized by students. The events of online frosh will be taking place on various platforms with a central one to guide you through. You’ll be attending all the events with your group of fellow engineers. For a full outline of what happens at each of our events, see the schedule on our social media and on the home page.',
            open: false
          },
          
          {
            question: 'How do I register?',
            answer: 'Registration for all Froshes takes place through the same online system, which you can access through the “Register” button on this page. Registration is open up until the first day of Frosh (August 27th).',
            open: false
          },
          {
            question: 'Why should I do Frosh?',
            answer: 'Frosh is your first and best opportunity to get acquainted with McGill Engineering kick-start your McGill career. You’ll meet older engineering student mentors and new engineering students like yourself. The friendships you make during Frosh will last through the rest of your McGill career and beyond.',
            open: false
          },
          {
            question: 'How much does Frosh cost?',
            answer: 'Online frosh is completely free and other frosh-related events that may happen through the semester will vary in cost.',
            open: false
          },
          {
            question: 'Are Frosh events mandatory?',
            answer: 'Not at all. We encourage you to participate in all Frosh events, but if you can’t make it or need to take a break that’s absolutely okay. If possible, please tell your Frosh leaders that you won’t be attending so they don’t wait for you.',
            open: false
          },
          {
            question: 'Do I have to register?',
            answer: 'Yes. To attend any Frosh events, you must register online.',
            open: false
          },
          {
            question: 'I made a mistake on my registration, how can I correct it?',
            answer: 'Send us an email to oweek@mcgilleus.ca at any time.',
            open: false
          },
          
          {
            question: 'What is the EUS?',
            answer: 'The Engineering Undergraduate Society (EUS) is a student-led organization that represents engineering and architecture undergraduate students at McGill University. The EUS supports its students through organized funding for improvement of student life and academics, representation through council, and coordinating an immense amount of opportunities to get involved. Find out more at wiki.mcgilleus.ca, by reading the EUS Handbook that you’ll receive early in the year, or by dropping by the EUS Office in McConnell Room 7!',
            open: false
          },
          {
            question: 'Who are Frosh Coordinators?',
            answer: 'We are a group of 12 upper-year engineering students who spend their summer organizing the entirety of Frosh. We publicize Frosh to incoming students, find sponsorship,  come up with fun events, and hire Frosh Leaders and O-Staff.',
            open: false
          },
          {
            question: 'Who are Leaders and O-Staff?',
            answer: 'Frosh Leaders are upper-year students who have been hired to guide you throughout Frosh. Your Leaders will also be your mentors throughout your first year at McGill, so be sure to get their contact information during Frosh and hit them up with any questions during or after Frosh! O-Staff are upper-year students who have been hired to help the Coordinators run all of the events at Frosh.They have all received extensive training, so feel free to approach them at any time, and they will be happy to answer your questions!',
            open: false
          },
          {
            question: 'Who are Froshies?',
            answer: 'You! A “Froshie” is anyone who is a participant in Frosh.',
            open: false
          },
          {
            question: 'Who can participate in Frosh?',
            answer: 'Engineering Frosh is open to any student entering McGill for their first year of an undergraduate degree in Engineering or Architecture. Frosh welcomes students of all ages, but you only get one chance - you can’t participate in Frosh in any year after your first one (however, you can apply to be a Leader, O-Staff, or Coordinator!). If you are a transfer or exchange student coming to McGill for your first year in Engineering or Architecture, you are welcome to participate in Frosh. ',
            open: false
          },
          {
            question: 'I’m not in Engineering, can I sign up for Engineering Frosh?',
            answer: 'Probably not. Students are strongly suggested to participate in the Frosh of their faculty, or in a non-Faculty Frosh, so they can make connections with people they will be working alongside throughout their McGill career. If you have unusual circumstances and think that Engineering Frosh would be the best fit for you (e.g. you transferred Faculties after registering for Frosh), send an email to oweek@mcgilleus.ca.',
            open: false
          },
          {
            question: 'I have a concern that I would like addressed before registering, how can I contact a Frosh Coordinator?',
            answer: 'Any concerns can be sent to oweek@mcgilleus.ca, and the appropriate Coordinator will reply to your question.',
            open: false
          },
          {
            question: 'Will there be any in-person events during the 2020 fall semester?',
            answer: 'We may possibly host in-person events during the fall semester, with that said they will only take place if and when governement regulations allow them and if they can be done safely.',
            open: false
          },
         {
          question: 'Will there be a winter frosh?',
          answer: 'There have been discussions about hosting an in-person frosh at the beginning of the winter semester, the event is not confirmed yet and will only take place if and when government and university regulations allow it.',
          open: false
        },
        {
          question: 'Where can I learn more about groups and clubs on campus?',
          answer: "We've put together an involvement video serie which showcases most clubs, committees and design team that you can join in the EUS, the playlist can be found on our Youtube channel (link in the footer) and on the EUS website.",
          open: false
        },
          

        
    ]);
    
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
    }
    
       


    return (
    <div>
     
        <div className="faqs">
        <p className="questions">QUESTIONS?</p>
        <p className="answers">We got answers.</p>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
     
        </div>
  
    
    );
    
}
export default Faq;