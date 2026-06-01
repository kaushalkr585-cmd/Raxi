import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../raxi-logo.png";
import { referralCode, registrationLink } from "../data/siteData";
import { fadeUp, scaleIn, transition } from "../utils/motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div className="absolute inset-0 -z-10 bg-radial-soft" />
      <div className="absolute inset-x-6 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.h1
            className="text-balance max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ ...transition, delay: 0.08 }}
          >
            Raxi
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ ...transition, delay: 0.16 }}
          >
            Raxi is a secure online gaming platform Where user can play popular games such as Wingo, K3, 5D,
            and Aviator & earning exciting real rewards through skill based gameplay and easily login Raxi users
            can test their luck and skills through easy-to-play games and earn real rewards along with exciting prizes.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ ...transition, delay: 0.24 }}
          >
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Register and download Raxi app with referral code"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-zinc-200"
            >
              Register Download
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#raxi-app-download"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Raxi App
            </a>
          </motion.div>

          <motion.div
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ ...transition, delay: 0.28 }}
          >
            <span>Referral Code</span>
            <strong className="font-semibold text-white">{referralCode}</strong>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-xl gap-3 text-sm text-zinc-400 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ ...transition, delay: 0.32 }}
          >
            {["Latest Version 3.1", "App Size 12MB", "Welcome Bonus Up to Rs 100"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial="hidden"
          animate="show"
          variants={scaleIn}
          transition={{ ...transition, delay: 0.18 }}
        >
          <div className="quiet-panel relative overflow-hidden rounded-[2rem] p-7">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-violet-500/12 to-transparent" />
            <div className="relative rounded-[1.6rem] border border-white/10 bg-ink-950/72 p-8">
              <img
                src={logo}
                alt="Raxi Game logo for app download and registration"
                className="mx-auto mb-8 w-full max-w-[390px]"
                width="1280"
                height="449"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Raxi App</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Register Download</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Wingo", "K3", "Aviator"].map((game) => (
                    <div key={game} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4 text-center">
                      <p className="text-sm font-semibold text-white">{game}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
