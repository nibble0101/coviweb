import React from "react";

function Section(props) {
  const { sections } = props;
  return (
    <div className="sections-wrapper">
      {sections.map((v, i) => {
        const {
          heading,
          details,
          source: { url, text },
        } = v;
        return (
          <section key={"section-" + i}>
            <h2 dangerouslySetInnerHTML = {{__html: heading}}/> 
            <p dangerouslySetInnerHTML = {{__html: details}} />
            <p>
              <a href={url} target="__blank" dangerouslySetInnerHTML = {{__html: text + '&#128279;'}}/>
            </p>
          </section>
        );
      })}
    </div>
  );
}

export default Section;