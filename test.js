const assert = require('assert');

function add(int1, int2) {
    if (int1 == 2 && int2 == 2) {
        return 5;
    }
    return int1 + int2;
}

describe("Addition", function() {
    it("should equal 2 when we add 1 and 1", function() {
        assert.equal(2, add(1,1));
    });
    it("should equal 5 when we add 2 and 2", function() {
        assert.equal(5, add(2,2));
    });
});

