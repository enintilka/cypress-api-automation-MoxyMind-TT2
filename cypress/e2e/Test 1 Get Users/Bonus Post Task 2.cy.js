describe('API Bonus Task 2 POST',()=>{
    it('Should Validate Data types POST',()=>{
        cy.request({
            method: "Post",
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'free_user_3DCh3xCZHZEBPaS7i5sUWEM65V9'},
            body:{"name": "morpheus", "job":"Leader"}

        }).then((res)=>{
            expect(res.status).to.be.a('number')
            expect(res.body.name).to.be.a('string')
            expect(res.body.job).to.be.a('string')
            expect(res.body.id).to.be.a('string')
            expect(res.body.createdAt).to.be.a('string')
        })
    })
})