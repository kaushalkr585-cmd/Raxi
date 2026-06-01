import { motion } from "framer-motion";
import { steps } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="raxi-register" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="How Raxi Platform Works"
          title="Create account, download app, explore games, and play."
          description="Create your account using your mobile number, complete verification, add funds to your wallet, select games, and withdraw earnings after completing the required conditions."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" />
          <motion.div className="absolute left-1/2 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-violet-300 via-blue-300 to-transparent md:block" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={viewport} transition={{ duration: 0.8, ease: "easeOut" }} />
          <div className="grid gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const right = index % 2 === 1;
              return (
                <motion.div key={step.title} className={`grid items-center gap-6 md:grid-cols-2 ${right ? "" : "md:text-right"}`} initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} transition={{ ...transition, delay: index * 0.08 }}>
                  <div className={right ? "md:col-start-2" : ""}>
                    <div className="quiet-panel rounded-[1.7rem] p-6">
                      <div className={`flex items-center gap-4 ${right ? "" : "md:flex-row-reverse"}`}>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300">
                          <Icon size={22} />
                        </span>
                        <div>
                          <p className="text-sm text-zinc-500">Step {index + 1}</p>
                          <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-5 leading-7 text-zinc-400">{step.text}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
