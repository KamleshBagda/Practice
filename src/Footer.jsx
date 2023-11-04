import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid footer_list_bg">
                <div className="footer_top m-md-4 m-2">
                    <div className="row  justify-content-between align-items-center">
                        <div className="col-5 col-sm-3 col-md-2 my-2 my-sm-3 my-md-5 ms-2 ms-sm-3 ms-md-5">
                            <h1 className='hdmovies ms-2'>Hd Movies</h1>
                        </div>
                        <div className="col-7 col-sm-5 col-md-4 text-center my-2 my-sm-3 my-md-5">
                            <a href="#" className='mx-2 text-decoration-none'><i class="fa-brands fa-facebook-f fs-2  rounded-circle fb justify-content-end"></i></a>
                            <a href="#" className='mx-2 text-decoration-none'><i class="fa-brands fa-instagram fs-2  rounded-circle ig  justify-content-end"></i></a>
                            <a href="#" className='mx-2 text-decoration-none'><i class="fa-brands fa-youtube fs-2  rounded-circle  yt justify-content-end"></i></a>
                            <a href="#" className='mx-2 text-decoration-none'><i class="fa-brands fa-telegram fs-2  rounded-circle tg  justify-content-end"></i></a>
                        </div>
                    </div>
                    <div className="row footer_list_bg m-5">
                        <div className="col-6 col-md-3  footer_list_bg">
                            <ul>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Careers</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Blog</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>About Amazon</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Investor Relations</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Player Fire Devices</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Player Fire Science</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3  footer_list_bg">
                            <ul>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>FAQ</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Media Centre</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Ways to Watch</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Cookie Preferences</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Speed Test</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3  footer_list_bg">
                            <ul>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Help Centre</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Investor Relations</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Terms of Use</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Corporate Information</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Legal Notices</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3  footer_list_bg">
                            <ul>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Account</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Jobs</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Privacy</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Contact Us</a></li>
                                <li className='m-2'><a href="#" className='text-decoration-none list_hovr text-white '>Only on Player Fire</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer