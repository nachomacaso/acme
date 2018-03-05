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

class SearchAcme extends Component {
    constructor(props) {
        super(props);
        this.state = { acmeItems: [], itemLink: "" };
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount(){
        let defaultAcmeItems = [
            {title: "Sledgehammer", price: "$100", address: "2334 Matthews Street", city: "Sterling", state: "IL", zip: "61081", tags: ["thor, wiley, coyote"], notes: ""}, 
            {title: "Bird Seed", price: "$10", address: "2559 Henry Ford Avenue", city: "New York", state: "NY", zip: "10016", tags: ["chirp, roadrunner, seed"], notes: ""}, 
            {title: "Nitroglycern", price: "$150", address: "1250 Rockford Road", city: "Reno", state: "NV", zip: "89501", tags: ["boom, tnt, explosives"], notes: ""}, 
        ];
        let acmeStorage = localStorage.getItem('acme');
        if(!acmeStorage) {
            localStorage.setItem('acme', JSON.stringify(defaultAcmeItems));
            acmeStorage = localStorage.getItem('acme');
        }
        console.log("acme items : ", acmeStorage);
        let acmeObjs = JSON.parse(acmeStorage);
        this.setState({ acmeItems: acmeObjs });
    }

    handleRowSelection(e) {
        let index = e[0];
        let acmeLink = '/' + index +'/edit';
        this.state.itemLink = acmeLink;
    }

    handleEdit() {
        console.log(this.acmeLink);
        this.setState();
    }

    render() {
        let items = this.state.acmeItems;
        var acmeList = items.map((element, i) => {
        return (
            <TableRow key={i}>
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
            <h1>Acme Inventory Search</h1>
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
            <Link to="/create">
                <RaisedButton label="Add Item" primary={true}/>
            </Link>
            &nbsp;
            &nbsp;
            <Link to={this.state.itemLink}>
                <RaisedButton label="Edit Selected Item" secondary={true} onClick={this.handleEdit}/>
            </Link>
        </div>
        );
    }
}

export default SearchAcme;