/**
 * Generates a binary colexicographical comparator for ranges of arrays.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a , b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 */

export default function rangedcolexicographical(compare, begin, end) {
	/**
	 * Compares the range [begin, end[ of 2 arrays a and b colexicographically.
	 */

	return function (a, b) {
		for (let i = end; i-- > begin; ) {
			const d = compare(a[i], b[i]);

			if (d !== 0) return d;
		}

		return 0;
	};
}
