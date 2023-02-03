import React from 'react';
import moment from 'moment';

export const HumanReadableDate = ({ date }) => {
  const end = moment(date);
  return <>{end.toNow()}</>;
};



export const CapitalizedFirstLetter = (text) => {
  return <>{text.charAt(0).toUpperCase() + text.slice(1)}</>;
};