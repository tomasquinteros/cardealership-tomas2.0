import { useForm } from "react-hook-form"


const Contact = ()=> {
   const {register, formState: {errors} ,handleSubmit} = useForm()


   return (
      <main className="Contact">
         <div className="max-content contacto">
            <h1>Contact Me</h1>
            <section className="contacts">
               <div className="fast-contact">
                  <h4>Get in touch</h4>
                  <p>Email: service-assistant@cardealership.com</p>
                  <p>Phone: +1 555 1236</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis ut nemo.</p>
               </div>
               <div className="form-contact">
                  <form onSubmit={handleSubmit((data) => console.log(data))}>
                     <ul>
                        <li>
                           <input  
                           {...register("Name", {
                              required:"Username is required",
                              message: "Username is required"
                           })} 
                           type="text" 
                           placeholder="Name"
                           />
                           <span>{errors.Name?.message}</span>
                        </li>
                        <li>
                           <input  {...register("email", {
                              required: "Email is required",
                              pattern: {
                                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                 message: "Email is required"
                              }
                           })} 
                           type="email" placeholder="Email"/>
                           <span>{errors.email?.message}</span>
                        </li>
                     </ul>
                     <textarea {...register("textArea", {
                        required:"Message is required",
                        message:"Your comment is empty, write something to be able to send"
                     })} cols="30" rows="10" placeholder="Enter the message you want send"
                     />
                     <span>{errors.textArea?.message}</span>
                     <input type="submit" value="Send"/>
                  </form>
               </div>
            </section>
         </div>
      </main>
   )
}

export {Contact}