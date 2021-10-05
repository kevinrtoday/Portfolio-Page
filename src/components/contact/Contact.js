import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://i.postimg.cc/Th8zXDpk/pexels-negative-space-92904.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit"> Send</button>
          {message && <span>Thank you, I'll be replying soon! </span>}
        </form>
      </div>
    </div>
  );
}
