import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from "../components/login/login";
import {
    render
} from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render( < LoginPage / > , div);
})