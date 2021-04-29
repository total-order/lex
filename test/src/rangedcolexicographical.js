import test from 'ava';

import * as primitive from '@total-order/primitive';
import {rangedcolexicographical} from '../../src/index.js';

import {format} from 'util';

const increasing = rangedcolexicographical(primitive.increasing, 1, 6);
const decreasing = rangedcolexicographical(primitive.decreasing, 1, 6);

function one(t, a, b, z) {
	a = [Math.random()].concat(a);
	b = [Math.random()].concat(b);

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

	a = a.concat(Math.random());
	b = b.concat(Math.random());

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

test('rangedcolexicographical', (t) => {
	one(t, [1, 6, 7, 8, 9], [1, 6, 7, 8, 9], 0);

	one(t, [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], -1);
	one(t, [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 1);

	one(t, [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], -1);
	one(t, [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 1);

	one(t, [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], -1);
	one(t, [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], -1);

	one(t, [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], -1);
	one(t, [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], 1);
});
