// Holds the test cases
const expect = require('expect');
const utils = require('./utils');

describe('Utils', ()=>{
    describe('#add', ()=>{
        it('should add two numbers', () =>{
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44){
            //     throw new Error(`Expected 44 but got ${res}`);
            // }
        });
        
        it('should square a numbers', () =>{
            var res = utils.square(10);
            expect(res).toBe(100).toBeA('number');
            // if(res !== 100){
            //     throw new Error(`Expected 100 but got ${res}`);
            // }
        });
    });
    
    describe('#add', ()=>{
        it('should async add 2 numbers', (done)=>{
            utils.asyncAdd(4,3,(sum)=>{
                expect(sum).toBe(7).toBeA('number'); 
                done();
            });
        });
        
        it('should async square a numbers', (done)=>{
            utils.asyncSquare(4,(square)=>{
                expect(square).toBe(16).toBeA('number'); 
                done();
            });
        })
    });
});

// should verify first and last names are set
// assert it includes firsName and lastName with proper values

it('should set firstName and lastName', ()=>{
    var user = { location: 'India', age: 26}
    var res = utils.setName(user, 'Nippun Tyagi');
    
    // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Nippun',
        lastName: 'Tyagi' 
    })
});

it('should expect some value', ()=>{
    // expect(12).toNotBe(11);
    // expect({name: 'Nippun'}).toBe({name: 'Nippun' })  //gives error test fail
    // expect({name: 'Nippun'}).toEqual({name: 'Nippun' })  //equality for object
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(1); 
    expect({
        name:'Nippun',
        age: 26,
        location: 'india'
    }).toInclude({
        age: 26 
    })
}); 