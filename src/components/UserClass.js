import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "dummy_url",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SahithaDev");
    const json =
      await data.json(); /*it is imp that u mention await here , otherwise promise would be returned ,
    that is not ur actual data*/

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src="https://avatars.githubusercontent.com/u/191706916?v=4" />
        <h1>Name : {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}
export default UserClass;
