import test from 'ava'
import txPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => txPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(txPages('w'), 'w@zce.me')
  t.is(txPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
