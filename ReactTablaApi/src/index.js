import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import data from './data.json';

const headings = ['When', 'Who', 'Description'];

render(
  <App data={data} title='openLibrary API' headings={headings}/>,
  document.getElementById('app')
)
