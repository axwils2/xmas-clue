'use client'

import {ChangeEvent, useState} from 'react';
import {useRouter} from 'next/router';

import {childData} from '@/constants';

export default function Home() {
  const [password, setPassword] = useState('');

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onSubmit() {
    
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <label className="mb-2">Password</label>
      <input
        className="text-christmas-green py-1 px-2"
        value={password}
        onChange={handleOnChange}
      />
      <button className="btn bg-christmas-green" onClick={onSubmit}>Submit</button>
    </main>
  )
}
