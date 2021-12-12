import { useEffect, useState } from "react"

const Footer = () => {

/**
   * Back to top button 
   */
const [backToTop, setBackToTop] = useState(false)

const upButton = ()=>{
  if (window.scrollY >= 50) {
    setBackToTop(true)
  }else{
    setBackToTop(false)
  }
}
window.addEventListener('scroll',upButton)

    return (
        <>
        {/* ======= Footer ======= */}
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3 className="logo"><span>T</span>echSy</h3>
              <p>C/24 L.N Colony,<br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
          <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">SEO</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">SMO</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">       


            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Price</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Portfolio</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/>
              <input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>T</span>echSy</strong>. All Rights Reserved || Designed by <a href="https://techsy.in/" target="_blank"><span>T</span>echSy</a>
      </div>
    </div>
  </footer>
  {/* End Footer */}

  {/* <div id="preloader"></div> */}
  <a href="#" class={`${backToTop ? 'back-to-top active' : 'back-to-top' } d-flex align-items-center justify-content-center`}><i class="bi bi-arrow-up-short"></i></a>

        </>
    )
}

export default Footer
