import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return setError("All fields required");

    if (!/\S+@\S+\.\S+/.test(form.email))
      return setError("Invalid email");

    setError("");
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-semibold">Contact</h2>

      <form onSubmit={submit} className="mt-6 max-w-md">
        <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
        <textarea placeholder="Message" onChange={e => setForm({...form, message:e.target.value})} />
        {error && <p className="text-red-500">{error}</p>}
        <button className="mt-4">Send</button>
      </form>
    </section>
  );
}
