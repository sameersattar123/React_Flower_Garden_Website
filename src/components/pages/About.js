import React from 'react'
import { Link } from 'react-router-dom'
import VMV from '../includes/VMV'

const About = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mainHeading">Our Company</h1>
              <div className="underline mx-auto"></div>
              <p className="text-center para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ipsum vero nisi officiis accusantium corporis non culpa deserunt
                fugiat explicabo et eum, recusandae sint nobis corrupti itaque.
                Earum, nemo blanditiis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Omnis, consequuntur suscipit sed ex quae
                exercitationem adipisci voluptatibus sint. Ducimus molestiae
                inventore eos repudiandae quidem optio iste quo placeat dolore
                ipsam?
              </p>
              <Link to="/contactus">
                <button className="btn btn-warning shadow">Read more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <VMV/>
    </div>
  )
}

export default About
