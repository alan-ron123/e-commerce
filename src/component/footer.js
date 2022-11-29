import "./footer.css";
import images from "../logo/body.jpg";
export default function Footer() {
  return (
    <div className="main">
      <div className="container">
        <div className="about">
          <h1>About</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <div className="6box">
            <div className="small-container">
              <div className="i1">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="i1">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="i1">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="i1">
                <i class="fa-brands fa-square-google-plus"></i>
              </div>
              <div className="i1">
                <i class="fa-brands fa-behance"></i>
              </div>
              <div className="i1">
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="instagram-widgets">
          <h1>Instagram widgets</h1>
          <br />
          <img className="img1" src={images} alt="images" />
          <img className="img1" src={images} alt="images" />
          <img className="img1" src={images} alt="images" />
          <img className="img1" src={images} alt="images" />
          <img className="img1" src={images} alt="images" />
          <img className="img1" src={images} alt="images" s />
        </div>
        <div className="twitter-posts">
          <h1>Twitter posts</h1>
          <div className="tweet1">
            <i class="fa-brands fa-twitter"></i>Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
            <a href="ww.google.com">click here</a>
            <br />
            <br />
            <br />
            <hr />
          </div>
          <div className="tweet2">
            <i class="fa-brands fa-twitter"></i>Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
            <a href="ww.google.com">click here</a>
            <br />
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className="short-navigation">
          <h1>Short navigation</h1>
          <br />
          <ul className="no-bullets">
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Home</span>
            </li>
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Experts</span>
            </li>
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Portfolio</span>
            </li>
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Blog</span>
            </li>
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Service</span>
            </li>
            <li>
              <i className="fa-solid fa-greater-than"></i>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
