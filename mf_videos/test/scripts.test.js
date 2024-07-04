const { getFavoriteCount } = require('../scripts');

describe('getFavoriteCount', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return 0 if there are no favorites', () => {
    expect(getFavoriteCount()).toBe(0);
  });

  it('should return the correct count of favorites', () => {
    localStorage.setItem('favorites', JSON.stringify(['video1', 'video2']));
    expect(getFavoriteCount()).toBe(2);
  });
});
