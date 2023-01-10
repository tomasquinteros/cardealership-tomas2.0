import { Carousel } from "../../Carousel"
import { SliderData } from "../../../data/SliderData"
import { Slider } from "./Slider"

const hero = ["./images/heroHome/image4.webp", "./images/heroHome/image1.webp", "./images/heroHome/image2.webp", "./images/heroHome/image3.webp"]

const Home = () => {
   return (
      <main className="Home">
         <section>
            <Carousel hero={hero} class="hero_home" />
         </section>
         <section className="max-content">
            <article className="car_dealership">
               <h1>Cardealership</h1>
               <Slider slides={SliderData} />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae fuga deleniti enim illo veniam ut numquam sapiente reiciendis voluptate at quibusdam, neque, quisquam nulla veritatis iure, voluptatem recusandae hic?
                  Tempora quo nesciunt placeat neque aliquam, nemo laudantium pariatur! Cupiditate atque doloribus accusamus dolorum impedit, vero omnis at repellat iste incidunt laboriosam dolore ipsam, tempora porro doloremque. Accusantium, ab saepe</p>
               <img src="/images/heroHome/imag2Home.webp" alt="" />
            </article>
         </section>
      </main>)
}

export { Home }