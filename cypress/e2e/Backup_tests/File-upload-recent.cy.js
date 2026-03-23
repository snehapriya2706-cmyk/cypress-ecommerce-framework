import 'cypress-file-upload';

describe('File-Upload', ()=>{
    it('Single-file-Upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('issue.txt');

        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get('h3')
        .should('have.text', "File Uploaded!");
        cy.get("#uploaded-files")
        .contains('issue.txt')
    })

    it('File-Upload-rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'issue.txt', fileName:'issue-new.txt'});

        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get('h3')
        .should('have.text', "File Uploaded!");
    })
  
    it('File upload-Drag and drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("#drag-drop-upload").attachFile("issue.txt", {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("issue.txt")
})
   it('Multiple-file-upload', ()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get('#filesToUpload').attachFile(['issue.txt', 'Test Scenarios.txt'])
    cy.wait(5000);

    cy.get(':nth-child(6) > strong')
    .should('have.text', "Files You Selected:");
    cy.get('#fileList > :nth-child(1)').should('have.text', "issue.txt");
    cy.get('#fileList > :nth-child(2)').should('have.text', "Test Scenarios.txt");
   })

   it.only('File-upload-shadow-dom', ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
    cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("issue.txt");
    cy.wait(5000);
    
    cy.get(".smart-item-name", {includeShadowDom:true})
    .contains('issue.txt');
   })
})