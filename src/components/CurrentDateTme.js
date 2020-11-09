"use strict";

import React from "react";

import "../styles.css";

import { CurrentDate } from "./CurrentDate";
import { CurrentTime } from "./CurrentTime";

export const CurrentDateTime = () => (
  <p className="CurrentDateTime">
    Сегодня:
    &nbsp;
    <CurrentDate />
    &nbsp;
    <CurrentTime />
  </p>
);
