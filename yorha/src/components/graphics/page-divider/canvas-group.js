/**
 * This function returns an object that acts as a container for shapes. You can call methods
 * such as rect() and circle() to draw shapes that have positions relative to the container.
 * @param {*} context 
 * @param {*} transform 
 */
export default function (context, transform) {
    return {
        rect: (x, y, width, height) => {
            context.rect(
                transform.x + (transform.width * x),
                transform.y + (transform.height * y),
                width,
                height
            );
        },
        circle: (x, y, radius) => {
            context.moveTo(
                transform.x + (transform.width * x),
                transform.y + (transform.height * y),
            );
            context.arc(
                transform.x + (transform.width * x),
                transform.y + (transform.height * y),
                radius,
                0,
                2 * Math.PI
            );
        }
    };
}
