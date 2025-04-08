import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router';

const Single = (props) => {
  const {state} = useLocation();
  const item = state.item;
  return <></>;
};

Single.propTypes = {};

export default Single;
