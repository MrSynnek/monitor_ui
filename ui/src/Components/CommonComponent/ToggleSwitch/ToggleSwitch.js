import "./ToggleSwitch.css";
import { React,Component} from "react";

class ToggleSwitch extends Component {
 
  constructor(props){
    super(props)
    this.state={
      mode : this.props.initMode,
      id : this.props.id
    }
  }

  onToggle(){
    this.setState({mode: !this.state.mode})
    this.props.parentCallback(this.state);
  }

  render(){
    
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={this.state.mode} onChange={()=>this.onToggle()} />
        <span className="switch" />
      </label> 
    );
  }
}

export default(ToggleSwitch);