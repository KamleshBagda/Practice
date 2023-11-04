import React from 'react'
function Navebar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary1 ">
        <div className="container-fluid">
          <a href="#"><img src="./logo.jpg" alt=""  className='logo text-white'/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item hovr ">
                <a className="nav-link active nam2 txtcol hovr" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item hovr">
                <a className="nav-link active nam2 txtcol hovr" href="#">About Us</a>
              </li>
              <li className="nav-item hovr dropdown">
                <a className="nav-link dropdown-toggle active nam2 txtcol hovr" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Models
                </a>
                <ul className="dropdown-menu bg-body-tertiary1">
                  <li><a className="dropdown-item txtcol hovr" href="#">Action</a></li>
                  <li><a className="dropdown-item txtcol hovr" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item txtcol hovr" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 txtcol" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-white txtcol1 rounded-circle" type="submit"><i class="fa-solid fa-magnifying-glass" ></i></button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navebar