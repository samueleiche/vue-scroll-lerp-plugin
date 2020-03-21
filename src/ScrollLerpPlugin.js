// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

export const ScrollLerpPlugin = {
    install(Vue, options = {}) {
        const { alpha = 0.25 } = options;
        const state = Vue.observable({ velocity: 0 });
        let y = window.pageYOffset;
        let lastY = window.pageYOffset;

        const update = () => {
            y = window.pageYOffset;
            lastY = lerp(lastY, y, alpha);
            const diff = ~~(y - lastY);

            state.velocity = diff / 200;

            requestAnimationFrame(update);
        };

        update();

        Vue.prototype.$lerp = state;
    },
};
