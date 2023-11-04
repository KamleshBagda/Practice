import React from 'react'

function Card(props) {
  return (
    <>
      <div className="card bg-body-tertiary2 widt d-inline-flex  m-2 mt-3 ">
        <div className="container-fluid card card_hov1 bg-body-tertiary2 position-relative ">
          <img src={props?.data1.image} className="card-img-top imag card_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props?.data1.title}</h5>
            <p className="card-text">{props?.data1.desc}</p>
            <a href="#" className="btn btn-dark position-absolute bottom-0 start-25">Book Now</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card