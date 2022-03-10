import React from 'react';
import '../components/contact.css'
import {NavBar} from '../components/global-components/navbar/index'
export default function Contact() {
  return (
    <main className='main'>
      <NavBar/>
      <div className="container">
      <div class="card w-100 h-100 pb-5">
        <div className='m-5'>
          <div className='row'>
          <h2 class="card-title">Kontakt</h2>
          <p class="card-text text-justify mt-3">
          Det är viktigt för oss att finnas till hands om du har frågor gällande städkoll eller städ.
          Tveka inte att kontakta oss.
          </p>
          </div> 
          <h4 className='mt-3'>
            Har du frågor?
          </h4> 
          <span className=''>Email:</span>
          <span className='form-label'><a href='/#'>info@stadkoll.se</a></span>    
          <div className='row'>
            <div className='col-md-8'>
            <h4 className='mt-3'>
            Är du städleverantör och vill bli verifierad?
          </h4> 
          <span className=''>Email:</span>
          <span className='form-label'><a href='/#'>verifiering@stadkoll.se</a></span>
            </div>
          <div className='col-md-4 d-flex align-center'>
          <div className='Card card-body w-75'>
          <p className='text-white lh-1 fw-lighter '>Newsave AB</p>
          <p className='text-white lh-1 fw-lighter '>Org. nummer: 556982-5598</p>
          <p className='text-white lh-1 fw-lighter'>Adress: Viktor Rydbergsgatan 10</p>
          <p className='text-white lh-1 fw-lighter'>411 32 Göteborg</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
