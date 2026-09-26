import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Globe2,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { AspaButton } from "../components/aspa-button";
import { ThreeOrbs } from "../components/three-orbs";
import { TiltCard } from "../components/tilt-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AspaWeb — High-Converting Websites in 24–48 Hours" },
      { name: "description", content: "Premium, fully managed websites for local businesses, designed and launched in 24–48 hours." },
      { property: "og:title", content: "AspaWeb — Websites Built to Win Local Business" },
      { property: "og:description", content: "Mobile-first websites, Google-ready and fully managed from €400." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AspaWeb,
});

const features = [
  { icon: MonitorSmartphone, title: "Mobile-First Design", text: "Fast, responsive, and looks perfect on any phone." },
  { icon: Zap, title: "24–48 Hour Turnaround", text: "From saying ‘yes’ to a live URL in under two days." },
  { icon: MessageCircle, title: "WhatsApp Integrated", text: "Direct chat buttons so customers can reach you instantly." },
  { icon: MapPin, title: "Google Ready", text: "Optimized for local search and Google Maps integration." },
  { icon: Wrench, title: "Zero Maintenance", text: "I handle the hosting, SSL, updates, and technical upkeep." },
  { icon: Sparkles, title: "3D & Modern UI", text: "Premium design that positions you at the top of your industry." },
];

