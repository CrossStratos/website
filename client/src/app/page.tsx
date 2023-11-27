'use client'

import LandingPageView from '@/components/views/landing/container';
import NavBarView from '@/components/views/navbar/container';
import React from 'react';
import { Routes } from '@/data/routes/routes'

export default function Home() {
  const routes: Routes = {
    resumeRoute: "/resume.pdf",
    aboutRoute: "/about",
    projectsRoute: "/projects"
  }

  return (
    <main className="flex min-h-screen flex-col">
      {NavBarView(routes)}
      <section>
      <div className='curve'/>
      <LandingPageView/>
      </section>  
    </main>
  )
}