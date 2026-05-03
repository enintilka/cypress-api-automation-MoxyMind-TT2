describe('API Test Automation MoxyMind TT2',()=>{
    it('GET User List Task 1',()=>{
        cy.request({
            url:'https://reqres.in/api/users?page=1',
            headers:{'x-api-key':'free_user_3DCh3xCZHZEBPaS7i5sUWEM65V9'}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.total).to.eq(12)
            expect(res.body.data[0].last_name).to.eq('Bluth')
            expect(res.body.data[1].last_name).to.eq('Weaver')
        })
    })
})