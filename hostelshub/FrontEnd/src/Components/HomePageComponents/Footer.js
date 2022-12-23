import '../../StyledSheets/HomePageCSS/footer.css';
 import {FaFacebook , FaLinkedin ,FaTwitter , FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <section id='footer-sec'></section>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Hostel<span>Hub</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">HostelHub © 2015</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>COMSAT'S</span> Mandian, Abbottabad
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@hostelhub.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the HostelHub</span>
          
          </p>

          <div class="footer-icons">
            <a href="#">
              <i><FaFacebook/></i>
            </a>
            <a href="#">
              <i><FaTwitter/></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"><FaLinkedin/></i>
            </a>
            <a href="#">
              <i class="fa fa-github"><FaGithub/></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
