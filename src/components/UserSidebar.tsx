import Image from "next/image";
import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";

type UserSidebarProps = {
    variant?: "v1" | "v2" | "v3";
};

export function UserSidebar({ variant = "v1" }: UserSidebarProps) {
    const showMetaLeft = variant !== "v2";
    const dotIsInline = variant === "v2";
    return (
        <div className="sidebar-user">
            <div className="wrap">
                <div className="user-image">
                    <div className="image">
      
                          {/* <Image
                           width={468}
                            height={856}
                            src="/assets/images/avatar/avatar.png"
                            alt="Avatar"
                             priority
                          /> */}
                      
                        <Image
                            width={468}
                            height={856}
                            src="/assets/images/avatar/about.png"
                            alt={`${profile.fullName} profile photo`}
                        />
                    </div>
              
                    {showMetaLeft && (
                        <div className="meta-left d-none d-sm-block">
                            <div className="bg-item-svg">
                                <ImageSwitch
                                    light="/assets/images/item/vector-user.svg"
                                    dark="/assets/images/item/vector-user_dark.svg"
                                    width={32}
                                    height={227}
                                />
                            </div>
                            <p className="avaiable-dot vertical text-body-3 text-black-72 fw-medium">
                                <span className="text-vertical">
                                    Available for Work
                                </span>
                                <span className="dot" />
                            </p>
                        </div>
                    )}
                </div>
                <div className="user-logo d-none d-lg-block">
                    <ImageSwitch
                        light="/assets/images/logo/logo.svg"
                        dark="/assets/images/logo/logo-2.svg"
                        width={40}
                        height={40}
                    />
                </div>
                <ul className="tf-social-icon-2 user-social d-grid">
                    {profile.socials.map((s) => (
                        <li key={s.label}>
                            <a href={s.href} aria-label={s.label}>
                                {s.label === "GitHub" ? (
                                    <svg
                                        className="social-icon-svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            fill="currentColor"
                                            d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.75 1.05A9.28 9.28 0 0 1 12 9.19c.85 0 1.7.12 2.49.36 1.92-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.55c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
                                        />
                                    </svg>
                                ) : (
                                    <i className={`icon ${s.icon}`} />
                                )}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#" aria-label="Threads">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.72">
                                    <path
                                        opacity="0.2"
                                        d="M1.51502 11.2356L1.55752 4.87313C1.56502 3.72125 2.37065 2.73375 3.48252 2.51375L9.6269 1.29563C11.1031 1.00313 12.4738 2.15813 12.4638 3.6875L12.4213 10.0513C12.4131 11.2025 11.6075 12.1894 10.4956 12.41L4.35127 13.6281C2.87502 13.9206 1.50502 12.7656 1.51502 11.2356Z"
                                        fill="black"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M4.52563 13.7744L4.56813 7.41062C4.575 6.25999 5.38125 5.27312 6.49313 5.05249L12.6375 3.83499C14.1138 3.54249 15.4844 4.69749 15.4744 6.22687L15.4319 12.5906C15.4244 13.7419 14.6188 14.7287 13.5069 14.9494L7.3625 16.1675C5.88625 16.46 4.51563 15.305 4.52563 13.7756V13.7744Z"
                                        fill="black"
                                    />
                                    <path
                                        opacity="0.8"
                                        d="M7.53625 16.3125L7.57875 9.94875C7.58625 8.79687 8.39187 7.81062 9.50375 7.59L15.6481 6.37187C17.1244 6.07937 18.495 7.23437 18.485 8.76375L18.4425 15.1275C18.435 16.2794 17.6294 17.2662 16.5175 17.4862L10.3731 18.7044C8.89687 18.9969 7.52625 17.8419 7.53625 16.3125Z"
                                        fill="black"
                                    />
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="user-info">
                    <p
                        className={
                            dotIsInline
                                ? "avaiable-dot text-body-3 text-black-72 fw-medium"
                                : "avaiable-dot text-body-3 fw-medium d-sm-none"
                        }
                    >
                        <span className="dot" />
                        <span>Available for Work</span>
                    </p>
                    <h5 className="greeting letter-space--2 text-white animationtext clip">
                        Hey, I’m{" "}
                        <span className="cd-words-wrapper">
                            {profile.rotatingNames.map((name, i) => (
                                <span
                                    key={name}
                                    className={`item-text ${i === 0 ? "is-visible" : "is-hidden"}`}
                                >
                                    {name}
                                </span>
                            ))}
                        </span>
                    </h5>
                    <p className="introduce text-white letter-space--05 text-body-3">
                        {profile.introBio}
                    </p>
                    <div className="br-line" />
                    <div className="action-group">
                        <a href="#" className="tf-btn-action">
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                            <span className="text text-body-3 letter-space--05 fw-medium">
                                Let’s talk
                            </span>
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                        </a>
                        <a href="/new update cv.pdf" target="_blank" rel="noopener noreferrer" className="action-down">
                            <i className="icon icon-download" />
                            <span className="text-body-3">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
