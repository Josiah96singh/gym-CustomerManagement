import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import SkyLight from 'react-skylight';
import AddCustomers from './AddCustomers';
import EditCustomers from './EditCustomers';
import Trainings from './Trainings';
import AddTrainings from './AddTrainings'



class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: [],
        }
        
    }

    componentDidMount() {
        this.showCustomers();
    }


    // LOADS CUSTOMERS
    showCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(responseData => {
            // console.log(responseData.content)
            this.setState({customers: responseData.content})
        })
    }
    // ADDS CUSTOMERS 
    addCustomers = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCustomer)
        })
        .then(response => this.showCustomers())
        .catch(err => console.log(err))

        toast.success("Added!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // DELETES CUSTOMER
    deleteCustomer = (value) => {
        confirmAlert({
            message: 'Do you want to proceed?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(value, {method: 'DELETE'})
                        .then(response => this.showCustomers())
                        .catch(err => console.error(err))

                        toast.success("Deleted!", {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                },
                {
                    label: 'No',
                }
            ]
        })
    }

    // UPDATES CUSTOMER
    updateCustomer = (link, editcustomer) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(editcustomer)
        })
        .then(response => this.showCustomers())
        .catch(err => console.error(err))

        toast.success("Updated", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    // ADDS TRAINING
    addTrainings = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newTraining)
        })
        toast.success("Training Added!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    render() {
        return (
            <div>
                <div className = "row">
                <AddCustomers addCustomers={this.addCustomers} />
                </div>
                <ReactTable
                data={this.state.customers}
                columns = {[
                    {
                        columns: [
                            {
                                Header: "FirstName",
                                accessor: "firstname"
                            },
                            {
                                Header: "LastName",
                                accessor: "lastname"
                            },
                            {
                                Header: "StreetAddress",
                                accessor: "streetaddress"
                            },
                            {
                                Header: "PostCode",
                                accessor: "postcode"
                            },
                            {
                                Header: "City",
                                accessor: "city"
                            },
                            {
                                Header: "Email",
                                accessor: "email"
                            },
                            {
                                Header: "Phone",
                                accessor: "phone"
                            },
                            {
                                id: 'addTraining',
                                sortable: false,
                                filterable: false,
                                width: 170,
                                accessor: 'links.0.href',
                                Cell: ({value}) => (<AddTrainings  addTrainings={this.addTrainings} link={value}/>)
                            },
                            {
                                id: 'button',
                                sortable: false,
                                filterable: false,
                                width: 100,
                                accessor: 'links.0.href',
                                Cell: ({row,value}) => (<EditCustomers updateCustomer={this.updateCustomer} link={value} customer={row} />)
                            },
                            {
                                id: 'button',
                                sortable: false,
                                filterable: false,
                                width: 100,
                                accessor: "links.0.href",
                                Cell: ({value}) =>  (<button className="btn btn-danger" onClick={() => {this.deleteCustomer(value)}}>Remove</button>)
                            },
                        ]
                    }
                ]}

                defaultSorted={[
                    {
                      id: "firstname",
                      desc: true
                    }
                  ]}

                defaultPageSize={10}
                className="-striped-highlight"
                filterable
                />
                 <ToastContainer autoClose={1500} />
            </div>
        );
    }
}

export default Customers;