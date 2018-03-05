import React from 'react';
import TextField from 'material-ui/TextField';

class NotesForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = { 
            notes: this.props.notes,
      };
    }

    render() {        
        return(
        <div>
            <TextField hintText="Enter any notes you would like for this item."
                       floatingLabelText="Notes"
                       multiLine={true}
                       rows={6}
                       rowsMax={8}
                       fullWidth={true}
                       onChange={this.props.onNotesChange}
                       defaultValue={this.state.notes}/>
            <br />
        </div>
        );
    }
}

export default NotesForm;



