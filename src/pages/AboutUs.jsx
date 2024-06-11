import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    function revealFounders() {
        setIsScrollEnabled(true);

        const button = document.querySelector('.glow-on-hover');
        button.classList.add('hide');
        setTimeout(() => {
            button.classList.add('hidden');
        }, 500); // Wait for the opacity transition to complete

        const founders = document.getElementById('founders');
        founders.style.display = 'flex';
        setTimeout(() => {
            founders.style.opacity = '1';
            founders.style.transform = 'translateY(0)';
            document.querySelectorAll('.card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('revealed');
                }, index * 100);
            });
        }, 50);
    }

    return (
        <div className={`container ${isScrollEnabled ? 'scroll-enabled' : ''}`}>
            <div className="scroll-bg-container">
                <div className="scroll-bg"></div>
            </div>
            <div className="content">
                <h1>About Us</h1>
                <p>We believe that great food should be accessible to everyone 🍽️, which is why we've handpicked the best
                    local restaurants to partner with. From cozy cafes ☕ to upscale eateries 🍷, each establishment in our
                    network shares our commitment to quality and taste. With FastEat, you can indulge in your favorite
                    dishes 🍕🍔🍣, prepared with care and delivered with speed 🚀.</p>

                <h2>Our Mission</h2>
                <p>At FastEat, our mission is to connect people with the best local restaurants through seamless delivery
                    services 🚚. We aim to make quality food accessible to everyone 🍽️, enhancing your dining experience
                    with convenience and speed ⏩.</p>

                <h2>Our Vision</h2>
                <p>Our vision is to revolutionize the way people order food 🌟. We strive to become the most reliable and
                    efficient food delivery platform 🛵, continuously innovating to meet and exceed customer expectations
                    🚀.
                </p>

                <button className="glow-on-hover" onClick={revealFounders}>{'Hide Team 🍜'}</button>

                <div id="founders" className="card-container">
                    <div className="card">
                        <img src="https://functionjigsaw.co.uk/wp-content/uploads/2021/05/dale_resizedArtboard-3-1.png"
                            alt="Rohith Venkatakrishnan" />
                        <h3>Rohith Venkatakrishnan</h3>
                        <p>Co-Founder & CEO</p>
                        <p>Rohith is passionate about leveraging technology to improve the food delivery experience for
                            customers and restaurants alike.</p>
                    </div>
                    <div className="card">
                        <img src="https://res.cloudinary.com/launchlist/image/upload/v1657439774/assets/web/haroon_n794yt.png"
                            alt="Rosan David" />
                        <h3>Rosan David</h3>
                        <p>Co-Founder & CTO</p>
                        <p>Rosan David leads our technology team, ensuring our platform is both robust and user-friendly.
                        </p>
                    </div>
                    <div className="card">
                        <img src="https://thepeople.co.za/wp-content/uploads/2022/08/Tlholo-Modiba.png"
                            alt="Srikrishnan Velayutham" />
                        <h3>Srikrishnan Velayutham</h3>
                        <p>Co-Founder & COO</p>
                        <p>Srikrishnan Velayutham manages our operations, making sure our deliveries are timely and our
                            customers are satisfied.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
