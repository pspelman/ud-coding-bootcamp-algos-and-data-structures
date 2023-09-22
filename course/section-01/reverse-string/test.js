const reverse = require('./index');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('reverse returns abcd as dcba', () => {
    console.log('abcd --> ', reverse('abcd'));
    expect(reverse('abcd')).toEqual('dcba');
});

test('reverse returns 1423 as 3241', () => {
  expect(reverse('1423')).toEqual('3241');
})
