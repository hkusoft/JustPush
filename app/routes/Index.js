import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/SideBar';
import HomeScreen from '../routes/HomeScreen.js'

ReactDOM.render(<SideBar />, document.getElementById("sidebar"));
ReactDOM.render(<HomeScreen />, document.getElementById("content"));
