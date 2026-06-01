import { motion } from "framer-motion";
import { games } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function GamesSection() {
  return (
    <section id="games" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="Game Categories on Raxi"
            title="Raxi offers a variety of game categories."
            description="Whether you like quick prediction games for instant action or prefer relaxing with casual games, there’s something for everyone here."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {games.map((game, index) => {
              const Icon = game.icon;
              const featured = index === 0 || index === 3;
              return (
                <motion.article
                  key={game.name}
                  className={`group relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:bg-white/[0.055] ${featured ? "sm:row-span-2" : ""}`}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={fadeUp}
                  transition={{ ...transition, delay: index * 0.04 }}
                  whileHover={{ scale: 1.015 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-violet-200">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-zinc-400">{game.tone}</span>
                  </div>
                  <div className={featured ? "mt-20" : "mt-10"}>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{game.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{game.detail}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
