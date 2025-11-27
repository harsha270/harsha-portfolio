export default function ContactForm() {
  return (
    <form className="space-y-3 max-w-lg mx-auto">
      <input className="input" placeholder="Your Name" required />
      <input className="input" placeholder="Your Email" required />
      <textarea className="input" placeholder="Message" rows="4" required></textarea>
      <button className="btn w-full">Send Message</button>
    </form>
  );
}
