import React from 'react'
import './Men.css'
export default function Contact() {
  return (
    <div className='container my-5'>
      <div className='container text-center contact'>
        <p>CONTACT US</p>
        <h3><b> WE READY FOR YOUR QUESTIONS</b></h3>
        <div className='contactIcons d-flex py-3'>
          <div className='content col'>
            <span className='fas fa fa-map-marker p-4'></span>
            <h6>ADDRESS</h6>
            <p>No. 119/1, GNT Road, Vellore Market City, RedHills, Chennai - 52
              (Opp to RedHills Police Station, Near CSI Church)</p>
          </div>
          <div className='content col my5'>
            <span className='fas fa fa-phone p-4'></span>
            <h6>PHONE</h6>
            <p>9600746966</p>
          </div>
          <div className='content col'>
            <span className='fas fa fa-envelope p-4'></span>
            <h6>EMAIL</h6>
            <p>MANITEXTILESTHEGRANDSTORE@GMAIL.COM</p>
          </div>
          <div className='content col'>
            <span className='fas fa fa-users p-4'></span>
            <h6>FOLLOWS US</h6>
            <ul className='nav icons'>
              <li className=''>
                <i className='fa fa-facebook-f'></i></li>
              <li className=''>
                <i className='fa fa-twitter'></i></li>
              <li className=''>
                <i className='fa fa-linkedin'></i></li>
              <li className=''>
                <i className='fa fa-google'></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center my-4'>
        <iframe width="90%" height="450" scrolling="no" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=21-20,%20Ratna%20Nagar%20Main%20Rd,%20Phase%201,%20Swarnambigai%20Nagar,%20Virugambakkam,%20Chennai,%20Tamil%20Nadu%20600092+(karthikeyan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">città più popolate Italia mappa</a></iframe>
      </div>
      <div className='questions text-center my-5'>
        <h5>HAVE A QUESTIONS</h5>
        <div className='have'>
          <input type="text" className='col-5 border ' placeholder='Name' />
          <input type="text" className='col-5 border' placeholder='Email' />
          <input type="text" className='col-5 border' placeholder='phone' />
          <input type="text" className='col-5 border' placeholder='Subject' />
          <input type="text" name="" id="textarea" className='col-10 border' placeholder='Your message' />
        </div>
        {/* <textarea name="" id="" className='col-10'></textarea> */}
        <button className='learnMoremodern px-4 py-2'>SEND MESSAGE</button>
      </div>
    </div>
  )
}
