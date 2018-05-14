import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class AddCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            streetaddress: '',
            postcode: '',
            city: '',
            email: '',
            phone: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newCustomer = {
            firstname: this.state.firstname, 
            lastname: this.state.lastname, 
            streetaddress: this.state.streetaddress,
            postcode: this.state.postcode,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }
        this.props.addCustomers(newCustomer);
        this.simpleDialog.hide();
    }

    render() {
        return (
            <div>
                 <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Add Customer">
          <form>
              <div className="form-group">
                  <input placeholder="FirstName" className="form-control" name="firstname" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="LastName" className="form-control" name="lastname" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="StreetAddress" className="form-control" name="streetaddress" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Postcode" className="form-control" name="postcode" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="City" className="form-control" name="city" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Email" className="form-control" name="email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Phone" className="form-control" name="phone" onChange={this.handleChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
          </form>
        </SkyLight>
        <button style={{marginLeft: 30}} className="btn btn-primary" onClick={() => this.simpleDialog.show()}>Add Customer</button>
            </div>
        );
    }
}

export default AddCustomers;