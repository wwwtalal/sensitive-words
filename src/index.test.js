import sensitiveWords from './index'

test('replace blacklisted words with asterisks', ()=>{
  expect(sensitiveWords('Look as Nintendo Switch', ['switch'])).toBe('Look as Nintendo ***')
})
test('replace multi blacklisted words with asterisks', ()=>{
  expect(sensitiveWords('Look as Nintendo Switch, the switch is great', ['switch'])).toBe('Look as Nintendo ***, the *** is great')
})