"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function YesPage() {
  const herName = "Urie";
  const yourName = "Davie";
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white px-4 py-14 text-slate-800 overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {["🎉", "💖", "✨", "💕", "🎊", "💗", "⭐", "💝"][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      )}

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 blur-3xl opacity-50 animate-pulse-slow" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Celebration */}
        <div className="text-center">
          <div className="inline-block animate-bounce-gentle">
            <span className="text-8xl">🎉</span>
          </div>

          <h1 className="mt-8 text-6xl font-bold tracking-tight sm:text-7xl animate-fade-in">
            YAAAY! 💞
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-2xl text-slate-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            You just made me the happiest person alive.
          </p>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold tracking-tight">
              Official Valentine's Day Contract 📜
            </h2>

            <div className="mt-8 space-y-6 text-left text-lg text-slate-700">
              <p>
                <strong>Between:</strong> {yourName} (The Hopelessly In Love One)
                <br />
                <strong>And:</strong> {herName} (The Most Amazing Person Ever)
              </p>

              <div>
                <p className="font-semibold text-slate-900 mb-3">Terms & Conditions:</p>
                <ul className="space-y-2 list-none">
                  <li>✓ Unlimited hugs and cuddles (non-negotiable)</li>
                  <li>✓ Spontaneous date nights and adventures</li>
                  <li>✓ Daily reminders that you're incredible</li>
                  <li>✓ Sharing snacks (even the good ones)</li>
                  <li>✓ Being your personal cheerleader</li>
                  <li>✓ Holding hands in public (no shame)</li>
                  <li>✓ Making you smile when you need it most</li>
                  <li>✓ Loving you more every single day</li>
                </ul>
              </div>

              <p className="text-base italic text-slate-600">
                * This contract is valid indefinitely and cannot be terminated.
                <br />
                ** Automatic renewal every day because I choose you. Always.
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-center font-semibold">
                  ❤️ Happy Valentine's Day, {herName} ❤️
                </p>
                <p className="text-center text-base text-slate-600 mt-2">
                  Thank you for being mine.
                </p>
              </div>
            </div>
          </div>

          {/* Fun facts */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 p-6 shadow-lg">
              <div className="text-4xl mb-3">💕</div>
              <p className="text-3xl font-bold text-rose-700">365</p>
              <p className="text-sm text-slate-700 mt-1">Days a year I'll love you</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 p-6 shadow-lg">
              <div className="text-4xl mb-3">⭐</div>
              <p className="text-3xl font-bold text-rose-700">∞</p>
              <p className="text-sm text-slate-700 mt-1">Reasons you're amazing</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <p className="text-3xl font-bold text-rose-700">100%</p>
              <p className="text-sm text-slate-700 mt-1">Your shayla forever</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link
              href="/"
              className="rounded-2xl bg-rose-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Read the letter again 💌
            </Link>
            <button
              onClick={() => setShowConfetti(true)}
              className="rounded-2xl bg-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl ring-1 ring-black/10 hover:bg-rose-50 hover:scale-105 transition-all duration-300"
            >
              More confetti! 🎉
            </button>
          </div>

          <p className="mt-8 text-sm text-slate-600 italic">
            P.S. — This is the best decision you've ever made. 😌
          </p>
        </div>

        <footer className="mt-14 pb-10 text-center text-sm text-slate-500">
          Forever yours, <span className="font-semibold text-rose-700">{yourName}</span> 💞
        </footer>
      </div>
    </main>
  );
}