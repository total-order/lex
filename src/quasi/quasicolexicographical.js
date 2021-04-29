/**
 * Generates a binary quasicolexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

export default function quasicolexicographical(compare) {
	/**
	 * Compares 2 arrays a and b quasicolexicographically.
	 */

	return function (a, b) {
		const m = a.length;
		const n = b.length;

		if (m !== n) return m - n;

		const length = Math.min(m, n);

		for (let i = 1; i <= length; ++i) {
			const d = compare(a[m - i], b[n - i]);

			if (d !== 0) return d;
		}

		return 0;
	};
}
