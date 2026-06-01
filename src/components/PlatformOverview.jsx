import { motion } from "framer-motion";
import { overview } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function PlatformOverview() {
  const [lead, ...items] = overview;
  const LeadIcon = lead.icon;

  return (
    <section id="overview" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Choose Raxi?"
          title="Raxi is a modern and fast-growing online gaming platform."
          description="Raxi offers a variety of prediction-based and interactive games such as Wingo, K3, 5D, Slots, Plinko, Limbo, and Aviator."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            className="quiet-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-9"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            transition={transition}
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
            <LeadIcon className="mb-8 text-violet-300" size={34} />
            <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{lead.label}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{lead.detail}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Registration", "Login", "Wallet"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-sm text-zinc-500">Raxi</p>
                  <p className="mt-1 font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="group rounded-[1.6rem] border border-white/8 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:bg-white/[0.055]"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{ ...transition, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-blue-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
