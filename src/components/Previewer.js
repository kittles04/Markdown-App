import React from "react";
import PropTypes from "prop-types";
import marked from "marked";

const Previewer = ({ markdown, previewText }) => {
  let options = {
    breaks: true,
    gfm: true,
  };
  return (
    <div id={"previewWrapper"}>
      <div
        id={"preview"}
        dangerouslySetInnerHTML={{
          __html: marked(previewText),
        }}
        dangerouslySetInnerHTML={{
          __html: marked(markdown, options),
        }}
      ></div>
    </div>
  );
};

Previewer.propTypes = {
  markdown: PropTypes.string,
  previewText: PropTypes.string,
};

export default Previewer;
