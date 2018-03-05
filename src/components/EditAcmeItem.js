import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import './EditAcmeItem.css';

class EditAcmeItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {}, 
            disableButton: false,
            title: "",
            price: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            stateValue: 1,
            tags: [],
            notes: "",
            index: ""
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);
        this.onNotesChange = this.onNotesChange.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    componentWillMount() {
        let storage = localStorage.getItem('acme');
        let storageObj = JSON.parse(storage)
        let url = this.props.match.url;
        let index = url.match(/[0-9]/g).join();
        this.setState({ data: storageObj[index], index: index });
    }

    componentDidMount() {
        this.setState({
            title: this.state.data["title"],
            price: this.state.data["price"],
            address: this.state.data["address"],
            city: this.state.data["city"],
            state: this.state.data["state"],
            zip: this.state.data["zip"],
            tags: this.state.data["tags"],
            notes: this.state.data["notes"]
        });
    }

    onTitleChange(e) {
        console.log(e.target.value);
        if(e.target.value) {
            this.setState({
                disableButton: false, 
                title: e.target.value
            });
        } else {
            this.setState({disableButton: true }); 
        }
    }

    onPriceChange(e) {
        this.setState({price: e.target.value});
    }

    onAddressChange(e) {
        this.setState({address: e.target.value});
    }

    onCityChange(e) {
        this.setState({city: e.target.value});
    }

    onStateChange(e) {
        this.setState({state: e.target.value});
    }

    onZipChange(e) {
        this.setState({zip: e.target.value});
    }

    onTagsChange(e) {
        this.setState({tags: e.target.value});
    }

    onNotesChange(e) {
        this.setState({notes: e.target.value});
    }

    editItem() {
        let acmeStorage = localStorage.getItem('acme');
        let acmeObjs = JSON.parse(acmeStorage);
        acmeObjs[this.state.index].title = this.state.title;
        acmeObjs[this.state.index].price = this.state.price;
        acmeObjs[this.state.index].address = this.state.address;
        acmeObjs[this.state.index].city = this.state.city;
        acmeObjs[this.state.index].state = this.state.state;
        acmeObjs[this.state.index].zip  = this.state.zip;
        acmeObjs[this.state.index].tags  = this.state.tags
        acmeObjs[this.state.index].notes  = this.state.notes;
        localStorage.setItem('acme', JSON.stringify(acmeObjs));
    }
    
    render() {
        return (
            <div className="Edit-wrapper">
                <div className="Edit-form">
                    <h3>Item Details</h3>
                    <TextField 
                        hintText="Title Field"
                        floatingLabelText="Title"
                        errorText="This field is required"
                        onChange={this.onTitleChange}
                        defaultValue={this.state.data["title"]}/>
                    <br />
                    <TextField
                        hintText="Price Field"
                        floatingLabelText="Price"
                        onChange={this.onPriceChange}
                        defaultValue={this.state.data["price"]}/>
                    <br />
                    <h3>Location</h3>
                    <TextField
                        hintText="Address Field"
                        floatingLabelText="Address"
                        onChange={this.onAddressChange}
                        defaultValue={this.state.data["address"]}/>
                    <br />
                    <TextField
                        hintText="City Field"
                        floatingLabelText="City"
                        onChange={this.onCityChange}
                        defaultValue={this.state.data["city"]}/>
                    <br />
                    <TextField
                        hintText="State Field"
                        floatingLabelText="State"
                        onChange={this.onStateChange}
                        defaultValue={this.state.data["state"]}/>
                    <br />
                    <TextField
                        hintText="Zip Code Field"
                        floatingLabelText="Zip Code"
                        onChange={this.onZipChange}
                        defaultValue={this.state.data["zip"]}/>
                    <br />
                </div>
                <div className="Edit-form">
                    <h3>Tags</h3>
                    <TextField 
                        hintText="Enter different tags, each seperated by commas."
                        floatingLabelText="Tags"
                        multiLine={true}
                        rows={6}
                        rowsMax={8}
                        onChange={this.onTagsChange}
                        defaultValue={this.state.data["tags"]}/>
                    <br />
                    <h3>Notes</h3>
                    <TextField 
                        hintText="Enter any notes you would like for this item."
                        floatingLabelText="Notes"
                        multiLine={true}
                        rows={6}
                        rowsMax={8}
                        onChange={this.onNotesChange}
                        defaultValue={this.state.data["notes"]}/>
                    <br />
                </div>
                <div className="Edit-buttons">
                    <Link to="/search">
                        <RaisedButton label="Back To Inventory" primary={true} />
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="/search">
                        <RaisedButton label="Edit Acme Item" secondary={true} disabled={this.state.disableButton} onClick={this.editItem}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default EditAcmeItem;