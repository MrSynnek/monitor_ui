import "./AddController.css";
import { Component ,React} from "react";
import ToggleSwitch from '../CommonComponent/ToggleSwitch/ToggleSwitch';
import { Button,Dropdown} from 'react-bootstrap';
import UserWhitelist from '../CommonComponent/UserWishlist/UserWishlist'

class NewController extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            mode : false,
            isFlutter : false,
            target: "Choose Target",
            projectName:"",
            serviceName:"",
        }
        this.file = null
    }

    updateProjectName(event){
        this.setState({projectName : event.target.value});
    }

    updateServiceName(event){
        this.setState({serviceName : event.target.value});
    }

    selectTarget(target){
        if(target==="Group"){
            this.setState({target:"Group"})
            
        }else{
            this.setState({target:"Global"})
        } 
    }

    saveData(){
        if(this.state.projectName===""||this.state.serviceName===""||this.state.target==="Choose Target"){
            alert("Please fill up all field in this form.")
        }else if(this.state.target==="Group"&&this.file===null){
            alert("Please upload file.")
        }else{
            let text = "projectName : "+this.state.projectName+"\n serviceName : "+this.state.serviceName+"\n serviceName : "+this.state.serviceName+"\n Target : "+this.state.target+"\n mode : "+this.state.mode+"\n isFlutter : "+this.state.isFlutter+"\n file : "+this.file
            alert(text)

            //axios  
            this.props.history.push("/dashboard");
        }     
    }

    handleUserWhitelist = (file) =>{
        this.file = file
    }

    handleToggleMode = (data) =>{
        console.log( data.mode)
        this.setState({mode: !data.mode})
        console.log( this.state.mode)
    }

    handleFlutterToggle = (data) =>{
        this.setState({isFlutter: !data.mode})
        if(this.state.isFlutter===true) document.getElementById("modeDiv").style.visibility = "hidden" ;
        else document.getElementById("modeDiv").style.visibility = "visible";
    }

    render(){
    return (
        <div className="container-fluid maincontainer">
             <div className="newheader row ">
                <div className="innerheader row col-9">
                    <h1>New Controller</h1>
                </div>         
             </div>
             <div className="formcontainer row">
               <div className="innerformcontainer col-9 row">
                    <div className="formhead col-12" >
                        New Controller
                    </div>
                    <div className="formbody col-12 row" >
                        <div className="inputgroup row col-11">
                            <p className="text col-12">Feature Name</p>
                            <input placeholder="Feature Name" onChange={evt=>this.updateProjectName(evt)} className="form-control input col-12" />
                        </div>
                        <div className="inputgroup row col-11">
                            <p className="text col-12">Function Name</p>
                            <input placeholder="Function Name" onChange={evt=>this.updateServiceName(evt)} className="form-control input col-12" />
                        </div>
                        <div className="inputgroup row col-11">
                            <div className="targetgroup row">
                                <div className="col-6 row togglediv">
                                    <p className="col-2 text-2">isFlutter</p>
                                    <ToggleSwitch parentCallback = {this.handleFlutterToggle} initMode={this.state.isFlutter} />
                                    <p className="textstatus col-2">{this.state.isFlutter===true? "YES":"NO"}</p>
                                </div>
                                <div className="col-6 row togglediv" id="modeDiv">
                                    <p className="col-2 text-2" >Mode</p>
                                    <ToggleSwitch parentCallback = {this.handleToggleMode} initMode={this.state.mode} />
                                    <p className="textstatus col-2">{this.state.mode===true? "ON":"OFF"}</p>
                                </div>
                                <div className="col-6 row">
                                <p className="col-2 text-2">Target</p>
                                <Dropdown className="col-2 drop">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className=" chosedroupdown">
                                       {this.state.target}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href="" onSelect={()=> this.selectTarget("Group")}>Group</Dropdown.Item>
                                        <Dropdown.Item href="" onSelect={()=> this.selectTarget("Global")}>Global</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                            </div>
                            <UserWhitelist parentCallback={this.handleUserWhitelist} initFile={this.state.mode==="Group"? this.state.file : null} initMode={this.state.target}/>    
                        </div>
                    </div>
               </div>
            </div>
            <div className="bottombutton row">
                <Button variant="primary" onClick={() => this.props.history.push(`/dashboard`)} className="graybutton" >Cancle</Button>
                <Button variant="primary" onClick={() => this.saveData()} className="purplebutton"> 
                    <i className="tiny material-icons">save</i> Save
                </Button>
            </div>
        </div>
    );
    }
}
export default(NewController);