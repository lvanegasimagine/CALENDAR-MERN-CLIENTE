import React from 'react'

function CalendarEvent({event}) {
  const {title, user} = event;
    return (
    <div className="">
        <strong>{title}</strong>
        <span>{user.name}</span>
    </div>
  )
}

export default CalendarEvent