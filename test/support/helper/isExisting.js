/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
    this.browser.elements(this.getSelector(element), function (err, elements) {
        should.not.exist(err);

        if(falseCase) {
            expect(elements.value).to.have.length(0, 'expected element "' + elements + '" not to exist');
        } else {
            expect(elements.value).to.have.length.above(0, 'expected element "' + elements + '" to exist');
        }

    }).call(done);
}
