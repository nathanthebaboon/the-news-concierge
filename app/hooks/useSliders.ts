'use client';

import { useEffect } from 'react';

type SliderOpts = { pxPerSec?: number };

export function useSliders() {
  useEffect(() => {
    function initLogoBelt(selector: string, opts: SliderOpts = {}) {
      const pxPerSec = opts.pxPerSec ?? 100;

      document.querySelectorAll(selector).forEach((beltRoot) => {
        const track = beltRoot.querySelector('.belt-track') as HTMLElement | null;
        const belt = track?.querySelector('.belt') as HTMLElement | null;
        if (!track || !belt) return;

        if (!track.dataset.cloned) {
          track.appendChild(belt.cloneNode(true));
          track.dataset.cloned = '1';
        }

        const setDur = () => {
          const width = belt.scrollWidth;
          const dur = Math.max(12, width / pxPerSec);
          track.style.setProperty('--dur', `${dur}s`);
        };

        const imgs = Array.from(belt.querySelectorAll('img')) as HTMLImageElement[];
        const ready = () => setDur();

        let loaded = 0;
        if (imgs.length === 0) ready();

        imgs.forEach((img) => {
          if (img.complete) {
            if (++loaded === imgs.length) ready();
          } else {
            img.addEventListener(
              'load',
              () => {
                if (++loaded === imgs.length) ready();
              },
              { once: true }
            );
          }
        });

        new ResizeObserver(setDur).observe(belt);
        window.addEventListener('resize', setDur);
      });
    }

    function initTeamSlider(selector: string, opts: { pxPerSec?: number } = {}) {
      const pxPerSec = opts.pxPerSec ?? 150;

      document.querySelectorAll(selector).forEach((slider) => {
        const track = slider.querySelector('.team-track') as HTMLElement | null;
        const marquee = track?.querySelector('.team-marquee') as HTMLElement | null;
        const belt = marquee?.querySelector('.team-belt') as HTMLElement | null;
        if (!track || !marquee || !belt) return;

        // Ensure exactly one clone of belt INSIDE marquee
        if (!marquee.dataset.cloned) {
          marquee.appendChild(belt.cloneNode(true));
          marquee.dataset.cloned = '1';
        }

        const setDuration = () => {
          const width = belt.scrollWidth;               // width of one belt
          const dur = Math.max(10, width / pxPerSec);   // seconds
          track.style.setProperty('--duration', `${dur}s`);
          track.style.setProperty('--beltW', `${width}px`);
        };

        const imgs = Array.from(belt.querySelectorAll('img')) as HTMLImageElement[];
        let loaded = 0;
        const ready = () => setDuration();

        if (imgs.length === 0) ready();
        imgs.forEach((img) => {
          if (img.complete) {
            if (++loaded === imgs.length) ready();
          } else {
            img.addEventListener(
              'load',
              () => {
                if (++loaded === imgs.length) ready();
              },
              { once: true }
            );
          }
        });

        new ResizeObserver(setDuration).observe(belt);
        window.addEventListener('resize', setDuration);
      });
    }


    initLogoBelt('.logo-belt', { pxPerSec: 100 });
    initTeamSlider('.team-slider', { pxPerSec: 150 });
  }, []);
}
