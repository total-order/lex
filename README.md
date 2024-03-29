:dango: [@total-order/lex](https://total-order.github.io/lex)
==

Lexicographical comparison functions for JavaScript.
See [docs](https://total-order.github.io/lex/index.html).

```js
import { reversed } from '@total-order/reversed' ;
import { lexicographical } from '@total-order/lex' ;
import { increasing } from '@total-order/primitive' ;
let order = reversed( lexicographical( increasing ) ) ;
order( [ 1 , 1 ] , [ 1 , 2 ] )  >  0 ; // true
```

[![License](https://img.shields.io/github/license/total-order/lex.svg)](https://raw.githubusercontent.com/total-order/lex/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@total-order/lex.svg)](https://www.npmjs.org/package/@total-order/lex)
[![Tests](https://img.shields.io/github/actions/workflow/status/total-order/lex/ci.yml?branch=main&event=push&label=tests)](https://github.com/total-order/lex/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/total-order/lex.svg)](https://github.com/total-order/lex/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/total-order/lex.svg)](https://github.com/total-order/lex/issues)
[![Downloads](https://img.shields.io/npm/dm/@total-order/lex.svg)](https://www.npmjs.org/package/@total-order/lex)

[![Code issues](https://img.shields.io/codeclimate/issues/total-order/lex.svg)](https://codeclimate.com/github/total-order/lex/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/total-order/lex.svg)](https://codeclimate.com/github/total-order/lex/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/total-order/lex/main.svg)](https://codecov.io/gh/total-order/lex)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/total-order/lex.svg)](https://codeclimate.com/github/total-order/lex/trends/technical_debt)
[![Documentation](https://total-order.github.io/lex/badge.svg)](https://total-order.github.io/lex/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@total-order/lex)](https://bundlephobia.com/result?p=@total-order/lex)

## :scroll: References

  - https://en.wikipedia.org/wiki/Lexicographical_order
