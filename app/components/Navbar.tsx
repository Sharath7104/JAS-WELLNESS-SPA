'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logoImage from '../../public/images/Logo.webp';
import { WHATSAPP_URL } from '../config/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#d8c5a3]/50 bg-[#f8f1e7]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 md:px-8 md:py-2">
        <Link href="/" className="flex items-center gap-3 tracking-wide">
          <Image
            src={logoImage}
            alt="JAS Wellness Spa logo"
            width={400}
            height={400}
            className="h-16 w-auto object-contain md:h-20"
          />
          <div>
            <p className="font-serif text-lg text-[#2d241a] md:text-2xl">JAS Wellness Spa</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8c6d43] md:text-[11px] md:tracking-[0.24em]">
              Pondicherry
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            (() => {
              const isActive = isActivePath(link.href);

              return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] transition ${
                isActive ? 'font-semibold text-[#8c6636]' : 'text-[#403224] hover:text-[#9f7a45]'
              }`}
            >
              {link.label}
            </Link>
              );
            })()
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#9f7a45] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#5f4526] transition hover:bg-[#9f7a45] hover:text-white"
          >
            Book Now
          </a>
        </div>

        <button
          className="text-2xl text-[#2d241a] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="space-y-4 border-t border-[#dbc9ad] bg-[#f8f1e7] px-6 py-5 md:hidden">
          {links.map((link) => (
            (() => {
              const isActive = isActivePath(link.href);

              return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-xs uppercase tracking-[0.2em] ${
                isActive ? 'font-semibold text-[#8c6636]' : 'text-[#3c2f21]'
              }`}
            >
              {link.label}
            </Link>
              );
            })()
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-[#8f6b3f] px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-white"
          >
            Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}