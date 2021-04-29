/**
 * Generates a binary lexicographical comparator for ranges of arrays.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order
 *
 * compare( a , b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 */

export default function rangedlexicographical(compare, begin, end) {
	/**
	 * Compares the range [begin, end[ of 2 arrays a and b lexicographically.
	 */

	return function (a, b) {
		for (let i = begin; i < end; ++i) {
			const d = compare(a[i], b[i]);

			if (d !== 0) return d;
		}

		return 0;
	};
}
