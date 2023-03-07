import React from "react";
import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";
class MagicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: true
    }
  }

  changeCollor = () => {
    const { isRed } = this.state;
    //const current_color = isRed ? 'green' : 'red';
    this.setState({ isRed: !isRed })
    //document.getElementById("color_btn").style.background=current_color;
  }

  render() {
    console.log('render');
    const { isRed } = this.state;
    const current_color = isRed ? 'red' : 'green';
    return <Button onClick={this.changeCollor} color={current_color} appearance='primary' size='large'>{isRed ? "Red" : "Green"}
    </Button>
  }
}

export default MagicButton;