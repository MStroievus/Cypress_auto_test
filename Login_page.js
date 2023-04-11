/* class LoginPage {
    url = 'https://uuappg01-dev-eu-w-1.plus4u.net/uu-identitymanagement-maing01/58ceb15c275c4b31bfe0fc9768aa6a9c/login?acrValues=standard%20high%20veryHigh&clientId=0000037f35e04dee93c7e76de27da199&uiLocales=uk-ua&state=8RDQV9eAX6-cl89f.8Kt_qIqjoDkJJ8YRvII_by7grPNCakkHEV_75uqevBaUftw8IEXsBUp7dhEKnkvs5IjnqUKQjgTRl9vXB9F-dKNMYHNWlrjcWJzA_emQtF63arXWV8Aed8XVOPkmWKdsgcYu4UVvOq9IgXGsx2MQGL1U1YrxT6KdJ6XwNf55netrGTv__pXNi8Q_teBK1lcqOZOrd-rZYDbBkN9ZWATkNy0UyI8bun_o9KkP3oi5bvUKDdNmj8T95loMe2VeBW0S5v0aRL4Cn2BhiUoSQ21DF4WYsvgD7y8QMJNL9WouGjxnrh-ukXUcJBetmDEGFgznSiv7cL7Aij0ckGpE1Jkl_X1tz2gmlyHfBhdLmdqStpObpkoxXjXsIYk_42rSXKyU3Ay8N6Iu8Ox1lgzmABsmQO8850bFS4irqVJYmJjOaUXXajOjqVKyaL2Pk-t9blfSWdhbsqByoMWyPRuOcnsTLpcDWRNvh37rtsz59N46HsB2_SDETUHjE4M-CrMx4q9Slh_Z-uZCSC5jvYGceIml6E_cfTpV_kHxUjTs5ZFgCmLywTwBJ4YezilLrC7BtWVyCIhZ1GjI7ExxR2RTAOQZuTVPf2layCC3Mh-aFqoT7xl5T5Y9KETmH0DDw3sWqnJHcFAEh7aNQKhi9WqNCg0E_xnImfoqTnbwJ-AMIHmJwHKl6UKI7FYNlFKQ0pQoNJLUxKcaMVOZDOfj--JiUrfbCYTdJueEGgYNKvru1LeFqk3gaxeVw_9U-raaeJUiriD0YTnyJA%3D%3D';
  
    visit() {
      cy.visit(this.url);
    }

    get plus4Button() {
      return cy.get('.uu5-bricks-button.uu-bricks-1py3saz.uu-identitymanagement-core-login-form-content-plus4u-expander.uu-identitymanagement-core-login-form-content-plus4u-expander-shown.uu5-bricks-button-l.uu5-bricks-button-transparent.uu-bricks-17iqcx5.uu-bricks-1wkp7jq')
    }
    clickPlus4Button() {
      this.plus4Button.click()
    }
    get accessCodeInput1() {
      return cy.get('input[name="accessCode1"]');
    }
    enterAccessCode1() {
      this.accessCodeInput1.type('UserA123456');
    }
    get accessCodeInput2() {
      return cy.get('input[name="accessCode2"]');
    }
    enterAccessCode2() {
      this.accessCodeInput2.type('Authorities12345!');
    }
    get submitButton() {
      return cy.get('button.color-schema-green.uu-identitymanagement-bricks-button.uu-identitymanagement-core-login-form-content-plus4u-form-button.uu5-bricks-button.uu-identitymanagement-bricks-button-m.uu-identitymanagement-bricks-button-filled');
    }
    clicksubmitButton() {
      this.submitButton.click()
    }
   
  }
  
  export default new LoginPage(); */


  class LoginPage {
    constructor() {
      this.plus4Button = '.uu5-bricks-button.uu-bricks-1py3saz.uu-identitymanagement-core-login-form-content-plus4u-expander.uu-identitymanagement-core-login-form-content-plus4u-expander-shown.uu5-bricks-button-l.uu5-bricks-button-transparent.uu-bricks-17iqcx5.uu-bricks-1wkp7jq';
      this.accessCode1Field = 'input[name="accessCode1"]';
      this.accessCode2Field = 'input[name="accessCode2"]';
      this.submitButton = 'button.color-schema-green.uu-identitymanagement-bricks-button.uu-identitymanagement-core-login-form-content-plus4u-form-button.uu5-bricks-button.uu-identitymanagement-bricks-button-m.uu-identitymanagement-bricks-button-filled';
      this.url = 'https://uuappg01-dev-eu-w-1.plus4u.net/uu-identitymanagement-maing01/58ceb15c275c4b31bfe0fc9768aa6a9c/login?acrValues=standard%20high%20veryHigh&clientId=0000037f35e04dee93c7e76de27da199&uiLocales=uk-ua&state=8RDQV9eAX6-cl89f.8Kt_qIqjoDkJJ8YRvII_by7grPNCakkHEV_75uqevBaUftw8IEXsBUp7dhEKnkvs5IjnqUKQjgTRl9vXB9F-dKNMYHNWlrjcWJzA_emQtF63arXWV8Aed8XVOPkmWKdsgcYu4UVvOq9IgXGsx2MQGL1U1YrxT6KdJ6XwNf55netrGTv__pXNi8Q_teBK1lcqOZOrd-rZYDbBkN9ZWATkNy0UyI8bun_o9KkP3oi5bvUKDdNmj8T95loMe2VeBW0S5v0aRL4Cn2BhiUoSQ21DF4WYsvgD7y8QMJNL9WouGjxnrh-ukXUcJBetmDEGFgznSiv7cL7Aij0ckGpE1Jkl_X1tz2gmlyHfBhdLmdqStpObpkoxXjXsIYk_42rSXKyU3Ay8N6Iu8Ox1lgzmABsmQO8850bFS4irqVJYmJjOaUXXajOjqVKyaL2Pk-t9blfSWdhbsqByoMWyPRuOcnsTLpcDWRNvh37rtsz59N46HsB2_SDETUHjE4M-CrMx4q9Slh_Z-uZCSC5jvYGceIml6E_cfTpV_kHxUjTs5ZFgCmLywTwBJ4YezilLrC7BtWVyCIhZ1GjI7ExxR2RTAOQZuTVPf2layCC3Mh-aFqoT7xl5T5Y9KETmH0DDw3sWqnJHcFAEh7aNQKhi9WqNCg0E_xnImfoqTnbwJ-AMIHmJwHKl6UKI7FYNlFKQ0pQoNJLUxKcaMVOZDOfj--JiUrfbCYTdJueEGgYNKvru1LeFqk3gaxeVw_9U-raaeJUiriD0YTnyJA%3D%3D'; 
    }
    visit() {
      cy.visit(this.url);
    }
  
    clickPlus4Button() {
      cy.get(this.plus4Button).click();
    }
  
    enterAccessCode1(code) {
      cy.get(this.accessCode1Field).type(code);
    }
  
    enterAccessCode2(code) {
      cy.get(this.accessCode2Field).type(code);
    }
  
    clickSubmitButton() {
      cy.get(this.submitButton).click();
    }
  
    autorithation(code1, code2) {
      this.visit();
      this.clickPlus4Button();
      this.enterAccessCode1(code1);
      this.enterAccessCode2(code2);
      this.clickSubmitButton();
    
  }
}
  export default LoginPage;