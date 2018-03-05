import React from 'react';
import TextField from 'material-ui/TextField';

class DetailsForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = { 
            title: this.props.title,
            price: this.props.price
      };
    }

    render() {        
        return(
        <div>
            <TextField
                hintText="Title Field"
                floatingLabelText="Title"
                errorText="This field is required"
                fullWidth={true}
                onChange={this.props.onTitleChange}
                defaultValue={this.state.title}/>
            <br />
            <TextField
                hintText="Price Field"
                floatingLabelText="Price"
                fullWidth={true}
                onChange={this.props.onPriceChange}
                defaultValue={this.state.price}/>
            <br />
        </div>
        );
    }
}

export default DetailsForm;
