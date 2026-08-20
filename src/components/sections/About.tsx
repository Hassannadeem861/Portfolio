import Image from "next/image";
import { profile } from "@/data/profile";

type AboutProps = {
  variant?: "v1" | "v2";
};

export function About({ variant = "v1" }: AboutProps) {
  return (
    <div id="about" className={`section-about ${variant === "v2" ? "type-2" : ""} flat-spacing`}>
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Building reliable digital <br className="d-none d-lg-block" />
        experiences with modern web technology
      </h4>
      <div className="about-profile scrolling-effect effectTop">
        <div className="about-profile-image">
          <Image
            src="/assets/images/avatar/avatar-boy.png"
            alt={`${profile.fullName} profile photo`}
            width={360}
            height={440}
          />
        </div>
        <div className="about-profile-content">
          <p className="s-desc text-black-56">
            I am {profile.fullName}, a {profile.duty} focused on creating fast,
            accessible, and maintainable web applications. I turn ideas into
            practical digital products with clean interfaces and dependable
            backend systems.
          </p>
          <p className="about-profile-stack text-body-3 text-black-72">
            Core stack: React, Next.js, Node.js, Express.js, MongoDB, and MySQL.
          </p>
          <div className="about-profile-actions">
            <a href="#contact" className="tf-btn-action">
              <span className="ic-wrap">
                <i className="icon icon-arrow-right-top" />
              </span>
              <span className="text text-body-3 letter-space--05 fw-medium">Let&apos;s work together</span>
            </a>
            <a href={`mailto:${profile.email}`} className="text-body-3 link text-black-72">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
