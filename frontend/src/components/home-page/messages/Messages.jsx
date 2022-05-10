import './styles.css';
import useFetch from '../../../logic/useFetch';
import { localhostUrl } from '../../../config';

import React from 'react';

export default function Messages() {
  const { data, error, loading } = useFetch(`${localhostUrl}/messages`);
  console.log("Messages:",data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;
  return (
    <div className='messages'>{data.data.map((message, index) => (
      <div key={index} className="message">
      <p>{message.attributes.body}</p>
    </div>

    ))}</div>
  )
}
