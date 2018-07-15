export default {
    has : (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
}