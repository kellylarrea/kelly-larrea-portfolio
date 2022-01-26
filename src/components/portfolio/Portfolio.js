import {useEffect, useState} from 'react';
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { technologies, resume } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'technologies',
      title: 'Technologies',
    },
    {
      id:'resume',
      title: 'Resume',
    },
    
  ];

  useEffect(()=>{

    switch(selected){
      case 'technologies':
        setData(technologies);
        break;
        case 'resume':
        setData(resume);
        break;

    }

  }, [selected])

  return (
  <div className='portfolio' id='portfolio'>
    <h1>Technologies</h1>
    <ul>
     {list.map((item)=> (
       <PortfolioList 
       title={item.title} 
       active={selected === item.id}
       setSelected={setSelected}
       id={item.id}
       />
     ))}
    </ul>
    <div className='container'>
      {data.map((d)=>(
        <div className='item'>
          <img
            src={d.img}
            alt=''
/>
<h3>{d.title}</h3>
</div>
      ))}
    </div>
  </div>
  )
}
