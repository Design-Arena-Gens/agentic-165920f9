"use client";

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <p className="text-white/70">Have a question? We?re here to help.</p>
        <div className="card space-y-2">
          <p><span className="text-white/60">Phone:</span> (555) 123-4567</p>
          <p><span className="text-white/60">Email:</span> hello@luxesalon.example</p>
          <p><span className="text-white/60">Address:</span> 123 Main St, Suite 200</p>
          <p><span className="text-white/60">Hours:</span> Daily 9:00 ? 19:00</p>
        </div>
      </div>
      <form className="card space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will get back to you.')}}>
        <div>
          <label className="label">Name</label>
          <input className="input" required placeholder="Your name" />
        </div>
        <div>
          <label className="label">Email</label>
          <input type="email" className="input" required placeholder="you@example.com" />
        </div>
        <div>
          <label className="label">Message</label>
          <textarea className="input min-h-[120px]" required placeholder="How can we help?" />
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
