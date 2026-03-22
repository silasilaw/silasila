import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Drawing",
    description:
      "Expressing my creativity through sketches and illustrations that reflect my imagination and feelings.",
    tags: ["Art", "Sketch", "Creative"],
    images: ["🎨", "🖌️", "📒"],
    color: "from-pink-400/20 to-rose-400/20",
  },
  {
    title: "Dancing",
    description:
      "A way for me to feel free, happy, and full of energy while expressing myself through movement.",
    tags: ["Dance", "Passion", "Energy"],
    images: ["💃", "🎶", "✨"],
    color: "from-purple-400/20 to-pink-400/20",
  },
  {
    title: "Cooking",
    description:
      "Trying simple recipes and enjoying the process of making food in my free time.",
    tags: ["Cooking", "Fun", "Home"],
    images: ["🍳", "🍰", "🥄"],
    color: "from-yellow-400/20 to-orange-400/20",
  },
  {
    title: "Nature",
    description:
      "Finding peace and inspiration from beautiful natural places and quiet moments.",
    tags: ["Nature", "Peace", "Inspiration"],
    images: ["🌿", "🍃", "🌻"],
    color: "from-green-400/20 to-emerald-400/20",
  },
  {
    title: "Memories",
    description:
      "Capturing little moments that mean a lot to me and turning them into beautiful memories.",
    tags: ["Moments", "Photos", "Life"],
    images: ["📸", "💖", "🌈"],
    color: "from-sky-400/20 to-blue-400/20",
  },
  {
    title: "Learning",
    description:
      "Growing and improving myself step by step every day through new experiences and knowledge.",
    tags: ["Study", "Growth", "Journey"],
    images: ["📚", "✍️", "🌟"],
    color: "from-indigo-400/20 to-violet-400/20",
  },
];

function CardCarousel({
  images,
  color,
}: {
  images: string[];
  color: string;
}) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${color}`}
        >
          <span className="text-6xl md:text-7xl">{images[index]}</span>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur p-2 rounded-full"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur p-2 rounded-full"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            little things i love
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Creative Space
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <CardCarousel images={project.images} color={project.color} />

                <div className="space-y-3 mt-4">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button size="sm" className="rounded-full">
                      <Play className="h-4 w-4 mr-1" />
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}