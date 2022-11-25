import { Carousel } from "../../props/Carousel"
import { SliderData } from "../../data/SliderData"
import { Slider } from "./Slider"

const Hero = ["./images/heroHome/image4.jpg","./images/heroHome/image1.jpg" ,"./images/heroHome/image2.jpg","./images/heroHome/image3.jpg"]

const Home = () => {
   return (
   <main>
      <section>
         <Carousel hero={Hero} class="hero_home"/>
      </section>
      <section className="max-content">
         <article className="car_dealership">
            <h1>Company</h1>
            <Slider slides={SliderData}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae fuga deleniti enim illo veniam ut numquam sapiente reiciendis voluptate at quibusdam, neque, quisquam nulla veritatis iure, voluptatem recusandae hic?
            Tempora quo nesciunt placeat neque aliquam, nemo laudantium pariatur! Cupiditate atque doloribus accusamus dolorum impedit, vero omnis at repellat iste incidunt laboriosam dolore ipsam, tempora porro doloremque. Accusantium, ab saepe?
            Corporis, nam! Sint libero id error suscipit nesciunt voluptate numquam. Aliquid provident ad repudiandae autem neque reiciendis iste error! Dolores nulla obcaecati vitae voluptatem dolorem nihil deleniti cumque molestiae non.
            Saepe repudiandae non dolorum pariatur voluptate eaque commodi magnam voluptates aspernatur! Sit maiores libero, hic eum dolorem mollitia quae quo impedit quam veritatis consequuntur magnam illo quia quasi itaque molestias.
            Sint laboriosam, itaque ratione cupiditate corporis placeat voluptate velit error impedit, inventore ducimus, tempore aspernatur est rerum quae repellendus atque vero eaque eum doloremque vel omnis non sed. Dicta, iste?</p>
         </article>
      </section>
   </main>)
}

export {Home}