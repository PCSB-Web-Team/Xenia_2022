import React from "react";
import createClass from "create-react-class";

var Iframe = createClass({
  render: function () {
    return (
      <div>
        <iframe
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  },
});

const Home2 = () => {
  return (
    <div>
      <Iframe
        src="https://sd5ptr.csb.app/"
        height="500"
        width="500"
      />
    </div>
  );
};

export default Home2;
