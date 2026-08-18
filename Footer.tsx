/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */

export default function Footer() {
    return (
        <footer
            style={{
                width: "100vw",
                height: "50vh",
                padding: "40px 10px 24px",
                background: "#111827",
                color: "#ffffff",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 24,
                    textAlign: "center",
                }}
            >
                {/* Brand */}
                <div>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: 24,
                            fontWeight: 700,
                        }}
                    >
                        Skillpath
                    </h2>

                    <p
                        style={{
                            margin: "8px 0 0",
                            color: "#9ca3af",
                            fontSize: 15,
                        }}
                    >
                        Learn skills. Build your future.
                    </p>
                </div>

                {/* Navigation */}
                <nav
                    style={{
                        display: "flex",
                        gap: 28,
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <a
                        href="#courses"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: 14,
                        }}
                    >
                        Courses
                    </a>

                    <a
                        href="#about"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: 14,
                        }}
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: 14,
                        }}
                    >
                        Contact
                    </a>
                </nav>

                {/* Divider */}
                <div
                    style={{
                        width: "100%",
                        height: 1,
                        background: "#374151",
                    }}
                />

                {/* Copyright */}
                <p
                    style={{
                        margin: 0,
                        color: "#9ca3af",
                        fontSize: 13,
                    }}
                >
                    © 2026 Skillpath. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
