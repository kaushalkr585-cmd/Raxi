import { motion } from "framer-motion";
import { rewards } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function RewardsSection() {
  return (
    <section id="rewards" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Raxi Refer & Earn Program"
          title="Invite new members and grow your network."
          description="The Refer & Earn program is a smart way to increase your rewards by inviting others to join the platform."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="quiet-panel rounded-[2rem] p-7" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} transition={transition}>
            <p className="text-sm uppercase tracking-[0.22em] text-violet-300">How to Use Raxi Referral Program</p>
            <div className="mt-8 space-y-6">
              {["Open Refer & Earn", "Copy your invite code", "Share with friends", "Earn bonuses"].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <p className="w-40 text-sm font-medium text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            {rewards.map((reward, index) => (
              <motion.article key={reward.label} className="rounded-[1.7rem] border border-white/8 bg-white/[0.035] p-6" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} transition={{ ...transition, delay: index * 0.06 }}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">{reward.label}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">{reward.value}</h3>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/8 sm:w-44">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-violet-300 to-blue-300" initial={{ width: 0 }} whileInView={{ width: `${70 + index * 10}%` }} viewport={viewport} transition={{ duration: 0.75, delay: 0.15 }} />
                  </div>
                </div>
                <p className="mt-5 leading-7 text-zinc-400">{reward.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
