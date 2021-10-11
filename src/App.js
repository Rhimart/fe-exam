import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import CalendarList from './components/Calendar/CalendarList';
import React, {useState, useEffect, useCallback} from 'react';

import AddCalendar from './components/Calendar/AddCalendar';
function App() {
  const [calendars, setCalendars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchCalendarsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/calendars');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setCalendars(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchCalendarsHandler();
  }, [fetchCalendarsHandler]);

  async function addCalendarHandler(calendar) {
    const response = await fetch('http://localhost:3000/calendars', {
      method: 'POST',
      body: JSON.stringify(calendar),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchCalendarsHandler();
  }
  
  return (
      <Switch>
        <Route path='/' exact>
          <Redirect to='/calendars' />
        </Route>
        <Route path='/calendars' exact>
          <React.Fragment>
            <section>
              <AddCalendar onAddCalendar={addCalendarHandler} />
            </section>
            <section>
              {!isLoading && calendars.length > 0 &&<CalendarList calendars={calendars} onUpdate={fetchCalendarsHandler}/>}
              {isLoading && <p>Loading...</p>}
              {!isLoading && calendars.length ===   0 && <p>No calendars</p>}
              {!isLoading && error && <p>{error}</p>}
            </section>
          </React.Fragment>
        </Route>
      </Switch>
  );
}

export default App;
