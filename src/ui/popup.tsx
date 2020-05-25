import * as React from "react";
import * as ReactDOM from "react-dom";

import "../styles/popup.css";

class Hello extends React.Component {
  render() {
    return (
      <div className="popup-padded">
        <h1>FullStory Debug Utility</h1>
        <div>
          <button
            onClick={() => {
              chrome.runtime.sendMessage("highlight_excluded");
            }}
          >
            Highlight Excluded Elements
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              chrome.runtime.sendMessage("highlight_masked");
            }}
          >
            Highlight Masked Elements
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              chrome.runtime.sendMessage("highlight_unmasked");
            }}
          >
            Highlight Un-Masked Elements
          </button>
        </div>
      </div>
    );
  }
}

// --------------

ReactDOM.render(<Hello />, document.getElementById("root"));
