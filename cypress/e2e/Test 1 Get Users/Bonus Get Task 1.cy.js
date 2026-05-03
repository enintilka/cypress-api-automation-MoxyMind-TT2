describe('API Bonus Task 1 GET',()=>{
    it('Should Validate data types GET',()=>{
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            headers:{'x-api-key':'free_user_3DCh3xCZHZEBPaS7i5sUWEM65V9'}

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.page).to.be.a('number')
            expect(res.body.data[0].id).to.be.a('number')
            expect(res.body.data[1].id).to.be.a('number')
            expect(res.body.data[0].last_name).to.be.a('string')
            expect(res.body.data[1].last_name).to.be.a('string')
        })
    })
})