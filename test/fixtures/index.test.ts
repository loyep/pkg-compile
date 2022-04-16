test('class', () => {
    class A {
        public foo() {
            return 'foo';
        }
    }

    const a = new A();
    expect(a.foo()).toEqual('foo');
});
