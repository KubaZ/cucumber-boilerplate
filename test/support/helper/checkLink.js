/**
 * check if link contains $string
 */

module.exports = function (element, falseCase, text, done) {

    this.browser.getAttribute(this.getSelector(element), 'href', function (err, attr) {
        should.not.exist(err);

        if(falseCase) {
            attr.should.not.contain(text);
        } else {
            attr.should.contain(text);
        }

    }).call(done);

};
