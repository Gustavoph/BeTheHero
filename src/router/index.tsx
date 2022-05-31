import React from "react";
import {
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Home } from '../view/Home';
import { Register } from '../view/Register';

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Switch>
  );
}