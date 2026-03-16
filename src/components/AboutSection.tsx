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
      title: "👤",
      content:
        "I’m someone who loves nature and enjoys spending time outdoors. I live in Keutapang, Aceh Besar. There are many beautiful natural places to visit around Aceh Besar, so it’s always fun to explore nature here. and i also like dancing and drawing because they make me feel creative and happy.",
    },
    {
      title: "In my free time",
      content:
        "I like cooking, although just a little bit, and I enjoy trying simple recipes. Cooking makes me relaxed and excited to try new things. I really like blue because it feels calm and peaceful. I like learning new things and expressing myself through my hobbies",
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
            Tentang Saya
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
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-8xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>

              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">
                  5+ Tahun
                </p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
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