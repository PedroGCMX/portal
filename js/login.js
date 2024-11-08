function login() {
    // Usuário e senha predefinidos
    const user = "tortuguinhas";
    const pass = "12345";

    // Obtendo os valores dos inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
  
    // Verifica se as credenciais estão corretas
    if (username === user && password === pass) {
      messageDiv.textContent = "Login bem-sucedido!";
      messageDiv.className = "message success";
      window.location.href = 'home.html';
      
    } else {
      messageDiv.textContent = "Usuário ou senha incorretos!";
      messageDiv.className = "message error";
    }

    console.log("Username:", username);
    console.log("Password:", password);
  }