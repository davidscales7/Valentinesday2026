"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

export default function HomePage() {
  const herName = "[Her Name]";
  const yourName = "[Your Name]";

  const [opened, setOpened] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [revealedReasons, setRevealedReasons] = useState(new Set());
  const [revealedNotes, setRevealedNotes] = useState(new Set());

  useEffect(() => {
    if (opened) {
      setShowHearts(true);
      const timer = setTimeout(() => setShowHearts(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  const reasons = useMemo(
    () => [
      "You make the world feel lighter the second you show up.",
      "You're my favorite person to laugh with (and at, respectfully).",
      "You're beautiful in a way that makes my brain buffer.",
      "You're kind in a way that changes a room.",
      "You feel like home… with bonus butterflies.",
      "I'd choose you again. Easily. Every time.",
      "You make boring things fun (errands, waiting, existing).",
      "You inspire me to be better… which is rude, but I forgive you.",
      "You're my best friend and my favorite person to kiss.",
      "Your smile is my favorite notification.",
      "You make me want to be the kind of person who deserves you.",
      "You're the plot twist I never saw coming but always needed.",
    ],
    []
  );

  const openWhen = useMemo(
    () => [
      { 
        title: "Open when you miss me", 
        text: "Close your eyes and remember: I'm yours. Distance is temporary, but us? That's permanent. Also drink water. 💧",
        emoji: "🥺"
      },
      { 
        title: "Open when you're stressed", 
        text: "Breathe with me: in for 4, hold for 4, out for 4. I've got you. We'll handle it together. Then snacks.",
        emoji: "😮‍💨"
      },
      { 
        title: "Open when you need a smile", 
        text: "You're cute. Like… aggressively cute. It's a public safety issue. Scientists are concerned. I'm obsessed.",
        emoji: "😊"
      },
      { 
        title: "Open when it's late", 
        text: "I love you. Goodnight. I'm proud of you. Tomorrow's gonna be good. (Now sleep 😴)",
        emoji: "🌙"
      },
      { 
        title: "Open when you doubt yourself", 
        text: "You're capable of more than you know. I've seen it. I believe in you even when you don't.",
        emoji: "💪"
      },
      { 
        title: "Open when you need courage", 
        text: "You've done hard things before. You'll do this too. And I'll be right here, cheering embarrassingly loud.",
        emoji: "🦁"
      },
    ],
    []
  );

  const toggleReason = (index: number) => {
    setRevealedReasons(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleNote = (index: number) => {
    setRevealedNotes(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white px-4 py-14 text-slate-800">
      {/* Floating hearts animation */}
      {showHearts && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-up text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {["💖", "💕", "💗", "💓", "❤️"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Cinematic glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-16%] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 blur-3xl opacity-70 animate-pulse-slow" />
        <div className="absolute left-1/2 top-[25%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-100 via-rose-100 to-amber-100 blur-3xl opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-5xl">
        {!opened ? (
          /* INITIAL ENVELOPE VIEW - ONLY SHOW THIS */
          <section className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-2xl text-center">
              <div className="flex items-center justify-between mb-8 px-4">
                <div className="flex items-center gap-2 animate-fade-in">
                  <span className="text-xl">To:</span>
                  <span className="font-semibold text-slate-700">{herName}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <span className="text-xl">From:</span>
                  <span className="font-semibold text-slate-700">{yourName}</span>
                </div>
              </div>

              <div className="relative mx-auto w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 blur-3xl opacity-70 animate-pulse-slow" />

                <div className="rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur">
                  <button
                    onClick={() => setOpened(true)}
                    className="relative mx-auto w-full overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 hover:scale-[1.02] transition-transform duration-500 cursor-pointer group"
                  >
                    <svg viewBox="0 0 600 380" className="block w-full">
                      {/* Back panel */}
                      <rect x="0" y="0" width="600" height="380" fill="#fff1f2" />

                      {/* Flap */}
                      <polygon points="0,0 600,0 300,190" fill="#ffe4e6" />

                      {/* Side folds */}
                      <polygon points="0,380 0,90 300,240 0,380" fill="#fecdd3" opacity="0.95" />
                      <polygon points="600,380 600,90 300,240 600,380" fill="#fecdd3" opacity="0.95" />

                      {/* Bottom fold */}
                      <polygon points="0,380 300,220 600,380" fill="#fda4af" opacity="0.95" />

                      {/* subtle outline */}
                      <rect x="0" y="0" width="600" height="380" fill="none" stroke="#000" strokeOpacity="0.04" />
                    </svg>

                    {/* Seal */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3">
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-rose-600 text-white shadow-lg ring-2 ring-white text-2xl group-hover:scale-110 transition-transform">
                        ♥
                      </div>
                    </div>
                  </button>

                  <p className="mt-6 text-sm text-slate-600 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    Click to open 💌
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* FULL WEBSITE - SHOW AFTER OPENING */
          <>
            {/* Top bar */}
            <header className="flex flex-wrap items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-bounce-gentle">💌</span>
                <p className="font-semibold tracking-tight">For {herName}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>From</span>
                <span className="font-semibold text-slate-700">{yourName}</span>
              </div>
            </header>

            {/* CINEMATIC HERO */}
            <section className="mt-12 text-center">
              <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm shadow-sm ring-1 ring-black/5 animate-fade-in backdrop-blur">
                <span className="animate-spin-slow">🌹</span>
                <span>Happy Valentine's Day</span>
              </p>

              <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Hi <span className="text-rose-600 inline-block hover:scale-110 transition-transform cursor-default">{herName}</span> —
                <br />
                I made you a letter.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                A normal person would've made a card.
                <br />
                I made a website, because I'm romantic… and a little bit extra.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <a
                  href="#letter"
                  className="rounded-2xl bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Read the letter ↓
                </a>
                <Link
                  href="/yes"
                  className="rounded-2xl bg-white px-8 py-4 text-sm font-semibold shadow-sm ring-1 ring-black/10 hover:bg-rose-50 hover:scale-105 transition-all duration-300"
                >
                  Skip to the "yes" page 😄
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-600 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Scroll down to read 😌
              </p>
            </section>

        {/* LETTER */}
        <section id="letter" className="mt-16 scroll-mt-8 animate-fade-in">
          <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-black/5 sm:p-12 hover:shadow-2xl transition-shadow duration-500">
            <h2 className="text-3xl font-bold tracking-tight">My love,</h2>

            <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
              <p>
                I love you always and forever, thank you for the strength you give me, the kindness and the laughter you bring into my life. The way you make "ordinary" feel like something worth keeping.
              </p>
              <p>
                You're my favorite person to laugh with, to talk to, to do nothing with, to do everything with.
              </p>
              <p>
                If I ever act cool around you, just know it's an optical illusion. I'm actually really really in love with you. 😌
              </p>
              <p className="font-semibold text-slate-900">
                Happy Valentine's Day, {herName}. <br />
                Love from Your mahal ko {yourName} 💞
              </p>
            </div>

            {/* Video for us */}
            <div className="mt-8">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-xl">
                <video 
                  src="/us1.mp4"
                  controls
                  className="w-full"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Reasons */}
            <h3 className="mt-12 text-2xl font-bold tracking-tight">Reasons I love you</h3>
            <p className="mt-2 text-slate-700">A short list. Not because it's short — because the page has limits.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r, i) => (
                <button
                  key={i}
                  onClick={() => toggleReason(i)}
                  className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-500 hover:scale-105 ${
                    revealedReasons.has(i) 
                      ? 'bg-gradient-to-br from-rose-100 to-pink-100 shadow-lg' 
                      : 'bg-rose-50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <p className={`text-sm font-semibold transition-colors ${
                    revealedReasons.has(i) ? 'text-rose-800' : 'text-rose-700'
                  }`}>
                    #{String(i + 1).padStart(2, "0")}
                  </p>
                  <p className={`mt-2 text-slate-800 transition-all duration-500 ${
                    revealedReasons.has(i) ? 'opacity-100' : 'opacity-0 blur-sm'
                  }`}>
                    {r}
                  </p>
                  {!revealedReasons.has(i) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl group-hover:scale-110 transition-transform">💝</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Open when */}
            <h3 className="mt-12 text-2xl font-bold tracking-tight">Little "Open when…" notes</h3>
            <p className="mt-2 text-slate-700">Tiny messages for big feelings. Click to flip and reveal.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {openWhen.map((n, i) => (
                <div
                  key={i}
                  className="h-48 perspective-1000"
                  onClick={() => toggleNote(i)}
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 preserve-3d cursor-pointer ${
                      revealedNotes.has(i) ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-6 shadow-lg ring-1 ring-rose-200 hover:shadow-xl transition-shadow">
                      <div className="flex h-full flex-col items-center justify-center text-center">
                        <span className="text-4xl mb-3">{n.emoji}</span>
                        <p className="text-base font-semibold text-rose-700">{n.title}</p>
                        <p className="mt-3 text-sm text-slate-600 italic">Click to open...</p>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-white p-6 shadow-xl ring-2 ring-rose-200">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-sm font-semibold text-rose-700">{n.title}</p>
                          <p className="mt-4 text-slate-700 leading-relaxed">{n.text}</p>
                        </div>
                        <p className="text-xs text-slate-500 italic text-center mt-4">Click to close</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More videos of us */}
            <h3 className="mt-12 text-2xl font-bold tracking-tight">More of us 📹</h3>
            <p className="mt-2 text-slate-700">
              Add videos in <code className="rounded bg-slate-100 px-2 py-1 text-sm">public/</code> named{" "}
              <code className="rounded bg-slate-100 px-2 py-1 text-sm">us2.mp4</code>…{" "}
              <code className="rounded bg-slate-100 px-2 py-1 text-sm">us5.mp4</code>.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["/us2.mp4", "/us3.mp4", "/us4.mp4", "/us5.mp4"].map((src, i) => (
                <div 
                  key={src} 
                  className="group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <video 
                    src={src}
                    controls
                    className="w-full"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>

            {/* The Question */}
            <div className="mt-14 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 p-[2px] shadow-2xl hover:shadow-rose-300 transition-shadow duration-500">
              <div className="rounded-3xl bg-white p-10 text-center">
                <p className="text-sm font-semibold text-slate-600 animate-fade-in">One last thing…</p>
                <h4 className="mt-2 text-4xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Will you be my Valentine? 💘
                </h4>
                <p className="mx-auto mt-4 max-w-2xl text-slate-700 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  This agreement includes cuddles, snacks, emotional support, and an unreasonable amount of admiration.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Link
                    href="/yes"
                    className="group relative overflow-hidden rounded-2xl bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">Yes 😍</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link
                    href="/yes"
                    className="rounded-2xl bg-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl ring-1 ring-black/10 hover:bg-rose-50 hover:scale-105 transition-all duration-300"
                  >
                    Also yes 😄
                  </Link>
                </div>

                <p className="mt-6 text-xs text-slate-500">
                  (No "No" button here. This is a peace treaty.)
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setOpened(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl ring-1 ring-black/10 hover:bg-rose-50 hover:scale-105 transition-all duration-300"
              >
                Back to the top ↑
              </button>
              <Link
                href="/yes"
                className="rounded-2xl bg-rose-600 px-7 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Go to "YAY!" 🎉
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-14 pb-10 text-center text-sm text-slate-500">
          Made with 💞 by <span className="font-semibold text-slate-700">{yourName}</span> for{" "}
          <span className="font-semibold text-rose-700">{herName}</span>
        </footer>
          </>
        )}
      </div>
    </main>
  );
}