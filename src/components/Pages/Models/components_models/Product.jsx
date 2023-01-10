import '../_models.scss'
import Button from "./Button"

const Product = ({ array, company }) => {
   return (
      <main>
         <div className="Content">
            <h3 className="marca">{company}</h3>
            <section className="cards">
               {array.map(({ img, make, price, id, model }) => (
                  <article
                     key={id}
                     className="card"
                     style={{
                        backgroundImage: `linear-gradient(90deg, rgba(2,2,14,0.5) 35%, rgba(69,69,69,0) 100%) , url(${img[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                  >
                     <div className="title">
                        <h4>{model}</h4>
                        <p>USD {price}</p>
                     </div>
                     <div className="buttons">
                        <Button
                           model={model}
                           make={make}
                        />
                     </div>
                  </article>
               ))
               }
            </section>
         </div>
      </main>
   );
};

export { Product }