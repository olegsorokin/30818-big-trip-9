const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const randomArea = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getType = () => [
  `bus`,
  `check-in`,
  `drive`,
  `flight`,
  `restaurant`,
  `ship`,
  `sightseeing`,
  `taxi`,
  `train`,
  `transport`,
  `trip`,
][Math.floor(Math.random() * 11)];

const getPlace = () => [
  `New York`,
  `Moscow`,
  `Paris`,
][Math.floor(Math.random() * 3)];

const getPhotos = () => {
  const photos = new Set();
  const photosArr = new Array(randomArea(1, 5))
    .fill(``)
    .map(() => `http://picsum.photos/300/150?r=${Math.random()}`);

  photosArr.forEach((item) => photos.add(item));
  return photos;
};

const getDescription = (text) => text
  .split(`.`)
  .filter((item) => item.length > 0)
  .map((item) => item.trim() + `.`);

const getEvent = () => ({
  type: getType(),
  place: getPlace(),
  photos: getPhotos(),
  description: getDescription(descriptionText),
  time: {
    from: Date.now(),
    to: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  },
  price: randomArea(10, 999),
  offers: [
    {
      name: `Add luggage`,
      cost: 10,
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      name: `Switch to comfort class`,
      cost: 150,
      isChecked: Boolean(Math.round(Math.random()))},
    {
      name: `Add meal`,
      cost: 2,
      isChecked: Boolean(Math.round(Math.random()))
    },
    {
      name: `Choose seats`,
      cost: 9,
      isChecked: Boolean(Math.round(Math.random()))
    }
  ]
});

export const getEventsList = (length) => new Array(length).fill(``).map(getEvent);
