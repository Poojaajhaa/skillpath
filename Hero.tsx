import { useState } from "react"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any-prefer-fixed
 */

export default function Hero() {
    const [hovered, setHovered] = useState(false)

    return (
        <section
            style={{
                width: "100%",
                minHeight: 560,
                padding: "100px 24px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                background: "#f8fafc",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 850,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Badge */}
                <div
                    style={{
                        padding: "8px 14px",
                        borderRadius: 999,
                        background: "#e0e7ff",
                        color: "#4338ca",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        marginBottom: 24,
                    }}
                >
                    LEARN • BUILD • GROW
                </div>

                {/* Heading */}
                <h1
                    style={{
                        margin: 0,
                        fontSize: "clamp(42px, 7vw, 76px)",
                        lineHeight: 1.05,
                        fontWeight: 800,
                        letterSpacing: "-2px",
                        color: "#111827",
                    }}
                >
                    Learn Skills.
                    <br />
                    Build Your Future.
                </h1>

                {/* Description */}
                <p
                    style={{
                        maxWidth: 620,
                        margin: "24px 0 32px",
                        fontSize: 18,
                        lineHeight: 1.6,
                        color: "#6b7280",
                    }}
                >
                    Learn practical skills through carefully designed courses
                    and take the next step toward your goals.
                </p>

                {/* CTA */}
                <a
                    href="#courses"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "14px 24px",
                        borderRadius: 10,
                        background: hovered ? "#3730a3" : "#4f46e5",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 600,
                        transition: "background 0.2s ease",
                    }}
                >
                    Explore Courses →
                </a>
            </div>
        </section>
    )
}
