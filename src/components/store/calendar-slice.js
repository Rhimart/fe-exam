import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({

    name:'calendar',
    initialState:{
        items: [],
        changed: false,
    },
    reducers: {
        addCalendar(state, action) {
          state.calendars = action.payload.calendars;
        },
        updateCalendar(state, action) {
          const newItem = action.payload;
          const existingItem = state.calendars.find((item) => item.id === newItem.id);
          state.changed = true;
          if (!existingItem) {
            state.items.push({
              id: newItem.id,
              title: newItem.title,
              status: newItem.status,
              description: newItem.description,
            });
          }
        },
        deleteCalendar(state, action) {
          const id = action.payload;
          const existingItem = state.calendars.find((item) => item.id === id);
          state.totalQuantity--;
          state.changed = true;
          if (existingItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
          }
        },
      },
});
export const calendarActions = calendarSlice.actions;

export default calendarSlice;