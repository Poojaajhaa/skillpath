import { Course } from "./types.ts"
import { formatCoursePrice } from "./price.ts"

type CourseCardProps = {
    course?: Course
    countryCode?: "IN" | "US" | null
    cardRadius?: number
}

export function CourseCard({
    course,
    countryCode = "IN",
    cardRadius = 16,
}: CourseCardProps) {
    if (!course) {
        return null
    }

    return (
        <article
            style={{
                padding: 24,
                border: "1px solid #e5e5e5",
                borderRadius: cardRadius,
                background: "#ffffff",
                boxSizing: "border-box",
            }}
        >
            <h3
                style={{
                    margin: "0 0 12px",
                    fontSize: 22,
                    lineHeight: 1.3,
                }}
            >
                {course.courseName}
            </h3>

            <p
                style={{
                    margin: 0,
                    color: "#666",
                    lineHeight: "24px",
                    height: "48px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {course.description}
            </p>

            <div
                style={{
                    marginTop: 20,
                    fontSize: 24,
                    fontWeight: 700,
                }}
            >
                {formatCoursePrice(course, countryCode)}
            </div>

            <div
                style={{
                    marginTop: 16,
                    color: "#666",
                    fontSize: 14,
                }}
            >
                Category: {course.mainCategory}
            </div>

            {course.refundable && (
                <span
                    style={{
                        display: "inline-block",
                        marginTop: 16,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "#f0fdf4",
                        color: "#166534",
                        fontSize: 12,
                        fontWeight: 600,
                    }}
                >
                    Refundable
                </span>
            )}
        </article>
    )
}
