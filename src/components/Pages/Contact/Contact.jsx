import { useState } from "react"
import { useForm } from "react-hook-form"

const Contact = () => {
   const { register, formState: { errors }, handleSubmit } = useForm()
   const [viewModal, setViewModal] = useState(false);
   function completed() {
      if (errors.Name?.message || errors.email?.message || errors.textArea?.message) {
         console.log(errors.Name?.message)
         return false
      } else {
         return true
      }
   }
   return (
      <main className="Contact">
         {
            viewModal & completed() ?
            <div className="Overlay">
            <section className="modal">
               <img src="/images/confirmate.png" alt="confirmate" />
               <h1>Thank You</h1>
               <p>We will contact you soon</p>
               <p>Thanks!</p>
               <button onClick={() => { setViewModal(!viewModal) }} >Accept</button>
            </section>
         </div> : console.log("Loading click submit ")
         }
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
                     <div>
                        <div style={{ margin: "0px" }}>
                           <input
                              {...register("Name", {
                                 required: "Username is required",
                                 message: "Username is required"
                              })}
                              type="text"
                              placeholder="Name"
                           />
                           <span>{errors.Name?.message}</span>
                        </div>
                        <div style={{ margin: "0px" }}>
                           <input  {...register("email", {
                              required: "Email is required",
                              pattern: {
                                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                 message: "Email is required"
                              }
                           })}
                              type="email" placeholder="Email" />
                           <span>{errors.email?.message}</span>
                        </div>
                     </div>
                     <textarea {...register("textArea", {
                        required: "Message is required",
                        message: "Your comment is empty, write something to be able to send"
                     })} cols="30" rows="10" placeholder="Enter the message you want send"
                     />
                     <span>{errors.textArea?.message}</span>
                     <input onClick={() => { setViewModal(!viewModal) }} type="submit" value="Send" />
                  </form>
               </div>
            </section>
         </div>
      </main>
   )
}

export { Contact }