function deserialize(s: string): NestedInteger {
  const toNested = (input: any[] | number) => {
    if (typeof input === "number")
      return new NestedInteger(input);
    const ans = new NestedInteger();
    input.forEach(item => ans.add(toNested(item)));
    return ans;
  }
  return toNested(JSON.parse(s));
};
deserialize('(1 + 2) * 3')