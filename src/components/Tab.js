import React from 'react';
import MaterialIcon from 'material-icons-react';
import S from './Tabs.module.css';

function Tab(props) {
  let className = S.tab;
  if (props.isActive) className += ` ${S.active}`;
  return (
    <li className={className} onClick={props.onClick}>
      {props.icon ? <MaterialIcon icon={props.icon} size={18} color="inherit" /> : ''}{props.label}
    </li>
  );
}

export default Tab;
