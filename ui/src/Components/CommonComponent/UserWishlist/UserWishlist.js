
import { React,Component} from "react";
import { Form} from 'react-bootstrap';
import  "../UserWishlist/UserWishlist.css";
class UserWhitelist extends Component {
 
  constructor(props){
    super(props)
    this.state={
      selectedFile: null
    }
  }

  onChangeHandler = (event) =>{
    var file = event.target.files[0];
    console.log(this.validateSize(event));
    if(this.validateSize(event)){ 
      this.setState({selectedFile:file})
      this.props.parentCallback(file);
    }
    
  }
  // fileUploadHandler = () => {
  //   const data = new FormData()
  //   console.log(this.state.selectedFile);
  //   data.append('file', this.state.selectedFile)
  //   console.log(data);
  //   axios.post("http://localhost:8010/api/v1/upload", data)
  //     .then(res => { // then print response status
  //       toast.success('upload success')
  //     })
  //     .catch(err => { // then print response status
  //       toast.error('upload fail')
  //     })
  // };

  validateSize=(event)=>{
    let file = event.target.files[0];
    let size = 30000;
    let err = '';
    //console.log(file.size);
      if (file.size > size) {
      err = file.type+'is too large, please pick a smaller file\n';
      alert(err)
    }
    return true
  };

  render(){
    if(this.props.initMode==="Group"){
      return (
        <Form.File id="formcheck" className="row box">
          <Form.File.Label>User Whitelist</Form.File.Label>
          <Form.File.Input onChange={this.onChangeHandler} />
        </Form.File>
      );
    }
    else{
      return (
        <div className="vacant">
        </div>
      );
    }
    
  }
}

export default(UserWhitelist);