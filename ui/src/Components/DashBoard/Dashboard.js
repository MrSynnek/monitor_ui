import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticallyCenteredModal from '../CommonComponent/Modal/Modal'
import { Button} from 'react-bootstrap';
import jsonData from './data.json'
import { Component } from "react";
import ToggleSwitch from '../CommonComponent/ToggleSwitch/ToggleSwitch';
class Dashboard extends Component{
    
    state={
        data:[],
        index:null,
        modal:false
    }
    
    toggleModal(){
        this.setState({modal:!this.state.modal})
    }

    componentDidMount(){
        this.setState({data:jsonData })
    }

    handleCallback = (childData) =>{
        let tempData = this.state.data
        tempData[childData.id].mode = !childData.mode
        this.setState({data:tempData })
    }

    render() {
    return (
        <div className="container-fluid maincontainer">
             <div className="header row ">
                <div className="innerheader row col-9">
                <h1>Feature Toggle Dashboard</h1>
                <div className="line"></div>
                <div className="search row col">
                    <input type="search" placeholder="Search" className="form-control whiteform" />
                    <Button variant="default" className="searchbutton">
                        <i className="tiny material-icons">search</i>  Search
                    </Button>
                    <Button variant="default" className="addbutton float-end" onClick={() => this.props.history.push(`/add`)}>
                        <i className="tiny material-icons">add</i>  Add
                    </Button>
                </div>
                </div>         
             </div>
             <div className="cardcontainer row">
                <div className="innercardcontainer col-9">
                    <div className="tablehead row">
                        <div className="col-2 headcol" >Project</div>
                        <div className="col-2 headcol" >Service</div>
                        <div className="col-4 headcol" >Feature</div>
                        <div className="col-1 headcol" >Target</div>
                        <div className="col-2 headcol" >Mode</div>
                        <div className="col-1 headcol" >Edit</div>
                    </div>
                    
                    {this.state.data.map((item, index) => {
                        return (
                            <div className="controlcard row "  key={index}>
                                <div className="col-2 text-break cardtext" >{item.project}</div>
                                <div className="col-2 text-break cardtext" >{item.service}</div>
                                <div className="col-4 text-break cardtext" >{item.feature}</div>
                                <div className="col-1 cardtext" > <i className="tiny material-icons">{item.target==="Global"? "language" : "group"}</i> </div>
                                <div className="col-2 cardtext" >
                                    <ToggleSwitch parentCallback = {this.handleCallback} initMode={item.mode} id={index} onClick={()=>this.editMode(index)}/>    
                                </div>
                                <div className="col-1 cardtext" ><i className="tiny material-icons editicon" onClick={() => this.props.history.push(`/add?id=${item.id}`)}>edit</i> <i className="tiny material-icons deleteicon" onClick={() => this.toggleModal()}>delete</i></div>  
                            </div>
                        );
                    })}
                </div>
             </div>
             <VerticallyCenteredModal 
                show={this.state.modal}
                onHide={() => this.toggleModal()}
                message="Do you want to delete this control?"
                head="Delete this control"
            />
        </div>
    );
    }
}
export default(Dashboard);