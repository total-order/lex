/**
 * Generates a binary lexicographical comparator for fixed size arrays.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order
 *
 * compare( a , b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 */

export default function fixedlexicographical(compare, length) {
	/**
	 * Compares 2 fixed size arrays a and b of size len lexicographically.
	 */

	return function (a, b) {
		for (let i = 0; i < length; ++i) {
			const d = compare(a[i], b[i]);

			if (d !== 0) return d;
		}

		return 0;
	};
}
