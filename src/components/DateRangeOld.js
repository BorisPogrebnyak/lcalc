import React from 'react';

export default function DateRangeOld({ start, end, changeDateRangeStart, changeDateRangeEnd }) {
  return (
    <span>
      <label htmlFor='start'> за&nbsp;период:&nbsp;</label>
      <input
        type='date'
        id='start'
        value={start}
        max={end}
        onChange={event => changeDateRangeStart(event.target.value)}
      />
      <label htmlFor='end'>&nbsp;÷&nbsp;</label>
      <input
        type='date'
        id='end'
        value={end}
        min={start}
        onChange={event => changeDateRangeEnd(event.target.value)}
      />
    </span>
  );
}