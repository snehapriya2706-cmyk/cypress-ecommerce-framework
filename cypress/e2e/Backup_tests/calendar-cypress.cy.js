describe('Date Picker', ()=>{

    it('Date_picker_TC_01', ()=>{
      
        const year = '2029'
        const month = "4"
        const date = "10"

        cy.visit("https://www.hyrtutorials.com/p/calendar-practice.html");
        cy.get('#fourth_date_picker').click()
        cy.get('.ui-datepicker-year').select(year)
        cy.get('.ui-datepicker-month').select(month) 
        cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()
        
        //assertion
        cy.get('#fourth_date_picker').should('have.value', "05/10/2029")
        

    
        })

    
    })




    describe('Calendar test',()=>
{
 
    it('Verify date selection',()=>{
 
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];
 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.wait(5000)
        cy.get(".react-date-picker__inputGroup").click();
 
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.contains("abbr",date).click();
 
        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        }
        
        
        
        
        )     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    })
 
 
 
 
 
 
 
})
