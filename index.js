/* eslint-disable no-undef */
/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
import BookCollection from './modules/BookCollection.js';
import Book from './modules/Book.js';

import * as toggleSection from './modules/toggle.js';
import * as removeBtn from './modules/remove-button.js';
import * as submitBtn from './modules/submit.js';

import {
  DateTime,
  Duration,
  FixedOffsetZone,
  IANAZone,
  Info,
  Interval,
  InvalidZone,
  Settings,
  SystemZone,
  VERSION,
  Zone,
}
from './modules/luxon.js';

const bookCollection = new BookCollection();

bookCollection.displayBooks();

// Creating current date and time

const dateTime = document.getElementById('date');

function formatDate(date) {
  return date.toFormat("MMMM d',' yyyy 'at' hh:mm:ss a");
}

const now = DateTime.now();
const formattedDate = formatDate(now);

dateTime.innerHTML = formattedDate;
