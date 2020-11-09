"use strict";

import React from "react";

export const CurrentDate = () => (
  <p> Сегодня: {new Date().toLocaleDateString()}</p>
);
