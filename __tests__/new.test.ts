function sum(a: number, b: number) : number{
    return a+b;
}

test('Adds 1 + 2 equals to 3', () => {
    expect(sum(1,2)).toBe(3);
});