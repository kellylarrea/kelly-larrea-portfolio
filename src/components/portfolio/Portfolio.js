import {useEffect, useState} from 'react';
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { frontend, backend } from '../../data';



export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'featured',
      title: 'Frontend',
    },
    {
      id:'backend',
      title: 'Backend',
    },
    
  ];

  useEffect(()=>{

    switch(selected){
      case 'featured':
        setData(frontend);
        break;
        case 'backend':
        setData(backend);
        break;
        default:
          setImmediate(frontend);
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
            alt='technology image'
/>
<h3>{d.title}</h3>
</div>
      ))}
    </div>
    <div>
    </div>
  </div>
  )
}
