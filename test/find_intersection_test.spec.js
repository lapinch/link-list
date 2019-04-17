var chai = require('chai');
var {find} = require('../index');
const {expect} = require('chai');

describe('Integer Link list intersection', () => {
    it('should return null', () => {
      const result = find([4,1,8,4,5], [10, 11, 17,5,0,15,2]);      
      expect(result).be.equal(null);
    });
    it('should return 1', () => {
      const result = find();
      expect(result).not.be.equal(null);      
      expect(result).to.have.property('data');
      expect(result.data).to.equal(1);      
    });
    it('should return 10', () => {
      const result = find([3, 2, 10, 9,8 ,7], [10, 9,8 ,7]);
      expect(result).not.be.equal(null);      
      expect(result).to.have.property('data');
      expect(result.data).to.equal(10);
    });
    it('should return null one list length is 1', () => {
      const result = find([1], [10, 11, 17,5,0,15,2]);      
      expect(result).be.equal(null);
    });
    it('should return null', () => {
      const result = find([10, 1, 17,5,0,15,2], [21]);
      expect(result).be.equal(null);      
    });
    it('should return 3', () => {
      const result = find([3, 2], [10, 9, 3, 2]);
      expect(result).not.be.equal(null);      
      expect(result).to.have.property('data');
      expect(result.data).to.equal(3);
    });
    it('should return null one list length is 1', () => {
      const result = find([1], [10, 11, 17, 5, 0, 15, 2, 1]);
      expect(result).be.equal(null);
    });
    it('should return null', () => {
      const result = find([1], [10, 1, 17,5,0,15,2]);
      expect(result).be.equal(null);
    });
    it('should return null', () => {
      const result = find([1], [10, 2, 17,5,1,15,2]);
      expect(result).be.equal(null);      
    });
  });

  describe('String Link list intersection', () => {
    it('should return null', () => {
      const result = find(['A', '11 Ave', 'U', 'IL', '11111'], ['R', '11 Lane', 'M', 'IL', '22222']);      
      expect(result).be.equal(null);
    });
    it('should return C', () => {
      const result = find(['A', 'B', 'C', 'D', 'E', 'F', 'G'], ['Y', 'W', 'Z', 'C', 'D', 'E', 'F', 'G']);
      expect(result).not.be.equal(null);      
      expect(result).to.have.property('data');
      expect(result.data).to.equal('C');      
    });
    it('should return F', () => {
      const result = find(['E', 'F', 'G'], ['Y', 'W', 'Z', 'C', 'D', 'R', 'F', 'G']);
      expect(result).not.be.equal(null);      
      expect(result).to.have.property('data');
      expect(result.data).to.equal('F');
    });
  });

  describe('At least one Link list is null', () => {
    it('should return null', () => {
      const result = find([], ['R', '11 Lane', 'M', 'IL', '22222']);      
      expect(result).be.equal(null);
    });
    it('should return null', () => {
      const result = find(['A', 'B', 'C', 'D', 'E', 'F', 'G'], []);
      expect(result).be.equal(null);      
    });
    it('should return null', () => {
      const result = find([], []);
      expect(result).be.equal(null);     
    });
    it('should return null', () => {
      const result = find([1, 2, 3], null);
      expect(result).be.equal(null);     
    });
  });
  
