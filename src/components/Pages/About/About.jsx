import Iframe from "react-iframe";
const About = () => {
   return (
      <main className="About">
         <section className="heroAbout">
            <h1>About us</h1>
            <p>We offer you the best quality of service such as cars</p>
         </section>
         <section className="info-about max-content">
            <div className="company">
               <div className="values">
                  <h4>Our values as a company</h4>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                     explicabo soluta sit perspiciatis ex veniam, provident vero,
                     quidem necessitatibus quia vitae tempora ad rerum amet cumque
                     porro nam voluptatibus sapiente!
                  </p>
               </div>
               <div className="CEO">
                  <h6>Chris Ferrer</h6>
                  <span>CEO & Founder</span>
                  <img src="/images/heroAbout/CEO.jpg" alt="ceo" />
               </div>
            </div>
            <div className="generate-about">
               <h5>What are we looking to generate?</h5>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
                  ullam non dolores est iste mollitia quae obcaecati eaque? Fugiat
                  quam, libero iusto suscipit magnam dolorum modi excepturi commodi
                  autem maxime.
               </p>
            </div>
            <div className="location">
               <h4>Our Location</h4>
               <Iframe
                  className="gps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1094339.8436028918!2d-75.16632238972936!3d40.74628904692526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9834d73689b%3A0xb8d4a3422f1ee562!2sAuto%20Gallery!5e0!3m2!1ses!2sar!4v1670469565298!5m2!1ses!2sar"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></Iframe>
            </div>
         </section>
      </main>
   );
};
export { About };
