import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flat-spacing text-center">
            <p className="sect-tag text-caption fw-medium">Page not found</p>
            <h1 className="s-title letter-space--2">This page does not exist.</h1>
            <p className="s-desc text-black-56">
                The page may have moved, or the URL may be incorrect.
            </p>
            <Link href="/" className="tf-btn-action">
                <span className="ic-wrap">
                    <i className="icon icon-arrow-right-top" />
                </span>
                <span className="text text-body-3 letter-space--05 fw-medium">
                    Back to portfolio
                </span>
            </Link>
        </main>
    );
}
