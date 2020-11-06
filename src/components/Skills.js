import React, { Component } from "react";

class Skills extends Component {
  

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills
        .filter((i) => !i.soft)
        .sort((a, b) => b.level - a.level)
        .map((skill) => {
          var className = `bar-expand ${skill.soft ? "soft" : null}`;
          return (
            <div key={skill.name}>
              <em>{skill.name}</em>
              <div className="bar">
                <span
                  style={{ width: `${skill.level}%` }}
                  className={className}
                ></span>
              </div>
            </div>
          );
        });
      var softSkills = this.props.data.skills
        .filter((i) => i.soft)
        .sort((a, b) => b.level - a.level)
        .map((skill) => {
          var className = `bar-expand ${skill.soft ? "soft" : null}`;
          return (
            <div key={skill.name}>
              <em>{skill.name}</em>
              <div className="bar">
                <span
                  style={{ width: `${skill.level}%` }}
                  className={className}
                ></span>
              </div>
            </div>
          );
        });
    }

    return (
      <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <div className="skills">
                {skills}
                {softSkills}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
