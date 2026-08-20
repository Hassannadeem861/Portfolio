"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { profile } from "@/data/profile";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm("service_di62anm", "template_lglsnw7", form, publicKey);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="section-contact flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-send" />
        Contact
      </div>
      <h4 className="s-title letter-space--2 split-text effect-blur-fade">
        Let&apos;s build something useful <br className="d-none d-lg-block" />
        and impactful together
      </h4>
      <form className="form-contact" id="contactform" onSubmit={handleSubmit} noValidate>
        {status === "success" && (
          <div className="flat-alert msg-success" role="status">
            Thanks, your message has been sent successfully.
          </div>
        )}
        {status === "error" && (
          <div className="flat-alert msg-error" role="alert">
            Message could not be sent. Please email me directly at {profile.email}.
          </div>
        )}
        <div className="form-content effectFade fadeUp no-div">
          <fieldset className="field-ip">
            <input type="text" name="name" id="name" placeholder="Your Name *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="email" name="email" id="email" placeholder="Email Address *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="text" name="message" id="message" placeholder="Project Description" />
          </fieldset>
        </div>
        <div className="form-action effectFade fadeUp no-div">
          <div className="send-wrap">
            <button type="submit" className="tf-btn animate-btn animate-dark" disabled={status === "sending"}>
              <span className="text-body-3">{status === "sending" ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
          <a href={`mailto:${profile.email}`} className="text-body-1 link letter-space--2 text-black-72">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="text-body-1 link letter-space--2 text-black-72">
            {profile.phone}
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-1 link letter-space--2 text-black-72"
            >
              {social.label}
            </a>
          ))}
        </div>
      </form>
    </div>
  );
}
