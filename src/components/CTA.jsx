import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../raxi-logo.png";
import { registrationLink } from "../data/siteData";
import { fadeUp, scaleIn, transition, viewport } from "../utils/motion";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <motion.div className="quiet-panel relative overflow-hidden rounded-[2.4rem] p-8 text-center sm:p-12 lg:p-16" initial="hidden" whileInView="show" viewport={viewport} variants={scaleIn} transition={transition}>
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-violet-500/12 to-transparent" />
          <motion.img
            src={logo}
            alt="Raxi Game app download logo"
            className="relative mx-auto w-full max-w-[360px]"
            variants={fadeUp}
            transition={transition}
            loading="lazy"
            decoding="async"
            width="1280"
            height="449"
          />
          <motion.h2 className="relative mx-auto mt-10 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl" variants={fadeUp} transition={{ ...transition, delay: 0.06 }}>
            Raxi App Download & Installation Guide
          </motion.h2>
          <motion.p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400" variants={fadeUp} transition={{ ...transition, delay: 0.12 }}>
            Visit the official website, click on the Download App or APK Download option, and register a new account or log in with your existing details.
          </motion.p>
          <motion.div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row" variants={fadeUp} transition={{ ...transition, delay: 0.18 }}>
            <a href={registrationLink} target="_blank" rel="noreferrer" aria-label="Register and download Raxi app" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-zinc-200">
              <Download size={17} />
              Register Download
            </a>
            <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View FAQ
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
