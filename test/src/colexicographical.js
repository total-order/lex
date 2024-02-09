import test from 'ava';

import * as primitive from '@total-order/primitive';
import {reversed} from '@total-order/reversed';
import {repr, rel} from './_fixtures.js';
import {colexicographical} from '#module';

const increasing = colexicographical(primitive.increasing);
const decreasing = reversed(increasing);

const macro = (t, a, b, z) => {
	t.deepEqual(Math.sign(increasing(a, b)), z, `i ${repr(a)} ${repr(b)}`);

	t.deepEqual(
		Math.sign(decreasing(a, b)),
		z === 0 ? 0 : -z,
		`d ${repr(a)} ${repr(b)}`,
	);
};

macro.title = (title, a, b, z) => title ?? `${repr(a)} ${rel(z)} ${repr(b)}`;

test(macro, [], [], 0);
test(macro, [], [0], -1);
test(macro, [0], [], 1);
test(macro, [0], [0], 0);
test(macro, [0], [1], -1);
test(macro, [1], [0], 1);

test(macro, [1, 2], [1, 2, 3], -1);
test(macro, [1, 3], [1, 2, 3], -1);
test(macro, [1, 4], [1, 2, 3], 1);

test(macro, [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], -1);
test(macro, [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 1);

test(macro, [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], -1);
test(macro, [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 1);

test(macro, [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], -1);
test(macro, [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], -1);

test(macro, [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], -1);
test(macro, [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], 1);