function AspaWeb() {
  const reduceMotion = useReducedMotion();
  const float = (delay = 0, distance = 12) => reduceMotion ? {} : {
    y: [0, -distance, 0],
    transition: { duration: 4.8, repeat: Infinity, ease: "easeInOut" as const, delay },
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="fixed inset-0 -z-0 bg-grid opacity-50" aria-hidden="true" />

      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="glass mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-3 sm:flex sm:justify-between sm:px-5">
          <a href="#top" className="min-w-0 text-xl font-extrabold tracking-normal text-gradient">AspaWeb</a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
            <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          </div>
          <AspaButton className="px-4 py-2.5 text-xs sm:text-sm">Chat on WhatsApp</AspaButton>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid min-h-[94vh] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-[1.05fr_.95fr] md:px-8 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-2 text-xs font-semibold text-secondary-foreground">
            <span className="h-2 w-2 rounded-full bg-success shadow-success" />
            Premium websites for local businesses
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-normal sm:text-6xl lg:text-7xl">
            I Build High-Converting Websites for Local Businesses in <span className="text-gradient">24–48 Hours.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Stop losing clients to competitors. I design, build, and launch fully managed, mobile-first websites so you can focus on running your business.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AspaButton className="animate-soft-pulse px-7 py-4 text-base">Get Your Free Demo</AspaButton>
            <span className="text-sm text-muted-foreground">No commitment required</span>
          </div>
        </motion.div>

        <div className="relative mx-auto h-[470px] w-full max-w-[520px] [perspective:1200px] sm:h-[560px]">
          <div className="absolute inset-[12%] rounded-full bg-visual-glow blur-3xl" aria-hidden="true" />
          <ThreeOrbs />
          <motion.div animate={float(0, 16)} className="glass absolute left-[4%] top-[12%] w-[82%] rounded-2xl p-3 shadow-visual [transform:rotateY(-10deg)_rotateX(7deg)]">
            <div className="flex items-center gap-1.5 border-b border-border pb-3"><i className="h-2 w-2 rounded-full bg-accent" /><i className="h-2 w-2 rounded-full bg-primary" /><i className="h-2 w-2 rounded-full bg-muted-foreground" /></div>
            <div className="grid grid-cols-[.35fr_1fr] gap-3 pt-3">
              <div className="min-h-56 rounded-xl bg-secondary p-3"><div className="h-3 w-16 rounded-full bg-primary/40" /><div className="mt-7 space-y-3">{[1,2,3,4].map((n) => <div key={n} className="h-2 rounded-full bg-muted" />)}</div></div>
              <div className="space-y-3"><div className="h-28 rounded-xl bg-hero-panel p-4"><div className="h-3 w-3/4 rounded-full bg-foreground/70" /><div className="mt-3 h-2 w-1/2 rounded-full bg-muted-foreground/60" /><div className="mt-5 h-7 w-24 rounded-full bg-primary" /></div><div className="grid grid-cols-2 gap-3"><div className="h-24 rounded-xl bg-secondary" /><div className="h-24 rounded-xl bg-accent/20" /></div></div>
            </div>
          </motion.div>
          <motion.div animate={float(0.7, 13)} className="glass absolute bottom-[8%] right-[1%] w-[66%] rounded-2xl p-4 shadow-visual [transform:rotateY(10deg)_rotateX(-4deg)]">
            <div className="flex items-center justify-between"><div><p className="text-[10px] uppercase text-muted-foreground">This month</p><p className="mt-1 text-2xl font-bold">+68%</p></div><div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary"><ArrowRight /></div></div>
            <div className="mt-4 flex h-20 items-end gap-2">{[35,55,42,78,65,92].map((h, i) => <i key={i} className="flex-1 rounded-t-sm bg-chart-1" style={{ height: `${h}%` }} />)}</div>
          </motion.div>
          <motion.div animate={float(0.25, 18)} className="glass absolute right-[2%] top-[4%] grid h-20 w-20 place-items-center rounded-2xl text-primary shadow-glow"><Rocket className="h-9 w-9" /></motion.div>
          <motion.div animate={float(1.1, 14)} className="glass absolute bottom-[18%] left-0 grid h-16 w-16 place-items-center rounded-full text-accent shadow-visual"><Globe2 className="h-7 w-7" /></motion.div>
          <motion.div animate={float(1.6, 10)} className="glass absolute right-[4%] top-[46%] grid h-14 w-14 place-items-center rounded-2xl text-foreground"><MonitorSmartphone className="h-6 w-6" /></motion.div>
        </div>
      </section>

      <section id="process" className="relative z-10 border-y border-border bg-section px-5 py-16 md:px-8">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center text-2xl font-semibold leading-relaxed sm:text-3xl">
          <span className="text-muted-foreground">Hi, I’m Abdul Samad.</span> I don’t just sell websites; I build digital assets that get local tradesmen and businesses found on Google. <span className="text-gradient">No jargon. No server headaches. Just results.</span>
        </motion.p>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 max-w-2xl"><p className="section-label">Everything handled</p><h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">Built to work as hard as you do.</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={feature.title} className="glass group min-h-64 rounded-2xl p-6 transition-colors hover:border-primary/40">
                <motion.div animate={float(index * 0.15, 7)} className="grid h-14 w-14 place-items-center rounded-xl bg-icon text-primary shadow-inset"><Icon className="h-7 w-7" /></motion.div>
                <p className="mt-12 text-xs font-bold text-primary">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-6 text-muted-foreground">{feature.text}</p>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="relative z-10 px-5 pb-28 pt-10 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center"><p className="section-label">Simple pricing</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">One package. Everything included.</h2></div>
        <TiltCard className="pricing-glow glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary"><ShieldCheck className="h-4 w-4" /> Complete service</div>
              <h3 className="mt-5 text-2xl font-bold sm:text-3xl">The “Done-For-You” Package</h3>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-3"><span className="text-5xl font-extrabold text-gradient">€400</span><span className="text-muted-foreground">setup</span></div>
              <p className="mt-2 text-lg font-semibold">+ €30/month <span className="font-normal text-muted-foreground">hosting & maintenance</span></p>
            </div>
            <ul className="space-y-3 text-sm">
              {["3-Page Custom Design", "Free Domain Setup", "Lightning Fast Hosting", "SSL Certificate", "Monthly Check-ups"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-success/15 text-success"><Check className="h-3.5 w-3.5" /></span>{item}</li>)}
            </ul>
          </div>
          <AspaButton className="mt-10 w-full py-4 text-base">Start Your Project on WhatsApp</AspaButton>
        </TiltCard>
      </section>

      <footer className="relative z-10 border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">© 2026 AspaWeb · Built for local businesses that mean business.</footer>

      <motion.a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Message me directly on WhatsApp" whileHover={{ scale: 1.08, rotate: -4 }} animate={reduceMotion ? {} : { y: [0, -7, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-success text-success-foreground shadow-success sm:bottom-7 sm:right-7">
        <MessageCircle className="h-7 w-7 fill-current" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-popover px-3 py-2 text-xs font-semibold text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">Message me directly!</span>
      </motion.a>
    </main>
  );
}
