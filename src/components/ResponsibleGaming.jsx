import { motion } from "framer-motion";
import { trustPoints } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function ResponsibleGaming() {
  return (
    <section id="responsible-gaming" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="quiet-panel overflow-hidden rounded-[2rem] p-6 sm:p-9">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              eyebrow="Responsible Gaming on Raxi"
              title="Playing on Raxi should always remain safe, controlled, and enjoyable."
              description="It is important to maintain a balance between entertainment and responsibility while using the platform."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div key={point.title} className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} transition={{ ...transition, delay: index * 0.05 }}>
                    <Icon size={22} className="text-blue-300" />
                    <h3 className="mt-5 font-semibold text-white">{point.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{point.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
