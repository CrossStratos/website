import Image from 'next/image'
import React, { useState } from 'react';
import MyApp from '../components/backpage/page';

export default function Home() {
  const [clicks, setClicks] = useState(0);

  function MyButton({ title }: { title: string }) {
    return <button onClick={() => {
      let nclicks = clicks + 1
      setClicks(nclicks)
    }}>{title + clicks}</button>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyButton title='Foobar'></MyButton>
    </main>
  )
}