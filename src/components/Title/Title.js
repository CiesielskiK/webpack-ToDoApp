import React from 'react';
import style from './Title.css';
import PropTypes from 'prop-types';



const Title = props => <h1 className={style.Title}>{props.title}</h1>;

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
