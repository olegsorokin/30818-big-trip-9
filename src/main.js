import {createTripInfoTemplate} from './components/trip-info';
import {createTripControlsMenuTemplate} from './components/trip-controls-menu';
import {createTripControlsFiltersTemplate} from './components/trip-controls-filters';
import {createTripEventEditTemplate} from './components/trip-event-edit';
import {createTripEventsSortTemplate} from './components/trip-events-sort';
import {createTripEventsListTemplate} from './components/trip-events-list';
import {createTripDayTemplate} from './components/trip-day';

const TRIP_DAYS = 3;

const tripInfoContainer = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripInfoContainer, createTripInfoTemplate(), `afterbegin`);
render(tripControls.firstElementChild, createTripControlsMenuTemplate(), `afterend`);
render(tripControls, createTripControlsFiltersTemplate(), `beforeend`);
render(tripEvents, createTripEventsSortTemplate(), `beforeend`);
render(tripEvents, createTripEventEditTemplate(), `beforeend`);
render(tripEvents, createTripEventsListTemplate(), `beforeend`);

const daysList = tripEvents.querySelector(`.trip-days`);

new Array(TRIP_DAYS).fill(``).forEach(() => render(daysList, createTripDayTemplate(), `beforeend`));
