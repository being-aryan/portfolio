import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Connect via email / social buttons 🙂");
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center premium-title">
            Get In Touch
          </h2>
          <p className="text-center text-white/60 mt-3">
            Looking for internship opportunities. Let&apos;s connect!
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal>
            <form
              onSubmit={onSubmit}
              className="glass card-shadow rounded-2xl p-8 border border-white/10"
            >
              <label className="text-sm text-white/70">Name</label>
              <input
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="Your name"
              />

              <label className="text-sm text-white/70 mt-5 block">Email</label>
              <input
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/25"
                placeholder="you@example.com"
              />

              <label className="text-sm text-white/70 mt-5 block">Message</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/25 resize-none"
                placeholder="Tell me about the opportunity..."
              />

              <button
                type="submit"
                className="mt-6 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:opacity-90 transition card-shadow"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass card-shadow rounded-2xl p-8 border border-white/10 h-full">
              <h3 className="text-white font-semibold text-lg">
                Connect with me
              </h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Feel free to reach out via email or connect on LinkedIn. I&apos;m
                actively seeking software engineering internship opportunities!
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/being-aryan"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full glass border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/8 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full glass border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/8 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:aryan941515@gmail.com"
                  className="rounded-full glass border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/8 transition"
                >
                  Email
                </a>

                <a
                  href="tel:+917392001277"
                  className="rounded-full glass border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/8 transition"
                >
                  Phone
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
