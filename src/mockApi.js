const initialAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
const NUMBER_OF_TABLES = 1;
const MAX_GUESTS_PER_TABLE = 4;
const OCCASIONS = ["Birthday", "Anniversary"];

const getBookedSlots = () => {
  const storedSlots = localStorage.getItem("bookedSlots");
  if (storedSlots) {
    return JSON.parse(storedSlots);
  }
  return [];
};

const fetchAPI = (date) => {
  let availableTimes = initialAvailableTimes;
  const storedSlots = getBookedSlots();
  if (storedSlots) {
    const bookedSlotsForDate = storedSlots.filter((slot) => slot.date === date);
    availableTimes = initialAvailableTimes.filter((time) => {
      const tablesBookedForTime = bookedSlotsForDate
        .filter((elem) => elem.time === time)
        .reduce((acc, slot) => acc + slot.tables, 0);
      if (tablesBookedForTime >= NUMBER_OF_TABLES) {
        return false;
      } else {
        return true;
      }
    });
  }
  return availableTimes;
};

const submitAPI = (formData) => {
  const bookedSlots = JSON.parse(localStorage.getItem("bookedSlots"));
  bookedSlots.push({
    date: formData.resDate,
    time: formData.resTime,
    guests: formData.guests,
    occasion: formData.occasion,
    tables: Math.ceil(formData.guests / MAX_GUESTS_PER_TABLE),
  });
  localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI, initialAvailableTimes, OCCASIONS };
