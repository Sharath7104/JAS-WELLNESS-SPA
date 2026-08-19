'use client';

import { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../config/site';

const OFFER_SESSION_KEY = 'jas-first-time-offer-shown';
const OFFER_DURATION_SECONDS = 10;

export default function FirstTimeOfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION_SECONDS);

  useEffect(() => {
    const hasShown = sessionStorage.getItem(OFFER_SESSION_KEY);

    if (hasShown) {
      return;
    }

    sessionStorage.setItem(OFFER_SESSION_KEY, 'true');

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      window.clearInterval(countdownTimer);
    }, OFFER_DURATION_SECONDS * 1000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(countdownTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/40 px-4 pt-20 backdrop-blur-[2px]">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#ecd8ba] bg-gradient-to-br from-[#fff9f0] via-[#fff2de] to-[#f8e5c8] p-7 text-center shadow-[0_35px_80px_-35px_rgba(0,0,0,0.6)]">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-lg text-[#7f6037] transition hover:bg-white"
        >
          ×
        </button>

        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f6d49a]/40" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#c59253]/20" />

        <p className="relative inline-flex rounded-full border border-[#d7b179] bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8a6738]">
          First-Time Welcome Offer
        </p>

        <p className="relative mt-4 text-2xl">✨</p>
        <h3 className="relative mt-2 font-serif text-4xl text-[#2f2419]">
          Get ₹500 Off
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-[#5f4c37]">
          New to JAS Wellness Spa? Enjoy an instant ₹500 discount on your first booking.
        </p>

        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hello, I want to claim the first-time offer of ₹500 off.')}`}
          target="_blank"
          rel="noreferrer"
          className="relative mt-5 inline-block rounded-full bg-[#8f6b3f] px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#76552f]"
        >
          Claim Offer
        </a>

        <p className="relative mt-4 text-xs uppercase tracking-[0.18em] text-[#7f6037]">
          Closing in {secondsLeft}s
        </p>

        <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-[#d9ba88]/40">
          <div className="h-full w-full origin-left animate-pulse rounded-full bg-[#8f6b3f]/80" />
        </div>
      </div>
    </div>
  );
}
