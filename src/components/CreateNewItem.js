import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import DetailsForm from './forms/DetailsForm';
import LocationForm from './forms/LocationForm';
import TagsForm from './forms/TagsForm';
import NotesForm from './forms/NotesForm';
import { Link } from 'react-router-dom';


class CreateNewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false,
            stepIndex: 0,
            title: "",
            price: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            stateValue: 1,
            tags: [],
            notes: "",
            disableButton: true,
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        this.submitItem = this.submitItem.bind(this);
    }

    dummyAsync = (cb) => {
        this.setState({loading: true}, () => {
        this.asyncTimer = setTimeout(cb, 500);
        });
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
        this.dummyAsync(() => this.setState({
            loading: false,
            stepIndex: stepIndex + 1
        }));
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
        this.dummyAsync(() => this.setState({
            loading: false,
            stepIndex: stepIndex - 1,
        }));
        }
    };

    handleTitle(e) {
        if(e.target.value) {
            this.setState({
                disableButton: false, 
                title: e.target.value
            });
        } else {
            this.setState({disableButton: true }); 
        }
    }

    handlePrice(e) {
        this.setState({ price: e.target.value});
    }

    handleAddress(e) {
        this.setState({ address: e.target.value});
    }

    handleCity(e) {
        this.setState({ city: e.target.value});
    }

    handleState(e, v) {
        this.setState({ 
            state: e.target.innerText,
            stateValue: v
        });
    }

    handleZip(e) {
        this.setState({ zip: e.target.value});
    }

    handleTags(e) {
        let tagsString = e.target.value;
        var tagsArray = tagsString.replace(/\s/g, "").split(',');
        this.setState({ tags: tagsArray});
    }

    handleNotes(e) {
        this.setState({ notes: e.target.value});
    }

    submitItem() {
        let acmeItem = {};
        acmeItem['title'] = this.state.title;
        acmeItem['price'] = this.state.price;
        acmeItem['address'] = this.state.address;
        acmeItem['city'] = this.state.city;
        acmeItem['state'] = this.state.state;
        acmeItem['zip'] = this.state.zip;
        acmeItem['tags'] = this.state.tags.join(', ');
        acmeItem['notes'] = this.state.notes;
        console.log(acmeItem);
        let acmeStorage = localStorage.getItem('acme');
        let acmeObjs = JSON.parse(acmeStorage);
        acmeObjs.push(acmeItem);
        console.log(acmeObjs);
        localStorage.setItem('acme', JSON.stringify(acmeObjs));
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
        case 0:
            return (
                <DetailsForm onTitleChange={this.handleTitle} onPriceChange={this.handlePrice} title={this.state.title} price={this.state.price}/>
            );
        case 1:
            return (
                <LocationForm onAddressChange={this.handleAddress} onCityChange={this.handleCity} onStateChange={this.handleState} onZipChange={this.handleZip}
                              address={this.state.address} city={this.state.city} stateValue={this.state.stateValue} zip={this.state.zip} />
            );
        case 2:
            return (
                <TagsForm onTagsChange={this.handleTags} tags={this.state.tags} />
            );
        case 3:
            return (
                <NotesForm onNotesChange={this.handleNotes} notes={this.state.notes} />
            );
        default:
            console.log('Sorry, you broke it buddy.');
        }
    }

    renderContent() {
        const {stepIndex} = this.state;
        const contentStyle = {margin: '0 16px', overflow: 'hidden'};

        return (
        <div style={contentStyle}>
            <div>{this.getStepContent(stepIndex)}</div>
            <div style={{marginTop: 24, marginBottom: 12}}>
            <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={{marginRight: 12}}
            />
            { (stepIndex === 3 )
            ? <Link to="/search"> 
                <RaisedButton
                    label="Finish"
                    primary={true}
                    disabled={this.state.disableButton}
                    onClick={this.submitItem}/>
              </Link>
            : <RaisedButton
                label="Next"
                primary={true}
                disabled={this.state.disableButton}
                onClick={this.handleNext}/>
            }
            </div>
        </div>
        );
    }

    render() {
        const {loading, stepIndex} = this.state;

        return (
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <h1>Add A New Acme Item</h1>
            <Stepper activeStep={stepIndex}>
                <Step>
                    <StepLabel>Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Location</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Tags</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Notes</StepLabel>
                </Step>
            </Stepper>
            <ExpandTransition loading={loading} open={true}>
            {this.renderContent()}
            </ExpandTransition>
        </div>
        );
    }
}

export default CreateNewItem;