import React from "react";

import ExampleWorker from "../webworkers/example.worker";

export default class extends React.Component {
  state = { latestMessage: null };
  componentDidMount() {
    // Instantiate the Worker
    if (window) {
      this.worker = new ExampleWorker();
      this.worker.postMessage("from Host");
      this.worker.addEventListener("message", this.onWorkerMessage);
    }
  }
  componentWillUnmount() {
    // Close the Worker thread
    this.worker.terminate();
  }
  onWorkerMessage = event => this.setState({ latestMessage: event.data });
  render() {
    return <h1>Message from Worker: {this.state.latestMessage}</h1>;
  }
}
