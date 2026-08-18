import { Course, CountryCode } from "./types.ts"

export function formatCoursePrice(
    course: Course,
    countryCode: CountryCode | null
): string {
    if (countryCode === "US") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(course.priceUsdCents / 100)
    }

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(course.pricePaise / 100)
}
