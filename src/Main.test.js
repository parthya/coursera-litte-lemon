import { initializeTimes, updateTimes } from "./Main";

// Test for initializeTimes
describe("initializeTimes", () => {
  test("should return initial available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

// Test for updateTimes
describe("updateTimes", () => {
  test("should return the current state when an unknown action is provided", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UPDATE_DATE", payload: '2024-02-09' };
    expect(updateTimes(state, action)).toEqual(state);
  });
});

// Submit

