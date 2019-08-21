import React, { Component, Fragment } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import Spinner from "../components/Spinner";
import "../components/Counter.css";

export class Counter extends Component {
  state = {
    counter: 0,
    results: [],
    isLoading: false
  };

  async componentDidMount() {
    this.getUser();
  }

  //fetch data from the api

  getUser = async () => {
    this.setState({ isLoading: true });
    const res = await Axios.get("https://randomuser.me/api/");
    console.log(res.data);
    this.setState({ results: res.data.results, isLoading: false });
  };

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    //map the data from the api to image, name, age format
    const imageList = this.state.results.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.picture.large} style={{ borderRadius: "50%" }} />
          <h1>
            {item.name.first} {item.name.last}
          </h1>
          <p>Age : {item.dob.age}</p>
        </div>
      );
    });

    //make the yes button disabled after 5 clicks
    const isEnabled = this.state.counter >= 5;

    //added spinner
    if (this.state.isLoading) {
      return <Spinner />;
    }

    return (
      <Fragment className="datingapp">
        <Navbar total={this.state.counter} />
        <div className="my-5">{imageList}</div>
        <div className="container mt-3">
          <div className="row">
            <div className="col" id="select-button">
              <button
                className=" btn  btn-dark btn-block "
                onClick={this.getUser}
              >
                No
              </button>
            </div>
            <div className="col yesButton " id="select-button">
              <button
                className="btn  btn-block yesButton text-white"
                onClick={this.handleIncrement}
                disabled={isEnabled}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
