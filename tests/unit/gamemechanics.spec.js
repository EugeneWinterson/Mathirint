var assert = require('chai').assert
describe('Game Mechanics', () => {
  it('Should collect fields (+5,-3,+10, -2) to Array', () => {
    let expectedArray = [
      '+5',
      '-3',
      '+10',
      '-2'
    ]
    let result = []
    result.push('+5', '-3', '+10', '-2')

    assert.deepEqual(expectedArray, result)
  })
}
)