export const TRANSITION_SECONDS = 0.2;

export default function transition(...properties) {
    return properties
        .map((property) => `${property} ${TRANSITION_SECONDS}s cubic-bezier(.15, 1, .6, 1)`)
        .join(', ');
}
