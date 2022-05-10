import './styles.css';
import useFetch from '../../../logic/useFetch';
import { localhostUrl } from '../../../config';

import React from 'react';

export default function People() {
  const { data, error, loading } = useFetch(`${localhostUrl}/users`);
  console.log("USERS:",data);

  if (loading) return <p> Loading</p>;
  if (error) return <p> Oops, there is something wrong :(</p>;

  return (
    <div className='people'>{data.map((user, index) => (
      <div key={index} className="user">
      <h3>{user.username}</h3>
    </div>
    ))}</div>
  )
}
