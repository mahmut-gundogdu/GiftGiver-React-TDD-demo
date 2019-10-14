import {max_number} from './index'

describe('max_number', () => {
  
    it('should return 0 when array is 0', () => {
       expect( max_number([])).toBe(0)
    })

    it('should return 1 when array has one eleman and it is 1', () => {
        expect(max_number([1])).toBe(1)
    })
})