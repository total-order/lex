/**
 * Generates a binary quasilexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

export default function quasilexicographical(compare) {
	/**
	 * Compares 2 arrays a and b quasilexicographically.
	 */

	return function (a, b) {
		const m = a.length;
		const n = b.length;

		if (m !== n) return m - n;

		const length = Math.min(m, n);

		for (let i = 0; i < length; ++i) {
			const d = compare(a[i], b[i]);

			if (d !== 0) return d;
		}

		return 0;
	};
}
