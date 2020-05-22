import React from "react"
import {Button} from "antd-mobile"

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Page, Not Found</h2>
          <Button
            type="primary"
            onClick={() => this.props.history.replace("/")}
          >
            Home
          </Button>
        </div>
      </div>
    )
  }
}

export default NotFound