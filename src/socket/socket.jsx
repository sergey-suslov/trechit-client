import React, {Component} from 'react';

class Socket extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    const socket = new WebSocket(`ws://localhost:1323/v1/socket?token=${token}`);

    socket.onopen = function () {
      this.socket = socket
    };

    socket.onmessage = function (e) {
      console.log('Message:', e.data)
      // TODO: implement message handling
    };
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.close()
    }
  }

  render() {
    return null;
  }
}

export default Socket;
