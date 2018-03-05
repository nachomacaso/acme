import React from 'react';
import TextField from 'material-ui/TextField';

class TagsForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = { 
            tags: this.props.tags
      };
    }

    render() {        
        return(
        <div>
            <TextField hintText="Enter different tags, each seperated by commas."
                       floatingLabelText="Tags"
                       multiLine={true}
                       rows={6}
                       rowsMax={8}
                       fullWidth={true}
                       onChange={this.props.onTagsChange}
                       defaultValue={this.state.tags}/>
            <br />
        </div>
        );
    }
}

export default TagsForm;



