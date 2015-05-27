/**
 * check if element exists
 */

module.exports = function (isExisting, element, done) {
    isExisting = isExisting === 'a';

    this.browser.elements(this.getSelector(element), function(err,res) {
        should.not.exist(err);

        if(isExisting) {
            expect(res.value).to.have.length.above(0, 'element with selector "' + element + '" should exist on the page');
        } else {
            expect(res.value).to.have.length(0, 'element with selector "' + element + '" should not exist on the page');
        }
    }).call(done)

};
