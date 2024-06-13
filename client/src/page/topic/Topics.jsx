import React from'react';
function Topics({ topics,setTopics }) {


  return (
      <div>
        <h1>Категории</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {topics&&topics.map((topic)=>(
                <TopicItem topic={topic} key={topic.id} setTopics={setTopics} />
            ))}
        </div>
        </div>
  );
}

export default Topics;