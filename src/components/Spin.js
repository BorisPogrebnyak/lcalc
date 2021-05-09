import React from 'react';

import { Spinner } from 'spin.js';

// Вынесена в Clousure для повторного
// использования между вызовами Spinner()
const spinner = new Spinner({ color: '#00ff00' });

export default function Spin(props) {
  const { isLoading, elementId } = props;
  const target = document.getElementById(elementId ? elementId : 'root');

  isLoading ? spinner.spin(target) : spinner.stop();

  return <></>;
}