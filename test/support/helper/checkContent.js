/**
 * check content for specific element or input field
 */

module.exports =  function(type, element, falseCase, origText, done) {

    var command = type !== 'inputfield' ? 'getText' : 'getValue';

    this.browser[command](this.getSelector(element), function(err, text) {

        should.not.exist(err);

        if(falseCase) {
            text.should.not.contain(origText);
        } else {
            text.should.contain(origText);
        }

    })
    .call(done);
};
