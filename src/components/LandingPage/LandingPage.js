import { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header className="wrapper">
          <h1 className="text-intro">
            <span>French</span>
            <span>Bambin</span>
            <span>Library</span>{" "}
          </h1>
          <h2 className="text-intro">
            Sharing french culture one book at a time
          </h2>
        </header>{" "}
        <section className="wrapper">
          <header>
            <h3>
              <span>Browse books</span>
            </h3>
          </header>
          <p>
            French Bambin Library helps you connect with other parents and find
            books written in french.
          </p>
        </section>
        <section className="wrapper">
          <header>
            <h3>
              <span>Connect, share and exchange</span>
            </h3>
          </header>
          <p>
            French Bambin Library provides you with a quick and simple interface
            that helps you browse french books.
          </p>
          <p>Connect with the community to share and exchange.</p>
        </section>
        <section className="wrapper">
          <header>
            <h3>
              <span>Add books</span>
            </h3>
          </header>
          <p>
            French Bambin Library provides you with a quick and simple interface
            that helps you share and list your books.
          </p>
        </section>
        <ul className="colorful-border">
          <li className="colorful-border-blue"></li>
          <li className="colorful-border-aqua"></li>
          <li className="colorful-border-green"></li>
          <li className="colorful-border-yellow"></li>
          <li className="colorful-border-orange"></li>
        </ul>
      </div>
    );
  }
}

export default LandingPage;
