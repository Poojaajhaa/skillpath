import { Course, CountryCode } from "./types.ts"

const BASE_URL = "https://syncsphere-hiv6.onrender.com"

export async function fetchCourses(): Promise<Course[]> {
    const response = await fetch(`${BASE_URL}/assignment/course-data`)

    if (!response.ok) {
        throw new Error("Failed to fetch courses")
    }

    return response.json()
}

export async function fetchCountryCode(): Promise<CountryCode> {
    const response = await fetch(`${BASE_URL}/assignment/country-code`)

    if (!response.ok) {
        throw new Error("Failed to fetch country code")
    }

    const data = await response.json()
    return data.country_code
}
