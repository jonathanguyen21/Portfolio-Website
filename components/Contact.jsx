import FadeInWhenVisible from "./FadeInWhenVisible";

export const Contact = () => {
  return (
    <FadeInWhenVisible>
      <div className="container contact" id="contact">
        <form
          action="https://formsubmit.co/jonathandnguyen21@gmail.com"
          method="POST"
        >
          <h3 className="contact__h3">GET IN TOUCH</h3>
          <h4 className="contact__h4">
            Reachable at:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jonathandnguyen21@gmail.com"
              target="_blank"
              className="contact__email"
            >
              jonathandnguyen21@gmail.com
            </a>
          </h4>
          <input type="text" name="name" placeholder="Your Name *" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
          />
          <input type="tel" name="phone" placeholder="Phone" />
          <textarea name="message" rows="4" placeholder="Message *"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </FadeInWhenVisible>
  );
};
