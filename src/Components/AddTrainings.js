import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class AddTrainings extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: '',
            activity:  '',
            duration: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newTraining = {
            date: this.state.date, 
            activity: this.state.activity, 
            duration: this.state.duration,
            customer: this.props.link
        }
        this.props.addTrainings(newTraining);
        this.simpleDialog.hide();
    }

    render() {
        return (
            <div>
                 <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Add Trainings">
                 <form>
              <div className="form-group">
                  <input placeholder="Date" className="form-control" name="date" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Activity" className="form-control" name="activity" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Duration" className="form-control" name="duration" onChange={this.handleChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
          </form>
                 </SkyLight>
        <button style={{marginLeft: 30}} className="btn btn-light" onClick={() => this.simpleDialog.show()}>Add Training</button>      
            </div>
        );
    }
}

export default AddTrainings;