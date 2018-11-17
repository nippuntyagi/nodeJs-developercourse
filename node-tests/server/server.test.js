const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('server', ()=>{
    describe('GET /', ()=>{
        it('should return hello world response', (done)=>{
            request(app)
                .get('/')
                // .expect('Hello World!')
                .expect(404)
                // .expect({
                //     error:'Page not found'
                // })
                .expect((res)=>[
                    expect(res.body).toInclude({
                        error:'Page not found'
                    })
                ])
                .end(done);
        })
    });
    describe('GET /user', ()=>{ 
        it('should return my user object', (done)=>{
            request(app)
                .get('/user')
                .expect(200)
                .expect((res)=>[
                    expect(res.body).toInclude({
                        name:'nippun',
                        age:23
                    })
                ])
                .end(done);
        })
    });
})
