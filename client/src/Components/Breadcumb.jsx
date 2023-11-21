import React from 'react';

const Breadcrumb = (props) => {
  return (
    <ul className="breadcrumb">
      {props.children}
    </ul>
  );
};

const BreadcrumbItem = (props) => {
  return (
    <li className="breadcrumb-item">
      <a href={props.link}>{props.label}</a>
    </li>
  );
};

export { Breadcrumb, BreadcrumbItem };