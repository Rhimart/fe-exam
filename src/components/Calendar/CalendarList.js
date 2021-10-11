import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import Calendar from './Calendar';

const CalendarList = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [statusSearchTerm, setStatusSearchTerm] = useState("");
    console.log(props);
    return (
          <React.Fragment>
          <div className="container pb-2">
            <div className="row">
              <div className="col">
              <input type="text" className="form-control" placeholder = "Search..." onChange={(event)=> {
                setSearchTerm(event.target.value);
              }}
              />
              </div>
              <div className="col">
              <select className="form-select" onChange={(event)=> {
                setStatusSearchTerm(event.target.value);
              }}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="on-going">On-Going</option>
                <option value="done">Done</option>
            </select>
            </div>
          </div>
          </div>
          <div className="container">
          <div className="row">
            {props.calendars.filter((val)=>{
              if(statusSearchTerm.toLowerCase() !== "all")
              {
                if(searchTerm === "" && val.status.toLowerCase().includes(statusSearchTerm.toLowerCase())){
                  return val
                }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) && val.status.toLowerCase().includes(statusSearchTerm.toLowerCase())){
                  return val
                }
              }else{
                if(searchTerm === ""){
                  return val
                }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }
            }).map((calendar) => (
              
              <Calendar
                key={calendar.id}
                id={calendar.id}
                title={calendar.title}
                status={calendar.status}
                date={calendar.date}
                description={calendar.description}
                update = {props.onUpdate}
              />
              
            ))}
          </div>
          </div>
          </React.Fragment>
      );
}
export default CalendarList;