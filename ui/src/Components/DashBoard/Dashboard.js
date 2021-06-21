import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import jsonData from './data.json'
import { Component } from "react";
import ToggleSwitch from '../CommonComponent/ToggleSwitch/ToggleSwitch';
class Dashboard extends Component{
    
    state={
        data:[]
    }

    componentDidMount(){
        this.setState({data:jsonData })
    }
    
    editMode(index){
        let tempData = this.state.data
        tempData[index].mode = !tempData[index].mode
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
                <div className="controlcard row ">
                        <div className="col-2 text-break cardtext" >{item.project}</div>
                        <div className="col-2 text-break cardtext" >{item.service}</div>
                        <div className="col-4 text-break cardtext" >{item.feature}</div>
                        <div className="col-1 cardtext" > <i className="tiny material-icons">{item.target==="Global"? "language" : "group"}</i> </div>
                        <div className="col-2 cardtext" >
                            <label className="toggle-switch">
                                <input type="checkbox" checked={item.mode} onChange={() => this.editMode(index)}/>
                                <span className="switch" />
                            </label>
                        </div>
                        <div className="col-1 cardtext" ><i className="tiny material-icons editicon">edit</i> <i className="tiny material-icons deleteicon">delete</i></div>  
                    </div>
              );
            })}
                </div>
             </div>
        </div>
    );
    }
}
export default(Dashboard);