import React from 'react';
import moment from 'moment';

export const HumanReadableDate = ({ date }) => {
  const end = moment(date);
  return <>{end.fromNow()}</>;
};



export const CapitalizedFirstLetter = (text) => {
  return <>{text.charAt(0).toUpperCase() + text.slice(1)}</>;
};



export const EmailFirstSecondLetters = (email) => {
  return <>{email.charAt(0) + email.charAt(1) + email.charAt(2)}</>;
};



export const  partialLetters = (str, num)  => {
  return str.slice(0, num) + "";
}
