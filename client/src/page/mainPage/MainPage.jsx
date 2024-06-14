import React, {useState, useEffect} from 'react';
import request from '../services/axios';
// import './App.css';
import { Link } from 'react-router-dom';

function MainPage() {
    const [topics, setTopics] = useState([])
    const axiosTopics = async () => {
      const { data } = await request.get('/topics');
      console.log(data);
      if (data.message === 'success') {
        setTopics(data.topics);
      }
    };
      useEffect(() => {
        axiosTopics();
      }, []);
    return (
        <>
       
        <div>
        <h2 className="d-flex justify-content-center rotating-text">Quiz Game</h2>
      <div className="d-flex flex-row mb-3 justify-content-evenly p-3 mb-2">
      
              { topics.length>1 && 
<>
            <div className='border border-4 rounded'>
            <img src={topics[0].img} alt="" width='420px' height='380px' className='rounded m-3' />
            
            <Link to={`/questions/1`} className='link-underline-light link-body-emphasis link-offset-2'>
                <h1 >{topics[0].title}</h1>
            </Link>
        </div>
        <div className='border border-4 rounded'>
        <img src={topics[1].img} alt="" width='420px' height='380px' className='rounded m-3' />
        
        <Link to={`/questions/8`} className='link-underline-light link-body-emphasis link-offset-2'>
            <h1 >{topics[1].title}</h1>
        </Link>
    </div>
    </>
        
              }
      
      </div>
        </div>
      </>
    );
  }
  
  {/* {topic.map((row) => {
    return (
        <Topic key={row.id} title={row.title} img={row.img} id={row.id}/>
    );
  })} */}
export default MainPage;