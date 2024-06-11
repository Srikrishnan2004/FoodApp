import {React,Component,useEffect,useState} from 'react';
import './HomePage.css';
// import 'ionicons/dist/css/ionicons.min.css';
import ctabanner from '../assets/images/cta-banner.png';
import herobanner from '../assets/images/hero-banner.png';
import herobg from '../assets/images/hero-bg.png';
import heroshape1 from '../assets/images/hero-shape-1.svg';
import heroshape2 from '../assets/images/hero-shape-2.svg';
import instruction1 from '../assets/images/instructuion-1.png';
import instruction2 from '../assets/images/instructuion-2.png';
import instruction3 from '../assets/images/instructuion-3.png';
import logofooter from '../assets/images/logo-footer.svg';
import logo from '../assets/images/logo.svg';
import newsletter from '../assets/images/newsletter-banenr.png';
import partner1 from '../assets/images/partner-1.jpg';
import partner2 from '../assets/images/partner-2.jpg';
import rest1 from '../assets/images/rest-1.jpg';
import rest2 from '../assets/images/rest-2.jpg';
import rest3 from '../assets/images/rest-3.jpg';
import Srikrishnan from '../assets/images/SrikrishnanTestimonial.png';
import testiavatar from '../assets/images/testi-avatar.jpg';
import testishape from '../assets/images/testi-shape.svg';
import testimonialbanner from '../assets/images/testimonial-banner.png';
function HomePage()
{

  useEffect(() => {
    const loadingElement = document.querySelector("[data-loading-container]");

    const addLoadedClass = () => {
      setTimeout(() => {
        loadingElement.classList.add("loaded");
        document.body.classList.add("loaded");
      }, 1000);
    };

    const header = document.querySelector("[data-header]");
    const revealElements = document.querySelectorAll("[data-reveal]");
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("active");
    };

    const closeNavbar = () => {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("active");
    };

    navTogglers.forEach(toggler => toggler.addEventListener("click", toggleNavbar));
    navbarLinks.forEach(link => link.addEventListener("click", closeNavbar));

    const headerActive = () => {
      window.scrollY > 200 ? header.classList.add("active") : header.classList.remove("active");
    };

    const scrollReveal = () => {
      revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight / 1.2) {
          element.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", headerActive);
    window.addEventListener("scroll", scrollReveal);
    window.addEventListener("load", scrollReveal);
    addLoadedClass();

    return () => {
      window.removeEventListener("load", addLoadedClass);
      window.removeEventListener("scroll", headerActive);
      window.removeEventListener("scroll", scrollReveal);
    };
  }, []);
    return (
<div>
  {/* 
    - #PRELOADER 
  */  }
  <div className="loading-container" data-loading-container>
    <div className="loading-circle" />
    
  </div>

  {/* 
    - #HEADER
  */}
  <header className="header" data-header>
    <div className="container">
      {/* <a href="#" className="logo">
        <img src={logo} width={148} height={38} alt="Fasteat home" />
      </a> */}
      <nav className="navbar" data-navbar>
        {/* <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true" />
        </button> */}
        <a href="#" className="logo">
          <img src={logo} width={148} height={38} alt="Fasteat home" />
        </a>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>Restaurants</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" data-nav-link>Contacts</a>
          </li>
        </ul>
      <div className="header-action">
        <button className="cart-btn" aria-label="cart">
          <ion-icon name="bag" aria-hidden="true" />
        </button>
        <a href="#" className="btn btn-primary has-after">Order Now</a>
      </div>
      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" />
      </button>
      <div className="overlay" data-overlay data-nav-toggler />
      </nav>
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="section hero has-bg-image" aria-label="home" style={{backgroundImage: `url(${herobg})`}}>
        <div className="container">
          <div className="hero-content" data-reveal="left">
            <h1 className="h1 hero-title">The Best Restaurants In Your Home</h1>
            <p className="hero-text">
              Craving something tasty? Get your favorite dishes from local restaurants delivered straight to your door.
            </p>
            <a href="#" className="btn btn-secondary has-after">Order Now</a>
          </div>
          <figure className="hero-banner" data-reveal>
            <img src={herobanner} width={680} height={720} alt="hero banner" className="w-100" />
            <img src={heroshape1} width={338} height={138} alt="shape" className="shape shape-1" />
            <img src={heroshape2} width={237} height={80} alt="shape" className="shape shape-2" />
          </figure>
        </div>
      </section>
      {/* 
  - #INSTRUCTION
*/}
      <section className="section instruction" aria-labelledby>
        <div className="container">
          <h2 className="h2 section-title" id="instruction-label" data-reveal>How It Works</h2>
          <p className="section-text" data-reveal>
            Experience the joy of having delicious meals from your favorite local restaurants delivered directly to your doorstep. Enjoy a wide variety of cuisines and dishes with just a few simple steps. Here's how it works
          </p>
          <ul className="grid-list">
            <li data-reveal="left">
              <div className="instruction-card">
                <figure className="card-banner">
                  <img src={instruction1} width={300} height={154} loading="lazy" alt="Select Restaurant" className="w-100" />
                </figure>
                <div className="card-content">
                  <h3 className="h5 card-title">
                    <span className="span">01</span>
                    Select Restaurant
                  </h3>
                  <p className="card-text">
                    Browse our extensive list of local and popular restaurants to find your favorites. Use filters to narrow down your choices by cuisine, ratings, and more.
                  </p>
                </div>
              </div>
            </li>
            <li data-reveal>
              <div className="instruction-card">
                <figure className="card-banner">
                  <img src={instruction2} width={300} height={154} loading="lazy" alt="Select menu" className="w-100" />
                </figure>
                <div className="card-content">
                  <h3 className="h5 card-title">
                    <span className="span">02</span>
                    Select menu
                  </h3>
                  <p className="card-text">
                    Once you've chosen a restaurant, explore their menu to pick the dishes that tantalize your taste buds. Add items to your cart and customize your order with special instructions or dietary preferences.
                  </p>
                </div>
              </div>
            </li>
            <li data-reveal="right">
              <div className="instruction-card">
                <figure className="card-banner">
                  <img src={instruction3} width={300} height={154} loading="lazy" alt="Wait for delivery" className="w-100" />
                </figure>
                <div className="card-content">
                  <h3 className="h5 card-title">
                    <span className="span">03</span>
                    Wait for delivery
                  </h3>
                  <p className="card-text">
                    After placing your order, sit back and relax while our efficient delivery team brings your meal right to your doorstep. Track your order in real-time and get ready to enjoy fresh, delicious food in no time.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #TOP RESTAURANT
*/}
      <section className="section top-restaurant" aria-labelledby="top-restaurent-label">
        <div className="container">
          <ul className="grid-list">
            <li data-reveal="left">
              <h2 className="h2 section-title" id="top-restaurent-label">
                12 Best Restaurants in Your City
              </h2>
              <p className="section-text">
                Discover the top dining spots in your city, offering a variety of cuisines and exceptional dining experiences. Whether you're in the mood for a gourmet meal, a quick bite, or a cozy cafe, these restaurants have something to satisfy every craving. Here are our top picks
              </p>
            </li>
            <li data-reveal="right">
              <div className="restaurant-card">
                <div className="card-icon">
                  <img src={rest1} width={100} height={100} loading="lazy" alt="Kennington Lane Cafe" className="w-100" />
                </div>
                <h3 className="h5 card-title">Ginger Mint Nungamakkam</h3>
                <div className="rating-wrapper">
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star-outline" aria-hidden="true" />
                </div>
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta">american</a>
                  <a href="#" className="card-meta">steakhouse</a>
                </div>
                <p className="card-text">
                  Discover a taste of America at Ginger Mint Nungamakkam. Our steakhouse offers the finest cuts of meat, grilled to perfection and seasoned to delight your taste buds. Enjoy a warm and inviting atmosphere, perfect for a family dinner, a special celebration, or a casual night out.
                </p>
              </div>
            </li>
            <li data-reveal="left">
              <div className="restaurant-card">
                <div className="card-icon">
                  <img src={rest2} width={100} height={100} loading="lazy" alt="The Wilmington" className="w-100" />
                </div>
                <h3 className="h5 card-title">The Wilmington</h3>
                <div className="rating-wrapper">
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star-outline" aria-hidden="true" />
                </div>
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta">american</a>
                  <a href="#" className="card-meta">steakhouse</a>
                </div>
                <p className="card-text">
                  Immerse yourself in the epitome of American culinary excellence at The Wilmington. As a distinguished steakhouse, we pride ourselves on delivering an unparalleled dining experience. 
                </p>
              </div>
            </li>
            <li data-reveal="right">
              <div className="restaurant-card">
                <div className="card-icon">
                  <img src={rest3} width={100} height={100} loading="lazy" alt="Kings Arms" className="w-100" />
                </div>
                <h3 className="h5 card-title">Kings Arms</h3>
                <div className="rating-wrapper">
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star-outline" aria-hidden="true" />
                </div>
                <div className="card-meta-wrapper">
                  <a href="#" className="card-meta">american</a>
                  <a href="#" className="card-meta">healthy</a>
                </div>
                <p className="card-text">
                  Step into Kings Arms and embark on a journey of wholesome indulgence. Our commitment to healthy living meets American culinary excellence, offering a menu that tantalizes taste buds while honoring your well-being.
                </p>
              </div>
            </li>
          </ul>
          <a href="#" className="btn btn-secondary has-after">
            <span className="span">See All</span>
            <ion-icon name="arrow-forward" aria-hidden="true" />
          </a>
        </div>
      </section>
      {/* 
  - #CTA
*/}
      <section className="section cta has-bg-image" aria-labelledby="cta-label" style={{backgroundImage: 'url("./assets/images/hero-bg.png")'}}>
        <div className="container">
          <figure className="cta-banner" data-reveal="left">
            <img src={ctabanner} width={680} height={704} loading="lazy" alt="cta banner" className="w-100" />
          </figure>
          <div className="cta-content" data-reveal="right">
            <h2 className="h3 section-title" id="cta-label">
              Food from your favorite restaurants to your table
            </h2>
            <p className="section-text">
              Indulge in the flavors you love without leaving your home. With our food delivery service, savor the finest dishes from your favorite local restaurants delivered right to your doorstep. Whether it's a gourmet feast, a comforting meal, or an exotic treat, enjoy restaurant-quality dining in the comfort of your own home. Bon appétit!
            </p>
            <a href="#" className="btn btn-primary has-after">Order Now</a>
          </div>
        </div>
      </section>
      {/* 
  - #STATS
*/}
      <section className="stats" aria-label="statistics" data-reveal>
        <div className="container">
          <ul className="grid-list">
            <li>
              <h2 className="h3 section-title">Service shows good taste.</h2>
            </li>
            <li className="stats-item">
              <span className="span">976</span>
              <p className="stats-text">
                Satisfied <br />
                Customer
              </p>
            </li>
            <li className="stats-item">
              <span className="span">12</span>
              <p className="stats-text">
                Best <br />
                Restaurants
              </p>
            </li>
            <li className="stats-item">
              <span className="span">1K+</span>
              <p className="stats-text">
                Food <br />
                Delivered
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #TESTIMONIALS
*/}
      <section className="section testi" aria-labelledby="testi-label">
        <div className="container">
          <div className="testi-content" data-reveal="left">
            <h2 className="h2 section-title" id="testi-label">What customers say about us</h2>
            <blockquote className="testi-text">
              "I am beyond impressed with the service! The variety of restaurants available is fantastic, and the food always arrives hot and fresh. The delivery is super quick, and the drivers are always friendly. It's my go-to app for ordering food. Highly recommend to anyone looking for a convenient and reliable food delivery service!"
            </blockquote>
            <div className="wrapper">
              <img src={Srikrishnan} width={70} height={70} loading="lazy" alt="Thomas Adamson" className="author-img" />
              <div>
                <p className="author-title">Srikrishnan Velayutham</p>
                <div className="rating-wrapper">
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                  <ion-icon name="star" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <figure className="testi-banner" data-reveal="right">
            <img src={testimonialbanner} width={680} height={588} alt="testimonial banner" className="w-100" />
          </figure>
        </div>
      </section>
      {/* 
  - #PARTNERSHIP
*/}
      <section className="section partnership" aria-label="partnership">
        <div className="container">
          <h2 className="h2 section-title" data-reveal>Want to Join Partnership?</h2>
          <ul className="grid-list">
            <li data-reveal="left">
              <div className="partnership-card">
                <figure className="card-banner img-holder" style={{width: 640, height: 402}}>
                  <img src={partner1} width={640} height={402} loading="lazy" alt="Join Courier" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h5 card-title">Join Courier</h3>
                  <a href="#" className="btn btn-primary has-after">
                    <span className="span">Learn More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li data-reveal="right">
              <div className="partnership-card">
                <figure className="card-banner img-holder" style={{width: 640, height: 402}}>
                  <img src={partner2} width={640} height={402} loading="lazy" alt="Join Merchant" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h5 card-title">Join Merchant</h3>
                  <a href="#" className="btn btn-primary has-after">
                    <span className="span">Learn More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #NEWSLETTER
