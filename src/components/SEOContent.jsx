import { motion } from "framer-motion";
import { searchIntentBlocks, seoQuickLinks, seoSections, snippetAnswers, trustSignals } from "../data/seoData";
import { referralCode, registrationLink } from "../data/siteData";
import { fadeUp, transition, viewport } from "../utils/motion";
import SectionHeader from "./SectionHeader";

export default function SEOContent() {
  return (
    <section id="raxi-seo-guide" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Raxi Gaming Guide"
          title="Raxi Login, Register, App Download, Referral Code and Game Guide"
          description="A single-page Raxi guide covering app access, registration, referral code, withdrawal, Wingo, K3, 5D, Aviator, color prediction gaming, rewards, and responsible play."
        />

        <motion.nav
          className="mt-10 rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-4 text-center sm:text-left"
          aria-label="Raxi topic links"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={transition}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Topic Index</p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {seoQuickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/8 bg-black/20 px-4 py-2 text-center text-sm font-medium leading-tight text-zinc-300 transition hover:border-violet-300/40 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {snippetAnswers.map((item, index) => (
            <motion.article
              key={item.question}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 text-center sm:text-left"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              transition={{ ...transition, delay: index * 0.03 }}
            >
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.answer}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {searchIntentBlocks.map((block, index) => (
            <motion.article
              key={block.title}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 text-center sm:text-left"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              transition={{ ...transition, delay: index * 0.04 }}
            >
              <h2 className="text-xl font-semibold text-white">{block.title}</h2>
              <p className="mt-3 text-sm font-medium text-violet-300">{block.keywords}</p>
              <p className="mt-4 leading-7 text-zinc-400">{block.answer}</p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          className="mt-14 quiet-panel rounded-[2rem] p-6 text-center sm:p-8 sm:text-left"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          transition={transition}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Trust And Safety</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Raxi Information Review Notes</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Last reviewed: June 1, 2026. This page is written as an informational Raxi guide for login, registration, app download, referral code, withdrawal, games, rewards, and responsible gaming. Users should verify platform rules before depositing money or using wallet features.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <li key={signal} className="rounded-[1.25rem] border border-white/8 bg-black/20 p-4 text-sm leading-6 text-zinc-400">
                {signal}
              </li>
            ))}
          </ul>
        </motion.aside>

        <div className="mt-14 grid gap-5">
          <motion.article
            id="raxi-login"
            className="quiet-panel rounded-[2rem] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            transition={transition}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Raxi Login</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Raxi Login and Account Access</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              Raxi login is the account access process where registered users enter their mobile number and password to open the dashboard, wallet, games, rewards, and support options. Users should always use trusted links, keep OTP details private, and avoid sharing account credentials.
            </p>
          </motion.article>

          {seoSections.map((section, index) => (
            <motion.article
              key={section.id}
              id={section.id}
              className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-6 sm:p-8"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
              transition={{ ...transition, delay: Math.min(index * 0.025, 0.18) }}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{section.title}</h2>
              <p className="mt-4 rounded-[1.25rem] border border-white/8 bg-black/20 p-4 leading-8 text-zinc-300">
                {section.snippet}
              </p>
              <div className="mt-5 space-y-4 text-base leading-8 text-zinc-400">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}

          <motion.article
            id="raxi-withdrawal"
            className="rounded-[2rem] border border-white/8 bg-white/[0.035] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            transition={transition}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Raxi Withdrawal Guide</h2>
            <p className="mt-4 leading-8 text-zinc-400">
              To withdraw money from Raxi, users usually open the wallet or withdrawal area, choose Bank Account or UPI ID, enter the eligible amount, review payment details, and submit the request according to current platform limits. Withdrawal rules can change, so users should check account-level conditions before making any request.
            </p>
          </motion.article>

          <motion.article
            id="raxi-bonus"
            className="quiet-panel rounded-[2rem] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            transition={transition}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Referral Code</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Raxi Referral Code and Bonus</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              The Raxi referral code on this page is <strong className="font-semibold text-white">{referralCode}</strong>. Users can enter this invite code during registration if the platform asks for one. Referral bonuses, welcome bonus amounts, invite rewards, and wallet credits may depend on current rules and user activity.
            </p>
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-zinc-200"
              aria-label="Register on Raxi with referral code"
            >
              Register With Referral Code
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
