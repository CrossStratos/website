'use client'

import React from 'react';

function MyButton({ title }: { title: string }) {
  console.log("called");
  return (
    <button onClick={() => {
      console.log("clicked!")
    }}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}