*/}
      <section className="section newsletter" aria-label="newsletter">
        <div className="container">
          <figure className="newsletter-banner" data-reveal="left">
            <img src={newsletter} width={680} height={405} loading="lazy" alt="Illustration" className="w-100" />
          </figure>
          <div className="newsletter-content" data-reveal="right">
            <h2 className="h4 section-title">
              Get the menu of your favorite restaurants every day
            </h2>
            <div className="input-wrapper">
              <input type="email" name="email_address" placeholder="Enter email address" required className="input-field" />
              <button type="submit" className="btn btn-primary has-after">
                <ion-icon name="notifications-outline" aria-hidden="true" />
                <span className="span">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer className="footer">
    <div className="container">
      <div className="section footer-top grid-list">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src={logofooter} width={148} height={38} alt="fasteat home" />
          </a>
          <h2 className="h2 section-title">The Best Restaurants in Your Home</h2>
          <p className="section-text">
            Enjoy the finest dining experiences from the comfort of your own home. With our food delivery service, we've got you covered. 
          </p>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title h5">Menu</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <span className="span">Home</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <span className="span">About Us</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <span className="span">Restaurants</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <span className="span">Contacts</span>
              <ion-icon name="arrow-forward" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title h5">Contacts</p>
          </li>
          <li>
            <address className="address">
              <ion-icon name="location" aria-hidden="true" />
              <span className="span">Rajiv Gandhi Salai (OMR), Kalavakkam - 603 110, Tamil Nadu, India</span>
            </address>
          </li>
          <li>
            <a href="mailto:quickeat@mail.net" className="footer-link">
              <ion-icon name="mail" aria-hidden="true" />
              <span className="span">velurosanro@mail.net</span>
            </a>
          </li>
          <li>
            <a href="tel:+12344567890" className="footer-link">
              <ion-icon name="call" aria-hidden="true" />
              <span className="span">+91 73585 28344</span>
            </a>
          </li>
          <li>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright 2024 DBMS-111-112-139. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
</div>

    );
}

export default HomePage;
