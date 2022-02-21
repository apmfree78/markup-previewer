import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Prism from "../prism";
import "../css/prism.css";

class HtmlMarkup extends React.Component {
  parseMarkup = (markupText) => {
    const html = DOMPurify.sanitize(marked.parse(markupText));
    return html;
  };

  render() {
    const parsedMarkup = this.parseMarkup(this.props.markup);
    // add syntax coloring
    const coloredMarkup = parsedMarkup.replace(
      /<code/g,
      "<code class='language-javascript'"
    );
    return (
      <div id='preview'>
        <h2>Html Preview</h2>
        {/* <code class='language-javascript'>const element = () => {};</code> */}
        <div dangerouslySetInnerHTML={{ __html: coloredMarkup }}></div>
        {/* {coloredMarkup} */}
      </div>
    );
  }
}

export default HtmlMarkup;
