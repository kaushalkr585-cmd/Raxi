import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { seoFaqs } from "../data/seoData";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pb-24 pt-12 sm:pb-32 sm:pt-14">
      <div id="faq" className="section-shell scroll-mt-28">
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeader
            align="center"
            eyebrow="FAQ"
            title="What is Raxi?"
            description="Raxi offers a smooth and easy-to-use platform for fast-paced and prediction-based games."
          />

          <motion.div layout className="space-y-3">
            {seoFaqs.map((item, index) => {
              const isOpen = open === index;
              const answerId = `faq-answer-${index}`;
              const buttonId = `faq-question-${index}`;
              return (
                <motion.div
                  key={item.question}
                  layout
                  transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                  className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-white/[0.035]"
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="font-semibold text-white">{item.question}</span>
                    <motion.span
                      className="shrink-0 text-zinc-400"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ChevronDown size={19} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={answerId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          exit={{ y: -6 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="px-5 pb-5 leading-7 text-zinc-400"
                        >
                          {item.answer}
                        </motion.p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
