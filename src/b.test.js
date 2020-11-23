const data = require('../mock/b.mock');
test('测试', () => {
    const len = data.length;
    expect(len).toBeGreaterThan(0)
})