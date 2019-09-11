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

const renderContent = () => {
  render(tripInfoContainer, createTripInfoTemplate(), `afterbegin`);
  render(tripControls.firstElementChild, createTripControlsMenuTemplate(), `afterend`);
  render(tripControls, createTripControlsFiltersTemplate(), `beforeend`);

  let fragment = document.createElement(`template`);

  fragment.innerHTML += createTripEventsSortTemplate();
  fragment.innerHTML += createTripEventEditTemplate();
  fragment.innerHTML += createTripEventsListTemplate();

  const daysList = fragment.content.querySelector(`.trip-days`);
  new Array(TRIP_DAYS).fill(``).forEach(() => render(daysList, createTripDayTemplate(), `beforeend`));

  tripEvents.append(fragment.content);
};

renderContent();
