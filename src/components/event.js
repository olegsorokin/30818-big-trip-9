export const makeEvent = ({type, place, time: {from, to}, price, offers}) => `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} to ${place}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${new Date(from).toISOString()}">${new Date(from).getHours()}:${new Date(from).getMinutes()}</time>
        &mdash;
        <time class="event__end-time" datetime="${new Date(to).toISOString()}">${new Date(to).getHours()}:${new Date(to).getMinutes()}</time>
      </p>
      <p class="event__duration">1H 30M</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${offers[0].name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offers[0].cost}</span>
       </li>
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`.trim();
