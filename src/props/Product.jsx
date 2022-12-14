import { FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";
import '../pages/Products/_product.scss'

const Product = ({array, company}) => {
return (
   <main>
      <div className="content">
         <h3 className="marca">{company}</h3>
         <section className="cards">
            {array.map(({img, name, price, id}) => (
               <article 
               key={id}
               className="card"
               style={{
                  backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
               }}
               >
                  <div className="title">
                     <h4>{name}</h4>
                     <p>USD {price}</p>
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
      </div>
   </main>
);
};

export {Product}