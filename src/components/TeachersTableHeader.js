import React, { useEffect } from 'react';

import $ from 'jquery';
import 'tablesorter';

export default function TeachersTableHeader({ teachersTableHeaders }) {

  // Обновление tablesorter в store/teachers/actions.js
  useEffect(() => {
    $("#contentTable").tablesorter();
  }, []);

  return (
    <thead>
      <tr>{teachersTableHeaders.map(title => <th key={title}>{title}</th>)}</tr>
    </thead>
  );
}