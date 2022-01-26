import React from 'react';
import './portfolioList.scss'

export default function PortfolioList({ id, title, active, setSelected }) {
    console.log('this is id', id)
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'}
    onClick={() => setSelected(id)}
    >
        {title}
    </li>
  );
}
