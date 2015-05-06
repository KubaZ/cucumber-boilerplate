/**
 * check if link contains $string
 */

module.exports = function (selector, falseCase, text, done) {

    this.browser.getAttribute(selector, 'href', function (err, attr) {
        should.not.exist(err);

        if(falseCase) {
            attr.should.not.contain(text);
        } else {
            attr.should.contain(text);
        }

    }).call(done);

};
