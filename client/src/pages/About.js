import React from 'react'
import Instagram from '../components/Instagram'

function About() {
  return (
    <>
      <div className='aboutUs'>
        <h1 className='aboutUsText'>About Us</h1>
        <h3 className='aboutUsh3'>Located in Downtown Vancouver, Brunch is an small but exquisite kitchen, we serve brunch, duh haha</h3>
        <h2 className='aboutUsh2'>and we also have some mexican inpired recipes</h2>
        <h3 className='aboutUsh3'> which is great since you can have some classics of the canadian brunch but also get the spiciness of our mexican recipes</h3>
        <h2 className='aboutUsh2'>either way we promise you a delightfull brunch, come and get a taste please :))</h2>
        <h1 className='aboutUsText'>Thankyou for visiting us!!!</h1>
      </div>
      <Instagram />
    </>
  )
}

export default About