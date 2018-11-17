const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('Nippun', 25);
        expect(spy).toHaveBeenCalledWith('Nippun', 25);
    });

    it('should call saveUser eith user object',()=>{
        var email = 'nippun@example.com';
        var password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    });
})