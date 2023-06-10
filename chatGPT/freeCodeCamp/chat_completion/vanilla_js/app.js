const API_KEY = "<API_KEY>";
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");
const input = document.querySelector("input");
const history = document.querySelector(".history");
const newChat = document.querySelector("button");

function changeInput(value) {
  input.value = value;
}

async function getMessage() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: input.value
        }
      ],
      max_tokens: 100
    })
  };

  try {
    output.textContent = "loading...";
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    const content = data.choices[0].message.content;
    output.textContent = content;
    if(content && input.value) {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = input.value;
      newParagraph.addEventListener('click', () => changeInput(newParagraph.textContent));
      history.append(newParagraph);
    }
  } catch(error) {
    console.error(error);
    output.textContent = "sorry, there was an error :'(";
  }
}

function clearInput() {
  input.value = '';
}

submitButton.addEventListener('click', getMessage);
newChat.addEventListener('click', clearInput);