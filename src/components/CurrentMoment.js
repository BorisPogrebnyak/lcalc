// Спер, упростил и переделал
// под функциональный с хуками отсюда:
// Как создать динамические часы на React?
// https://blog.myrusakov.ru/reactjs-comp.html

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function CurrentMoment() {
  const [currentMoment, setCurrentMoment] = useState(dayjs());

  useEffect(() => {
    setInterval(() => setCurrentMoment(dayjs()), 1000);
  }, []);

  return (
    <div className="CurrentMoment">
      Сегодня:&nbsp;
      {currentMoment.format("DD.MM.YYYY HH:mm:ss")}
    </div>
  );
}