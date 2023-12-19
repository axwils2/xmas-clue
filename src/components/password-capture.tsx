'use client'

import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

import {childData} from '@/constants';

export default function PasswordCapture() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const router = useRouter();

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value.toUpperCase().replace(/\s+/g, ''));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.entries(childData).find(([_, childObject]) => childObject.password.toUpperCase() === password);

    if (data) {
      const childName = data[0];
      router.push(`/${childName}`);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    setError(false);
  }, [password])

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center p-24 gap-4 h-screen">
      <label className="text-xmas-red">Password</label>
      <input
        autoFocus
        className="text-xmas-green py-1 px-2"
        value={password}
        onChange={handleOnChange}
      />
      {error && (
        <p className="text-xmas-red">This was not the correct password. Try again!</p>
      )}
      <button className="btn bg-xmas-green text-white" type="submit">Submit</button>
    </form>
  )
}
