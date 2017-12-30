/******************************************************************/
/* Imports */
/******************************************************************/

const phantom = require('phantom');
const settings = require('./settings');


/******************************************************************/
/* Tests */
/******************************************************************/

const { timeout, url } = settings.test;

describe('visiting website', function() {
  this.timeout(0); // Disable timeouts

  it('should be successful', (done) => {
    (async () => {
      const instance = await phantom.create();
      const page = await instance.createPage();
      await page.open(url);
      setTimeout(() => {
        instance.exit();
        done();
      }, timeout);
    })();
  });
});
