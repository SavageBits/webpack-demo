import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div>
        hello, { this.props.name }
      </div>
    );
  }
});
