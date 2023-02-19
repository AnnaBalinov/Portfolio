import { Component } from "react";

export class ContactMe extends Component {
  render() {
    return (
      <section className="main-section contact-cmp">
        <div className="form-container">
          <div className="txt">Feel free to Contact me</div>
          <form
            action="https://formsubmit.co/annabalinov@gmail.com"
            method="POST"
          >
            <div className="l-i">
              <label htmlFor="exampleRecipientInput">Name</label>
              <input name="name" type="text" required />
            </div>
            <div className="l-i">
              <label htmlFor="exampleEmailInput">Email</label>
              <input name="email" type="email" required />
            </div>
            <div className="l-i">
              <label htmlFor="exampleMessage">Message</label>
              <textarea
                name="message"
                rows="10"
                required
                spellCheck="false"
              ></textarea>
            </div>
            <button className="submit-btn" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>

        <footer>&copy; Copyright 2023 Anna Balinov</footer>
      </section>
    );
  }
}
