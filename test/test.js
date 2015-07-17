var assert = require("assert")

var mangle = require('../220_mangling_sentences.js');

describe('challenge', function () {
  describe('#sample outputs', function () {
    it('should mangle simple input', function () {
      // Hist aceeghlln denos't eems os adhr.
      var input = 'This';
      assert.equal('Hist', mangle.mangleWord(input));

      var input = 'doesn\'t';
      assert.equal('denos\'t', mangle.mangleWord(input));
    })

    it('should return output1', function () {
      var input  = 'This challenge doesn\'t seem so hard.',
          output = 'Hist aceeghlln denos\'t eems os adhr.';

      assert.equal(output, mangle.mangleSentence(input));
    })

    it('should return output2', function () {
      var input  = 'There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy.',
          output = 'Eehrt aer emor ghinst beeentw aeehnv adn aehrt, Ahioort, ahnt aer ademrt fo in oruy hhilooppsy.';
      assert.equal(output, mangle.mangleSentence(input));
    })
  });

  describe('#challenge outputs', function () {
    it('should return output1', function () {
      var input  = 'Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.',
          output = 'Eey fo Entw, adn Eot fo Fgor, Loow fo Abt, adn Egnotu fo Dgo.';

      assert.equal(output, mangle.mangleSentence(input));
    })

    it('should return output2', function () {
      var input  = 'Adder\'s fork, and Blind-worm\'s sting, Lizard\'s leg, and Howlet\'s wing.',
          output = 'Adder\'s fkor, adn Bdilm-nors\'w ginst, Adilrs\'z egl, adn Ehlost\'w ginw.';

      assert.equal(output, mangle.mangleSentence(input));
    })

    it('should return output3', function () {
      var input  = 'For a charm of powerful trouble, like a hell-broth boil and bubble.',
          output = 'For a achmr fo eflopruw belortu, eikl a behh-llort bilo adn bbbelu.';

      assert.equal(output, mangle.mangleSentence(input));
    })
  });

});
