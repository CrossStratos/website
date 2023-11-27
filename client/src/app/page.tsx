import LandingPageView from '@/components/views/landing/landing';
import React from 'react';
import { NewRoutes } from '@/data/routes/routes'

export default function Home() {
  const routes = NewRoutes()

  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className='curve' />
        <LandingPageView routes={routes} />
      </section>
    </main>
  )
}