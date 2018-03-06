import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';

class SearchAcme extends Component {
    constructor(props) {
        super(props);
        this.state = { acmeItems: [], itemLink: "", selectedRow: "", openNotification: false };
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }

    componentWillMount(){
        let defaultAcmeItems = [
            {title: "Sledgehammer", price: "$100", address: "2334 Matthews Street", city: "Sterling", state: "IL", zip: "61081", tags: ["thor, wiley, coyote"], notes: "Peter Gabriel"}, 
            {title: "Bird Seed", price: "$10", address: "2559 Henry Ford Avenue", city: "New York", state: "NY", zip: "10016", tags: ["chirp, roadrunner, seed"], notes: "Tastes good!"}, 
            {title: "Nitroglycern", price: "$150", address: "1250 Rockford Road", city: "Reno", state: "NV", zip: "89501", tags: ["dangerous, tnt, explosives"], notes: "BOOM!"}, 
        ];
        let acmeStorage = localStorage.getItem('acme');
        if(!acmeStorage) {
            localStorage.setItem('acme', JSON.stringify(defaultAcmeItems));
            acmeStorage = localStorage.getItem('acme');
        }
        console.log("acme items : ", acmeStorage);
        let acmeObjs = JSON.parse(acmeStorage);

        let notificationProp = this.props.location.state;
        if(notificationProp){
            this.setState({ acmeItems: acmeObjs, openNotification: notificationProp["notification"] });
        } else {
            this.setState({ acmeItems: acmeObjs });
        }
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState['selectedRow'] == null) {
            return false;
        }
        return true;
    }

    handleRowSelection(e) {
        let index = e[0];
        this.setState({
            selectedRow: index,
            openNotification: false
         });
    }

    render() {

        let items = this.state.acmeItems;
        var acmeList = items.map((element, i) => {
            return (
            <TableRow key={i} selected={this.state.selectedRow === i}>
                <TableRowColumn >{element.title}</TableRowColumn>
                <TableRowColumn >{element.price}</TableRowColumn>
                <TableRowColumn >{element.address}</TableRowColumn>
                <TableRowColumn >{element.city}</TableRowColumn>
                <TableRowColumn >{element.state}</TableRowColumn>
                <TableRowColumn >{element.zip}</TableRowColumn>
                <TableRowColumn >{element.tags}</TableRowColumn>
                <TableRowColumn >{element.notes}</TableRowColumn>
            </TableRow>
            );
        });

        return (
        <div>
            <h3>Acme Inventory Search</h3>
            <Table onRowSelection={this.handleRowSelection}>
            <TableHeader>
                <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Address</TableHeaderColumn>
                <TableHeaderColumn>City</TableHeaderColumn>
                <TableHeaderColumn>State</TableHeaderColumn>
                <TableHeaderColumn>Zip Code</TableHeaderColumn>
                <TableHeaderColumn>Tags</TableHeaderColumn>
                <TableHeaderColumn>Notes</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {acmeList}
            </TableBody>
            </Table>
            <Snackbar
                open={this.state.openNotification}
                message="Acme inventory has been updated"
                autoHideDuration={4000}/>
            <br/>
            <br/>
            <Link to="/create">
                <RaisedButton label="Add Item" primary={true}/>
            </Link>
            &nbsp;
            &nbsp;
            { (this.state.selectedRow > 0 || this.state.selectedRow === 0 )
            ? <Link to={"/" + this.state.selectedRow + "/edit"}>
                <RaisedButton label="Edit Selected Item" secondary={true}/>
              </Link>
            : <Link to={"/search"}>
                <RaisedButton label="Edit Selected Item" secondary={true} disabled={true}/>
              </Link>
            }
        </div>
        );
    }
}

export default SearchAcme;