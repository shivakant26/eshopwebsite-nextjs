
const Footer = () => {
    return(
        <>
        <div className="footer">
        <div className="center_wr">
          <div className="footer_top">
            <div className="footer_top_logo item">
              <div className="ftr_logo">
                <a href="#">
                  <span className="ftr-style">e</span>Shop
                </a>
                <h4>The best look anytime, anywhere.</h4>
              </div>
            </div>
            <div className="for_her item">
              <h2>for her</h2>
              <ul>
                <li>
                  <a href="#">Women Jeans</a>
                </li>
                <li>
                  <a href="#">Tops and Shirts</a>
                </li>
                <li>
                  <a href="#">Women Jackets</a>
                </li>
                <li>
                  <a href="#">Heels and Flats</a>
                </li>
                <li>
                  <a href="#">Women Accessories</a>
                </li>
              </ul>
            </div>
            <div className="for_him item">
            <h2>for him</h2>
              <ul>
                <li>
                  <a href="#">Men Jeans</a>
                </li>
                <li>
                  <a href="#">Men Shirts</a>
                </li>
                <li>
                  <a href="#">Men Shoes</a>
                </li>
                <li>
                  <a href="#">Men Accessories</a>
                </li>
                <li>
                  <a href="#">Men Jackets</a>
                </li>
              </ul>
            </div>
            <div className="subscribe item">
            <h2>subscribe</h2>
            <div className="form-field">
              <input type="text" placeholder="your email address..." />
            </div>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_section">
        <div className="center_wr">
          <div className="footer_bottom">
            <div className="copywrite_section">
              <p>
                Copyright © 2023 <span className="ftr-style">e</span>shop.
                Powered by <a href="#"><span className="ftr-style">e</span>shop</a>.
              </p>
            </div>
            <div className="social_icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer;