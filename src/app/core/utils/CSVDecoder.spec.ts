import { CSVDecoder } from './CSVDecoder';

describe('CSVDecoder', () => {
  it('should get first line array from the text', () => {
    const decoder = new CSVDecoder('a,b,c,d');
    expect(decoder.nextLine()).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should get several lines array from the text', () => {
    const decoder = new CSVDecoder('a,b,c,d\n1,2,3,4\n5,6,7,8');
    expect(decoder.nextLine()).toEqual(['a', 'b', 'c', 'd']);
    expect(decoder.nextLine()).toEqual(['1', '2', '3', '4']);
    expect(decoder.nextLine()).toEqual(['5', '6', '7', '8']);
  });

  it('should get several lines array from the text with empty values', () => {
    const decoder = new CSVDecoder('a,b,c,\n1,2,,4\n5,,7,8\n,1,2,3 4');
    expect(decoder.nextLine()).toEqual(['a', 'b', 'c', '']);
    expect(decoder.nextLine()).toEqual(['1', '2', '', '4']);
    expect(decoder.nextLine()).toEqual(['5', '', '7', '8']);
    expect(decoder.nextLine()).toEqual(['', '1', '2', '3 4']);
  });

  it('should decode a whole text', () => {
    const decoder = new CSVDecoder('a,b,c,d\n1,2,,4\n5,,7,8\n,1,2,3 4');
    expect(decoder.decode()).toEqual([
      {d: '4', a: '1', b: '2', c: ''},
      {d: '8', a: '5', b: '', c: '7'},
      {d: '3 4', a: '', b: '1', c: '2'}
    ]);
  });

  it('should get an empty array from a text without elements and only titles', () => {
    const decoder = new CSVDecoder('a,b,c,d');
    expect(decoder.decode()).toEqual([]);
  });

  it('should get an empty array from a not valid text', () => {
    const decoder = new CSVDecoder('aaskdjflkajsdflkjasdfl');
    expect(decoder.decode()).toEqual([]);
  });
});
