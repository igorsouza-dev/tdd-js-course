describe('Main', function(){

  describe('Method A', function(){
    context('Case 1', function(){
      before(function(){
        console.log('This part is executed before everything else on case 1.');
      });

      it('should return 4', function(){
        console.log(4);
      });

      after(function(){
        console.log('This part is executed after everything else on case 2.');
      });
    });
  });

  describe('Method B', function(){
    context('Case 2', function(){
      before(function(){
        console.log('This part is executed before everything else on case 2.');
      });

      beforeEach(function(){
        console.log('This part is executed before every "it" block on case 2');
      });

      afterEach(function(){
        console.log('This part is executed after every "it" block on case 2');
      });

      it('should return houheue', function(){
        console.log('houheue');
      });
      //"skip" jumps the test
      it.skip('should fail', function(){
        throw new Error('errorrrr');
      });
    });
    context('Case 3', function(){
      console.log('This part is executed before everything else on case 3.');
      it('should return hoho', function(){
        console.log('hoho');
      });
    });
  });
});
