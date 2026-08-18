type ErrorStateProps = {
    message: string
    onRetry: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
    return (
        <div
            style={{
                textAlign: "center",
                padding: 40,
            }}
        >
            <p>{message}</p>

            <button
                onClick={onRetry}
                style={{
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    background: "#111",
                    color: "#fff",
                }}
            >
                Try Again
            </button>
        </div>
    )
}
