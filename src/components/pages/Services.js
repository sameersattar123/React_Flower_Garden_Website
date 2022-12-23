import React from 'react'
import { Link } from 'react-router-dom'
import services1 from "../images/flowers-276014__340.jpg"

const Services = () => {
  return (
    <div>
       <section className="section border-top text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h1 className="mainHeading">Our Services</h1>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card shadow">
                <img src={services1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h6 className="text-center">Service 1</h6>
                  <div className="underline mx-auto"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a!</p>
                  <Link to="/aboutus">
                    <button className="btn btn-warning shadow">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
