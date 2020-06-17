export const TRANSITION_SECONDS = 0.2;

export const TRANSITION_TIMING_FUNCTION = 'cubic-bezier(.15, 1, .6, 1)';

export default function transition(...properties) {
    return properties
        .map((property) => `${property} ${TRANSITION_SECONDS}s ${TRANSITION_TIMING_FUNCTION}`)
        .join(', ');
}
