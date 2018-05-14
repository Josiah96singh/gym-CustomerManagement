import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            trainings: [],
            events: []
        }
    }

    componentDidMount() {
        this.showTraining()
       }

    showTraining = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(responseData => {
            this.setState({trainings: responseData})
            this.showEvents();
        })
       
    }

    showEvents() {
        let items = this.state.trainings
        let array = [];
        let i = 0;
        for (i = 0; i < items.length; i++) {
            array.push ({
                title: items[i].activity,
                start : new Date (moment(items[i].date).format('MM/DD/YYYY')),
                end: new Date (moment(items[i].date + items[i].duration*60000)),
            })
            this.setState({events: array})
        }
    }
    render() {
        return (
            <div>
                <h1>Calendar</h1>
                <BigCalendar
                events={this.state.events}
                defaultDate={new Date()}
                defaultView='week'
                views={['month', 'week', 'day']}
                showMultiDayTimes
                />
            </div>
        );
    }
}

export default Calendar;