"use client";

import { profile } from "@/data/profile";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
            <button type="submit" className="tf-btn animate-btn animate-dark">
              <span className="text-body-3">Send Message</span>
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
