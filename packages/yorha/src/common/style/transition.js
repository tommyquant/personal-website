export const TRANSITION_SECONDS_SHORT = 0.2;
export const TRANSITION_SECONDS_MEDIUM = 1;

export const TRANSITION_TIMING_FUNCTION = 'cubic-bezier(.15, 1, .6, 1)';

export default function transition(...properties) {
    return properties
        .map((property) => `${property} ${TRANSITION_SECONDS_SHORT}s ${TRANSITION_TIMING_FUNCTION}`)
        .join(', ');
}
