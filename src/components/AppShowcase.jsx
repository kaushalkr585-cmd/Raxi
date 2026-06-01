import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { screenshots } from "../data/siteData";
import { fadeUp, scaleIn, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function AppShowcase() {
  const [active, setActive] = useState(0);
  const current = screenshots[active];
  const move = (direction) => setActive((value) => (value + direction + screenshots.length) % screenshots.length);

  return (
    <section id="raxi-app-download" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="Raxi App"
          title="Raxi App Download & Installation Guide"
          description="Downloading and installing the Raxi on your Android device is quick and easy. Since the app is provided as an APK file, users need to download it from the official source and install it manually for secure access."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            className="mx-auto w-full max-w-[360px]"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={scaleIn}
            transition={transition}
          >
            <div className="rounded-[3rem] border border-white/12 bg-zinc-950 p-3 shadow-soft">
              <div className="relative h-[640px] overflow-hidden rounded-[2.35rem] bg-ink-900">
                <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/70" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.title}
                    loading="lazy"
                    decoding="async"
                    width="540"
                    height="1024"
                    className="h-full w-full object-cover object-top"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} transition={transition}>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              0{active + 1} / 0{screenshots.length}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{current.title}</h3>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">{current.caption}</p>

            <div className="mt-9 flex gap-3">
              <button type="button" onClick={() => move(-1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10" aria-label="Previous screenshot">
                <ChevronLeft size={20} />
              </button>
              <button type="button" onClick={() => move(1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10" aria-label="Next screenshot">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-10 grid gap-3">
              {screenshots.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => setActive(index)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active === index ? "border-violet-300/40 bg-violet-400/10" : "border-white/8 bg-white/[0.025] hover:bg-white/[0.045]"
                  }`}
                >
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{item.caption}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
