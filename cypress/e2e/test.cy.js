
let input_field_selector = ".input.form-control";
let add_todo_button_selector = ".submit-button";
 
let todo_item_container_selector = ".container";
let todo_item_selector = "div.card";
let todo_item_text_selector = "div.card span";

let success_button_selector = ".btn.btn-outline-success";
let delete_button_selector = ".btn.btn-outline-danger";


describe("Add Todo", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(input_field_selector).type("Adding new task");
    cy.get(add_todo_button_selector).click();
    cy.get(todo_item_container_selector).find(todo_item_selector).should("have.length", 2);
  });
});


describe("Remove Todo", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(delete_button_selector).click();
    cy.get(todo_item_container_selector).find(todo_item_selector).should("have.length", 0);
  });
});


describe("Mark Successful Todo", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(success_button_selector).click();
    cy.get(todo_item_text_selector).should('have.css', 'text-decoration', 'line-through solid rgb(33, 37, 41)');
  });
});