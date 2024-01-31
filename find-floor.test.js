const { findFloor } = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toEqual(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toEqual(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toEqual(-1) // -1

  });
});