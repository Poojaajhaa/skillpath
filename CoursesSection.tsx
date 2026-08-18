import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

import { Course } from "./types.ts"
import { fetchCourses, fetchCountryCode } from "./api.ts"
import { CourseCard } from "./CourseCard.tsx"
import { LoadingState } from "./LoadingState.tsx"
import { ErrorState } from "./ErrorState.tsx"
import { EmptyState } from "./EmptyState.tsx"

type CountryCode = "IN" | "US" | null

type CoursesSectionProps = {
    sectionTitle?: string
    cardRadius?: number
}

export default function CoursesSection({
    sectionTitle = "Explore Our Courses",
    cardRadius = 16,
}: CoursesSectionProps) {
    const sectionRef = React.useRef<HTMLElement>(null)

    const [courses, setCourses] = React.useState<Course[]>([])
    const [countryCode, setCountryCode] = React.useState<CountryCode>(null)

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)
    const [sectionWidth, setSectionWidth] = React.useState(1200)

    // Detect the actual width of the Framer component
    React.useEffect(() => {
        const element = sectionRef.current

        if (!element) return

        const updateWidth = () => {
            setSectionWidth(element.getBoundingClientRect().width)
        }

        updateWidth()

        const observer = new ResizeObserver((entries) => {
            const width = entries[0]?.contentRect.width

            if (width) {
                setSectionWidth(width)
            }
        })

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    // Responsive breakpoints
    const isMobile = sectionWidth < 600
    const isTablet = sectionWidth >= 600 && sectionWidth < 950

    const columns = isMobile ? 1 : isTablet ? 2 : 3

    const horizontalPadding = isMobile ? 16 : isTablet ? 28 : 40

    const verticalPadding = isMobile ? 48 : isTablet ? 64 : 80

    const headingSize = isMobile ? 30 : isTablet ? 36 : 40

    // Fetch courses and country code
    const loadCourses = async () => {
        setLoading(true)
        setError(null)

        try {
            const coursesData = await fetchCourses()

            setCourses(coursesData)

            // Country API is independent.
            // If it fails, courses should still be visible.
            try {
                const countryData = await fetchCountryCode()

                if (countryData === "IN" || countryData === "US") {
                    setCountryCode(countryData)
                } else {
                    setCountryCode(null)
                }
            } catch {
                // Fallback to INR if country API fails.
                setCountryCode(null)
            }
        } catch {
            setCourses([])
            setError("We couldn't load the courses. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        loadCourses()
    }, [])

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: isMobile ? 16 : 20,
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        alignItems: "stretch",
        boxSizing: "border-box",
    }

    return (
        <section
            ref={sectionRef}
            style={{
                width: "100%",
                padding: `${verticalPadding}px ${horizontalPadding}px`,
                boxSizing: "border-box",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <h2
                style={{
                    margin: "0 0 32px",
                    textAlign: "center",
                    fontSize: headingSize,
                    lineHeight: 1.2,
                    overflowWrap: "break-word",
                }}
            >
                {sectionTitle}
            </h2>

            {/* Loading */}
            {loading && <LoadingState columns={columns} />}

            {/* Error */}
            {!loading && error && (
                <ErrorState message={error} onRetry={loadCourses} />
            )}

            {/* Empty results */}
            {!loading && !error && courses.length === 0 && <EmptyState />}

            {/* Successful response */}
            {!loading && !error && courses.length > 0 && (
                <>
                    {countryCode === null && (
                        <p
                            style={{
                                textAlign: "center",
                                color: "#666",
                                fontSize: 14,
                                lineHeight: 1.5,
                                margin: "0 0 20px",
                                overflowWrap: "break-word",
                            }}
                        >
                            Showing prices in INR.
                        </p>
                    )}

                    <div style={gridStyle}>
                        {courses.map((course) => (
                            <CourseCard
                                key={course.mangoId}
                                course={course}
                                countryCode={countryCode}
                                cardRadius={cardRadius}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}

addPropertyControls(CoursesSection, {
    sectionTitle: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Explore Our Courses",
    },

    cardRadius: {
        type: ControlType.Number,
        title: "Card Radius",
        defaultValue: 16,
        min: 0,
        max: 40,
        step: 1,
    },
})
