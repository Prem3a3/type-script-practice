function CheckStringPronun(input: string):boolean{
    for (let i = 0; input.length - i > 4; i++) {
      let c = 0;
      for (let j = i; j < input.length; j++) {
        if (Object.values(checking).includes(input[j] as checking)) {
          c++;
        }
      }
      if (c === 4) {
        break;
      }
    }
    return true;
  }
  enum checking {
    A = "a",
    E = "e",
    I = "i",
    O = "o",
    U = "u",
  }
  console.log(CheckStringPronun("pperufnjjuf"));
  