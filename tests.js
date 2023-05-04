it("test_clean_form_clears_prompt_and_respuesta", () => {
  document.body.innerHTML = `
              <input id="prompt" value="initial value">
              <div id="respuesta">initial content</div>
          `;

  cleanForm();

  expect(document.getElementById("prompt").value).toBe("");

  expect(document.getElementById("respuesta").innerHTML).toBe("");
});
