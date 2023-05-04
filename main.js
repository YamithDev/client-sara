function getResponse() {
  const prompt = document.getElementById('prompt').value;
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = JSON.stringify({
    'content': prompt,
  });
  fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: headers,
    body: data
  }).then(response => response.json())
    .then(data => {
        document.getElementById('respuesta').append(`${data.response}\n\n`); 
  }).catch((error) => {
    console.error('Error:', error);
  });
}

function cleanForm() {
  document.getElementById('prompt').value = '';
  document.getElementById('respuesta').innerHTML = '';
}