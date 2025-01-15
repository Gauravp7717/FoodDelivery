import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="about-container">
        <h1>count :{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increacse count
        </button>
        <h1>name :{name}</h1>
        <h1>Location : {location}</h1>
        <h1>country : India</h1>
      </div>
    );
  }
}

export default User;
