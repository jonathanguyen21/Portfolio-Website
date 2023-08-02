export const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <form
        action="https://formsubmit.co/jonathandnguyen21@gmail.com"
        method="POST"
      >
        <h3>GET IN TOUCH</h3>
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
  );
};
