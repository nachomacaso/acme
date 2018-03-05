import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class LocationForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = { 
          address: this.props.address,
          city: this.props.city,
          zip: this.props.zip,
          stateValue: this.props.stateValue,
      };
      this.handleState = this.handleState.bind(this);
    }

    handleState(event, index, value) {
        this.setState({ stateValue: value });
        this.props.onStateChange(event, value);
    }
        

    render() {
        return(
        <div>
            <TextField
                hintText="Address Field"
                floatingLabelText="Address"
                fullWidth={true}
                onChange={this.props.onAddressChange}
                defaultValue={this.state.address}/>
            <br />
            <TextField
                hintText="City Field"
                floatingLabelText="City"
                fullWidth={true}
                onChange={this.props.onCityChange}
                defaultValue={this.state.city}/>
            <br />
            <SelectField floatingLabelText="State:"
                         value={this.state.stateValue}
                         onChange={this.handleState}
                         fullWidth={true}
                         style={{textAlign: "left"}}>
                <MenuItem value={1} primaryText="AL" />
                <MenuItem value={2} primaryText="AK" />
                <MenuItem value={3} primaryText="AZ" />
                <MenuItem value={4} primaryText="AR" />
                <MenuItem value={5} primaryText="CA" />
                <MenuItem value={6} primaryText="CO" />
                <MenuItem value={7} primaryText="CT" />
                <MenuItem value={8} primaryText="DE" />
                <MenuItem value={9} primaryText="FL" />
                <MenuItem value={10} primaryText="GA" />
                <MenuItem value={11} primaryText="HI" />
                <MenuItem value={12} primaryText="ID" />
                <MenuItem value={13} primaryText="IL" />
                <MenuItem value={14} primaryText="IN" />
                <MenuItem value={15} primaryText="IA" />
                <MenuItem value={16} primaryText="KS" />
                <MenuItem value={17} primaryText="KY" />
                <MenuItem value={18} primaryText="LA" />
                <MenuItem value={19} primaryText="ME" />
                <MenuItem value={20} primaryText="MD" />
                <MenuItem value={21} primaryText="MA" />
                <MenuItem value={22} primaryText="MI" />
                <MenuItem value={23} primaryText="MN" />
                <MenuItem value={24} primaryText="MS" />
                <MenuItem value={25} primaryText="MO" />
                <MenuItem value={26} primaryText="MT" />
                <MenuItem value={27} primaryText="NE" />
                <MenuItem value={28} primaryText="NV" />
                <MenuItem value={29} primaryText="NH" />
                <MenuItem value={30} primaryText="NJ" />
                <MenuItem value={31} primaryText="NM" />
                <MenuItem value={32} primaryText="NY" />
                <MenuItem value={33} primaryText="NC" />
                <MenuItem value={34} primaryText="ND" />
                <MenuItem value={35} primaryText="OH" />
                <MenuItem value={36} primaryText="OK" />
                <MenuItem value={37} primaryText="OR" />
                <MenuItem value={38} primaryText="PA" />
                <MenuItem value={39} primaryText="RI" />
                <MenuItem value={40} primaryText="SC" />
                <MenuItem value={41} primaryText="SD" />
                <MenuItem value={42} primaryText="TN" />
                <MenuItem value={43} primaryText="TX" />
                <MenuItem value={44} primaryText="UT" />
                <MenuItem value={45} primaryText="VT" />
                <MenuItem value={46} primaryText="VA" />
                <MenuItem value={47} primaryText="WA" />
                <MenuItem value={48} primaryText="WV" />
                <MenuItem value={49} primaryText="WI" />
                <MenuItem value={50} primaryText="WY" />
            </SelectField><br/>
            <TextField
                hintText="Zip Code Field"
                floatingLabelText="Zip Code"
                fullWidth={true}
                onChange={this.props.onZipChange}
                defaultValue={this.state.zip}/>
            <br />
        </div>
        );
    }
}

export default LocationForm;
