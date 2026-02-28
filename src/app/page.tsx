"use client";

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Expertise } from '@/components/home/Expertise';
import { TechStack } from '@/components/home/TechStack';
import { Process } from '@/components/home/Process';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { CTA } from '@/components/home/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Expertise />
      <TechStack />
      <Process />
      <FeaturedProjects />
      <CTA />
    </main>
  );
}
