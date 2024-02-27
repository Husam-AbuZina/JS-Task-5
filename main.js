function processInput() {
    const userInputElement = document.querySelector('.input-text');
    const userInputValue = userInputElement.value;

    if (userInputValue.trim() !== '') {
        const listItem = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        const span = document.createElement('span');
        span.textContent = userInputValue;

        listItem.appendChild(checkbox);
        listItem.appendChild(span);

        checkbox.addEventListener('change', function() {
            listItem.classList.toggle('completed', checkbox.checked);
        });

        document.getElementById('todoList').appendChild(listItem);

        userInputElement.value = '';
    } else {
        console.log("Fill the message");
    }
}
