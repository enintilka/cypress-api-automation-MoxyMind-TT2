describe('API Test Automation MoxyMind TT2',()=>{
    it('Post New User Task 2',()=>{
        cy.request({
            method: 'Post',
            url:'https://reqres.in/api/users',
            headers:{'x-api-key':'free_user_3DCh3xCZHZEBPaS7i5sUWEM65V9'},
            body:{"name": "enea"}
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq('enea')
            expect(res.body.id).to.exist
            expect(res.body.createdAt).to.exist
            expect(res.duration).to.be.lessThan(1000)

        })
    })
})