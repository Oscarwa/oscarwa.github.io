import React, { Component } from "react";

class Resume extends Component {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  formatDate = (val) => {
    if (val === "current") return "Current";
    const date = new Date(val);
    return `${this.months[date.getMonth()].substr(0, 3)} ${date.getFullYear()}`;
  };

  render() {
    if (this.props.data) {
      var education = this.props.data.education.map((education) => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map((work) => {
        const fromDate = this.formatDate(work.from);
        const toDate = this.formatDate(work.to);
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span>{" "}
              <em className="date">{`${fromDate} — ${toDate}`}</em>
            </p>
            <p>{work.description}</p>
            <p>
              Tools:
              {work.tools.map((tool, i) => (
                <span key={tool + i} className="badge">
                  {tool}
                </span>
              ))}
            </p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
