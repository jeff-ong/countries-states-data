"use strict";

const countries = require("./data/countries");
const states = require("./data/states");

function getAllCountries() {
  return countries;
}

function getCountryByName(name) {
  return countries.find((country) => country.name === name);
}

function getStatesByCountryName(name) {
  return states.filter((state) => state.country_name === name);
}

function getStatesByCountryCode(code) {
  return states.filter((state) => state.country_code === code);
}

function getAllStates() {
  return states;
}

module.exports = {
  getAllCountries,
  getCountryByName,
  getStatesByCountryName,
  getStatesByCountryCode,
  getAllStates,
};
