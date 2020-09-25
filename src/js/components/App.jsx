import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header } from "./header/header.component.tsx";
import { Contact } from "./contact/contact.component.tsx";
import { Experience } from "./experience/experience.component.tsx";
import { Projects } from "./projects/projects.component.tsx";
import { Education } from "./education/education.component.tsx";
import { Miscellaneous } from "./miscellaneous/miscellaneous.component.tsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Contact />
        <Experience />
        <Projects />
        <Education />
        <Miscellaneous />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;