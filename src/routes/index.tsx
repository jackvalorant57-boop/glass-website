import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Sparkles, Ruler, ShieldCheck, Wrench, Droplets, ArrowLeft } from "lucide-react";
import hero from "@/assets/gallery-2.jpeg";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.jpeg";
import g7 from "@/assets/gallery-7.jpeg";
import g8 from "@/assets/gallery-8.jpeg";
import g9 from "@/assets/gallery-9.jpeg";
import g10 from "@/assets/gallery-10.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "גל ונג זכוכיות | מקלחונים ועבודות זכוכית בהתאמה אישית" },
      { name: "description", content: "גל ונג זכוכיות מתמחים בהתקנת מקלחונים מזכוכית ועבודות זכוכית בהתאמה אישית. עיצוב מודרני, דיוק וגימור מושלם." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Droplets, title: "מקלחונים מזכוכית", desc: "מקלחונים שקופים, מעוצבים ועמידים, מותאמים במדויק לחלל האמבטיה שלכם." },
  { icon: Ruler, title: "מדידה והתאמה אישית", desc: "מדידה מקצועית בבית הלקוח ותכנון מדויק לכל פרויקט, גם במידות לא סטנדרטיות." },
  { icon: Sparkles, title: "עיצוב ייחודי", desc: "עיצובי זכוכית מודרניים עם פרזול איכותי, גימורים מבריקים ושחורים מט." },
  { icon: ShieldCheck, title: "זכוכית מחוסמת", desc: "שימוש בזכוכית מחוסמת באיכות פרימיום לבטיחות מירבית ועמידות לאורך שנים." },
  { icon: Wrench, title: "התקנה מקצועית", desc: "צוות מנוסה המבצע התקנה נקייה, מהירה ומדויקת עם אחריות מלאה." },
  { icon: Sparkles, title: "ציפוי אנטי-לימסטון", desc: "ציפוי מיוחד המקל על תחזוקה ושומר על שקיפות הזכוכית לאורך זמן." },
];

const gallery = [g1, g6, g5, g9, g4, g10, g3, g7, g8];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 backdrop-blur-md ring-1 ring-white/30">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">גל ונג זכוכיות</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-white/90 md:flex">
            <a href="#services" className="hover:text-white">השירותים</a>
            <a href="#gallery" className="hover:text-white">גלריה</a>
            <a href="#about" className="hover:text-white">אודות</a>
            <a href="#contact" className="hover:text-white">צרו קשר</a>
          </nav>
          <a
            href="tel:050-3763355"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:shadow-md md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            050-3763355
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate min-h-[100vh] overflow-hidden">
        <img
          src={hero}
          alt="מקלחון זכוכית מעוצב"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 pt-32 pb-20">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              מומחים בזכוכית מעל 20 שנה
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              מקלחוני זכוכית
              <br />
              <span className="text-white/80">בהתאמה אישית</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              גל ונג זכוכיות - שילוב של עיצוב מודרני, דיוק הנדסי וגימור מושלם.
              אנו מייצרים ומתקינים מקלחונים ועבודות זכוכית מותאמות לכל חלל.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-lg transition hover:shadow-xl">
                לקבלת הצעת מחיר
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                הגלריה שלנו
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">השירותים שלנו</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              עבודות זכוכית ברמת גימור גבוהה
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              מגוון רחב של פתרונות זכוכית למקלחת ולבית, בעיצוב מודרני ובאיכות שאין להתפשר עליה.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent/50"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">הגלריה שלנו</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              עבודות שביצענו
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              מבחר מהפרויקטים האחרונים שלנו - מקלחונים ועבודות זכוכית מותאמות אישית.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={src}
                  alt={`עבודת זכוכית ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={1067}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">אודות</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            אנחנו גל ונג זכוכיות
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            עם ניסיון של מעל 20 שנה בענף הזכוכית, אנו מתמחים בייצור והתקנה של מקלחוני זכוכית
            ועבודות זכוכית מותאמות אישית. כל פרויקט מקבל יחס אישי, מהתכנון הראשוני
            ועד להתקנה הסופית, תוך הקפדה על איכות חומרי הגלם, דיוק במידות וגימור ללא פשרות.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              { num: "+20", label: "שנות ניסיון" },
              { num: "100%", label: "אחריות ושירות" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-extrabold text-primary">{s.num}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 md:py-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/70">צרו קשר</span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                מוכנים להתחיל את הפרויקט שלכם?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                השאירו פרטים ונחזור אליכם בהקדם, או צרו קשר ישיר בטלפון או באימייל.
                נשמח לייעץ, למדוד ולהציע את הפתרון המושלם עבורכם.
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:050-3763355" className="flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">טלפון</div>
                    <div className="text-lg font-semibold" dir="ltr">050-3763355</div>
                  </div>
                </a>
                <a href="mailto:glaundaground3@gmail.com" className="flex items-center gap-4 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">אימייל</div>
                    <div className="text-lg font-semibold" dir="ltr">glaundaground3@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get("name");
                const phone = data.get("phone");
                const message = data.get("message");
                const body = encodeURIComponent(`שם: ${name}\nטלפון: ${phone}\n\n${message}`);
                window.location.href = `mailto:glaundaground3@gmail.com?subject=${encodeURIComponent("פנייה מהאתר")}&body=${body}`;
              }}
              className="rounded-2xl bg-card p-8 text-card-foreground"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <h3 className="text-2xl font-bold">השאירו פרטים</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">שם מלא</label>
                  <input id="name" name="name" required className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="phone">טלפון</label>
                  <input id="phone" name="phone" type="tel" required className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-2.5 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">איך נוכל לעזור?</label>
                  <textarea id="message" name="message" rows={4} className="mt-1.5 w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  שליחה
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground">גל ונג זכוכיות</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href="tel:050-3763355" className="hover:text-foreground" dir="ltr">050-3763355</a>
            <a href="mailto:glaundaground3@gmail.com" className="hover:text-foreground">glaundaground3@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
