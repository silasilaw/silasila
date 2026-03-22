import { motion } from "framer-motion";
import { Code2, Video, Coffee, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [open, setOpen] = useState<number | null>(0);

  const stats = [
    // { icon: Code2, value: "50+", label: "Projects Selesai" },
    // { icon: Video, value: "10+", label: "Video Konten" },
    { icon: Coffee, value: "1000", label: "Cangkir Kopi" },
    { icon: Code2, value: "1", label: "projects selesai" },
  ];

  const accordionData = [
    {
      title: "about me",
      content:
        "HELLO!, saya lahir di Aceh pada tanggal 30 November 2009. Saat ini saya adalah seorang pelajar di MAN 1 Banda Aceh, tepatnya di kelas kedinasan. Saya memilih kelas ini karena saya tertarik dengan hal-hal yang berhubungan dengan dunia kedinasan, seperti instansi pemerintahan dan pelayanan masyarakat.Sebagai pelajar, saya terus berusaha belajar dan mengembangkan diri, baik dalam hal pengetahuan maupun kedisiplinan. Saya ingin mempersiapkan diri sejak sekarang agar bisa meraih cita-cita saya di masa depan, khususnya di bidang yang saya minati.",
    },
    {
      title: "hoobies",
      content:
        "In my free time, I like doing several activities. One of my hobbies is drawing because it allows me to express my creativity and imagination. I also enjoy dancing, which makes me feel happy and energetic. Besides that, I can cook and sometimes I like to try making simple dishes when I have spare time. These activities help me relax and enjoy my free time.",
    },
    // {
    //   title: "Hal yang Saya Sukai",
    //   content:
    //     "I really like blue because it feels calm and peaceful. I like learning new things and expressing myself through my hobbies",
    // },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            su di me ˙𐃷˙
          </span>

          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            HELLO DEAR!
          </motion.h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO / ICON */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden glass shadow-card"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
  
               <motion.img
               src="/porto 5.jpeg"
               alt="Arsila"
               animate={{ y: [0, -8, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
                className="w-full h-full object-cover"
               />
                </div>
              </motion.div>

              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">
                  (..◜ᴗ◝..)
                </p>
                {/* <p className="text-sm text-muted-foreground">▶︎•၊၊||၊|။|||||။၊|။•</p> */}
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              I'M ARSILA HUMAIRA
            </h3>

            {/* ACCORDION */}
            <div className="space-y-3">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-4 font-medium"
                  >
                    {item.title}

                    <ChevronDown
                      className={`transition-transform ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 text-muted-foreground"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}