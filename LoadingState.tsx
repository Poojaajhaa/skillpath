type LoadingStateProps = {
    columns?: number
}

export function LoadingState({ columns = 3 }: LoadingStateProps) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: 20,
                width: "100%",
                maxWidth: 1200,
                boxSizing: "border-box",
            }}
        >
            {Array.from({ length: columns }).map((_, index) => (
                <div
                    key={index}
                    style={{
                        width: "100%",
                        minHeight: 220,
                        borderRadius: 16,
                        background: "#eeeeee",
                        boxSizing: "border-box",
                    }}
                />
            ))}
        </div>
    )
}
