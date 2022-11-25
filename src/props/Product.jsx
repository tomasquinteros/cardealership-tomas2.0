import { FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";


const Product = ({array, company}) => {
return (
   <main>
      <h1 className="models">Models</h1>
      <div className="content">
      <h3 className="marca">{company}</h3>
      <section className="cards">
         {array.map((car) => (
            <article
            className="card"
            style={{
               backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${car.img})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            >
            <div>
               <h4>{car.name}</h4>
               <p>USD {car.price}</p>
            </div>
            <div className="buttons">
               <a href="www.mercedes-benz.com" className="btns btn-config">
                  <FaExternalLinkAlt />
                  <span>Configure</span>
               </a>
               <a href="." className="btns btn-description">
                  <FaAngleRight />
                  <span>General description</span>
               </a>
            </div>
            </article>
         ))}
      </section>
      {/* <h3 className="marca">MERCEDES BENZ</h3>
      <section className="cards">
         {arrayMercedes.map((car) => (
            <article
            className="card"
            style={{
               backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${car.img})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            >
            <div>
               <h4>{car.name}</h4>
               <p>USD {car.price}</p>
            </div>
            <div className="buttons">
               <a href="www.mercedes-benz.com" className="btns btn-config">
                  <FaExternalLinkAlt />
                  <span>Configure</span>
               </a>
               <a href="." className="btns btn-description">
                  <FaAngleRight />
                  <span>General description</span>
               </a>
            </div>
            </article>
         ))}
   </section>
   <h3 className="marca">BMW</h3>
   <section className="cards">
         {arrayBMW.map((car) => (
            <article
            className="card"
            style={{
               backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${car.img})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            >
            <div>
               <h4>{car.name}</h4>
               <p>USD {car.price}</p>
            </div>
            <div className="buttons">
               <a href="www.porsche.com" className="btns btn-config">
                  <FaExternalLinkAlt />
                  <span>Configure</span>
               </a>
               <a href="." className="btns btn-description">
                  <FaAngleRight />
                  <span>General description</span>
               </a>
            </div>
            </article>
         ))}
      </section>
      <h3 className="marca">PORSCHE</h3>
      <section className="cards">
         {arrayPorsche.map((car) => (
            <article
            className="card"
            style={{
               backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${car.img})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
            }}
            >
            <div>
               <h4>{car.name}</h4>
               <p>USD {car.price}</p>
            </div>
            <div className="buttons">
               <a href="www.porsche.com" className="btns btn-config">
                  <FaExternalLinkAlt />
                  <span>Configure</span>
               </a>
               <a href="." className="btns btn-description">
                  <FaAngleRight />
                  <span>General description</span>
               </a>
            </div>
            </article>
         ))}
      </section> */}
      </div>
   </main>
);
};

export {Product}