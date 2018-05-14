import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class EditCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: this.props.customer.firstname,
            lastname: this.props.customer.lastname,
            streetaddress: this.props.customer.streetaddress,
            postcode: this.props.customer.postcode,
            city: this.props.customer.city,
            email: this.props.customer.email,
            phone: this.props.customer.phone

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
        this.props.updateCustomer(this.props.link,newCustomer)
        this.simpleDialog.hide();
    }


    render() {
        return (
            <div>
                 <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Edit Customer">
          <form>
              <div className="form-group">
                  <input placeholder="Firstname" value={this.state.firstname} className="form-control" name="firstname" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Lastname" value={this.state.lastname} className="form-control" name="lastname" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="StreetAddress" value={this.state.streetaddress} className="form-control" name="streetaddress" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="PostCode" value={this.state.postcode} className="form-control" name="postcode" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="City" value={this.state.city} className="form-control" name="city" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Email" value={this.state.email} className="form-control" name="email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <input placeholder="Phone" value={this.state.phone} className="form-control" name="phone" onChange={this.handleChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
          </form>
        </SkyLight>
        <button className="btn btn-dark" onClick={() => this.simpleDialog.show()}>Update</button>
            </div>
        );
    }
}

export default EditCustomers;