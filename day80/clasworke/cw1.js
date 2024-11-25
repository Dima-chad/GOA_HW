   const nameList = ['dima', 'ile', 'nodo', 'anastasia', 'goa']; 
     const userName = document.getElementById('nameInput').value;
     const messageElement = document.getElementById('message');
       if (nameList.includes(userName)) {
                messageElement.textContent = `Welcome ${userName}`;
             } else {
                messageElement.textContent = "თქვენი სახელი არ არის სიაში.";
             }