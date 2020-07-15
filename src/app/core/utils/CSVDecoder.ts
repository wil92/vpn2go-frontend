export class CSVDecoder {
  currentPosition = 0;

  constructor(private body: string) {
  }

  decode() {
    this.currentPosition = 0;

    const resultList = [];
    const titlePosRelation = new Map<number, string>();

    let lineArr = this.nextLine();
    lineArr.forEach((value, index) => {
      titlePosRelation.set(index, value);
    });

    do {
      lineArr = this.nextLine();
      if (lineArr) {
        const newItem = lineArr.reduce((previousValue, currentValue, index) => {
          previousValue[titlePosRelation.get(index)] = currentValue;
          return previousValue;
        }, {});
        resultList.push(newItem);
      }
    } while (lineArr);

    return resultList;
  }

  nextLine(): string[] {
    if (this.currentPosition >= this.body.length) {
      return null;
    }
    const resultList = [];
    let value = '';
    while (this.currentPosition < this.body.length && this.body[this.currentPosition] !== '\n') {
      if (this.body[this.currentPosition] !== ',') {
        value += this.body[this.currentPosition];
      } else {
        resultList.push(value);
        value = '';
      }
      this.next();
    }
    resultList.push(value);
    this.next();
    return resultList;
  }

  next() {
    this.currentPosition++;
  }
}
