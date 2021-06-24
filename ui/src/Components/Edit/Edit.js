import '../AddController/AddController.css'
import { Component ,React} from "react";
import ToggleSwitch from '../CommonComponent/ToggleSwitch/ToggleSwitch';
import { Button,Dropdown} from 'react-bootstrap';
import UserWishlist from '../CommonComponent/UserWishlist/UserWishlist'

class EditController extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            mode : false,
            target: "Choose Target",
            projectName:"",
            serviceName:"",
            featureName:"",
        }
        this.file = null
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log(id);

        //axios

    }

    updateProjectName(event){
        this.setState({projectName : event.target.value});
    }

    updateServiceName(event){
        this.setState({serviceName : event.target.value});
    }

    updateFeatureName(event){
        this.setState({featureName : event.target.value});
    }

    selectTarget(target){
        if(target==="Group"){
            this.setState({target:"Group"})
            
        }else{
            this.setState({target:"Global"})
        } 
    }

    saveData(){
        if(this.state.projectName===""||this.state.serviceName===""||this.state.featureName===""||this.state.target==="Choose Target"){
            alert("Please fill up all field in this form.")
        }else if(this.state.target==="Group"&&this.file===null){
            alert("Please upload file.")
        }else{
            let text = "projectName : "+this.state.projectName+"\n serviceName : "+this.state.serviceName+"\n featureName : "+this.state.featureName+"\n serviceName : "+this.state.serviceName+"\n Target : "+this.state.target+"\n mode : "+!this.state.mode+"\n file : "+this.file
            alert(text)
            
            //axios
            this.props.history.push(`/dashboard`)
        }     
    }

    handleUserWishlist = (file) =>{
        this.setState({file: file})
        this.file = file
    }

    handleToggleMode = (childData) =>{
        this.setState({mode: childData.mode})
        console.log(childData)
    }

    
    render(){
    return (
        <div className="container-fluid maincontainer">
             <div className="newheader row ">
                <div className="innerheader row col-9">
                    <h1>Edit Controller</h1>
                </div>         
             </div>
             <div className="formcontainer row">
               <div className="innerformcontainer col-9 row">
                    <div className="formhead col-12" >
                        Edit Controller
                    </div>
                    <div className="formbody col-12 row" >
                        <div className="inputgroup row col-11">
                            <p className="text col-12">Project Name</p>
                            <input placeholder="Project Name" onChange={evt=>this.updateProjectName(evt)} className="form-control input col-12" />
                        </div>
                        <div className="inputgroup row col-11">
                            <p className="text col-12">Service Name</p>
                            <input placeholder="Service Name" onChange={evt=>this.updateServiceName(evt)} className="form-control input col-12" />
                        </div>
                        <div className="inputgroup row col-11">
                            <p className="text col-12">Feature Name</p>
                            <input placeholder="Feature Name" onChange={evt=>this.updateFeatureName(evt)} className="form-control input col-12" />
                        </div>
                        <div className="inputgroup row col-11">
                            <div className="targetgroup row">
                                <p className="text-2 col-2">Target</p>
                                <Dropdown className="col-2 drop">
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className="chosedroupdown">
                                       {this.state.target}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href="" onSelect={()=> this.selectTarget("Group")}>Group</Dropdown.Item>
                                        <Dropdown.Item href="" onSelect={()=> this.selectTarget("Global")}>Global</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <p className="text-2 col-2">Mode</p>
                                <ToggleSwitch parentCallback = {this.handleToggleMode} initMode={this.state.mode} />
                            </div>
                            <UserWishlist parentCallback={this.handleUserWishlist} initFile={this.state.mode==="Group"? this.state.file : null} initMode={this.state.target}/>    
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
export default(EditController);