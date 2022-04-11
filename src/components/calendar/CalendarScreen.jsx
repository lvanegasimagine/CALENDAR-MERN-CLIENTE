import Navbar from '../ui/Navbar'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import { messages } from '../../helpers/calendar-messages-es';
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'  // without this line it didn't work
import CalendarEvent from './CalendarEvent';
import { useState } from 'react';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
  title: 'Cumpleanos de fernando',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  user:{
    _id: '123',
    name: 'Luis Vanegas'
  }
}];


const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (e) => {
    console.log(e);
  }

  const onSelectEvent = (e) => {
    console.log(e);
  }

  const onViewChange = (e) => {
    console.log(e);
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#367cf7';
    let style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    };
    return {
      style: style
    };
  }
  return (
    <div className='calendar-screen'>
      <Navbar/>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onDoubleClickEvent={onDoubleClick}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />
    </div>
  )
}

export default CalendarScreen