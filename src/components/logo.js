import React, { Component } from "react";

let limit = -Infinity;

function Span({ posicion, size, letter }) {
  limit = size > limit ? size : limit;
  const styles = {
    fontSize: `${size}px`,
  };
  return <span style={styles}>{letter}</span>;
}

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [...props.logo],
      long: ([...props.logo].length - 1) / 2,
    };
  }
  render() {
    return (
      <p className="logo">
        {this.state.array.map((el, index) => (
          <Span
            key={index}
            posicion={index}
            size={22 + Math.pow(Math.abs(index - this.state.long), 1.3)}
            letter={el}
          />
        ))}
      </p>
    );
  }
}
