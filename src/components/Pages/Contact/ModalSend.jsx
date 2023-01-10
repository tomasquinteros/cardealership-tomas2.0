import { useState } from "react"

const ModalSend = () => {
   const [view, setView] = useState(true)
   return <>
      {view && <div className="Overlay">
         <section className="modal">
            <img src="/images/confirmate.png" alt="confirmate" />
            <h1>Thank You</h1>
            <p>We will contact you soon</p>
            <p>Thanks!</p>
            <button onClick={() => { setView(!view) }} >Accept</button>
         </section>
      </div>
      }
   </>
}

export { ModalSend }