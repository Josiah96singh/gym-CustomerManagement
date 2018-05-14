import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import SkyLight from 'react-skylight';
import 'react-confirm-alert/src/react-confirm-alert.css';
import AddTrainings from './AddTrainings';

class Trainings extends Component {
    constructor(props){
        super(props);
        this.state = {
            trainings: []
        }
    }

    componentDidMount() {
     this.showTraining()
    }

    // LOAD TRAININGS
    showTraining = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(responseData => {
            this.setState({trainings: responseData})
        })
    }

    deleteTraining = (value) => {
        confirmAlert({
            message: 'Do you want to delete Training?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch( value, {method: 'DELETE'})
                        .then(response => this.showTraining())
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


    

    render() {
        return (
            <div>
                <br/>
                <br/>
                <ReactTable
                data={this.state.trainings}
                columns = {[
                    {
                        columns: [
                            {
                                id: 'date',
                                Header: "Date",
                                accessor: d => {
                                let date = new Date(d.date)
                                let day = date.getDate();
                                let month = date.getMonth() +1;
                                let year = date.getFullYear();
                                date = (new Date(year, month, day)).toISOString().split('T')[0]
                                return date
                                }
                              },
                            {
                                Header: "Duration",
                                accessor: "duration"
                            },
                            {
                                Header: "Activity",
                                accessor: "activity"
                            },
                            {
                                id: "customerName",
                                Header: "Customer",
                                accessor: "customer.firstname"
                              },
                              {
                                id: "customerId",
                                Header: "CustomerID",
                                accessor: "customer.id"
                              },
                              {
                                id: 'deleteButton',
                                sortable: false,
                                filterable: false,
                                width: 100,
                                accessor: 'id',
                                Cell: ({value}) =>  (<button className="btn btn-danger" onClick={() => {this.deleteTraining('https://customerrest.herokuapp.com/api/trainings/' + value)}}>Remove</button>)
                              }
                        ]
                    }
                ]}

                defaultPageSize={10}
                className="-striped-highlight"
                />
            </div>
        );
    }
}

export default Trainings;