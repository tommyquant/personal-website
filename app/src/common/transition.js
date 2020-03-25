export const TRANSITION_SECONDS = 0.1;

export default function transition(...properties) {
    return properties
        .map((property) => `${property} ${TRANSITION_SECONDS}s ease-out`)
        .join(', ');
}
