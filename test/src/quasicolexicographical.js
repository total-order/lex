import test from 'ava';

import * as primitive from '@total-order/primitive';
import {reversed} from '@total-order/reversed';
import {quasicolexicographical} from '../../src/index.js';

import {format} from 'util';

const increasing = quasicolexicographical(primitive.increasing);
const decreasing = reversed(increasing);

function one(t, a, b, z) {
	t.deepEqual(
		Math.sign(increasing(a, b)),
		z,
		format('i %s %s', JSON.stringify(a), JSON.stringify(b)),
	);

	t.deepEqual(
		Math.sign(decreasing(a, b)),
		z === 0 ? 0 : -z,
		format('d %s %s', JSON.stringify(a), JSON.stringify(b)),
	);
}

test('quasicolexicographical', (t) => {
	one(t, [], [], 0);
	one(t, [], [0], -1);
	one(t, [0], [], 1);
	one(t, [0], [0], 0);
	one(t, [0], [1], -1);
	one(t, [1], [0], 1);

	one(t, [1, 2], [1, 2, 3], -1);
	one(t, [1, 3], [1, 2, 3], -1);
	one(t, [1, 4], [1, 2, 3], -1);

	one(t, [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], -1);
	one(t, [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 1);

	one(t, [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], -1);
	one(t, [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 1);

	one(t, [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], -1);
	one(t, [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], -1);

	one(t, [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], -1);
	one(t, [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], 1);
});
