import React from "react";
import HtmlMarkup from "./HtmlMarkup";

class App extends React.Component {
  state = {
    markup: "",
  };

  handleChange = (event) => {
    //set value of state to current text in textarea box
    const markup = event.currentTarget.value;
    this.setState({ markup });
  };

  render() {
    const markup = this.state.markup;

    return (
      <div className='parcer'>
        <h2>Original Markup</h2>
        <textarea
          name='markup'
          id='editor'
          cols='50'
          rows='10'
          value={markup}
          onChange={this.handleChange}></textarea>
        <HtmlMarkup markup={this.state.markup} />
      </div>
    );
  }
}
export default App;
