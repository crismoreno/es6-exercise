// 03: Default parameters - basics
// To do: make all tests pass, leave the expect lines unchanged!

describe("default parameters make function parameters more flexible", () => {
  it("define it using an assignment to the parameter `function(param=1){}`", () => {
    let number = (int = 0) => int;

    expect(number()).toEqual(0);
  });

  it("it is not used when a value is given", () => {
    function xhr(method = 'POST') {
      return method;
    }

    expect(xhr()).toEqual("POST");
  });

  it("it is evaluated at run time", () => {
    let defaultValue;
    function xhr(method = `value: ${defaultValue}`) {
      return method;
    }

    defaultValue = 42;
    expect(xhr()).toEqual("value: 42");
  });

  it("it can also be a function", () => {
    function defaultValue(){ defaultValue } 
    function fn(value = defaultValue()) {
      return value;
    }

    expect(fn()).toEqual(defaultValue());
  });
});
