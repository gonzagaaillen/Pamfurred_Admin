<template>
  <div class="login-container">
    <img src="@/assets/PamfurredLogo.png" alt="Pamfurred Logo" class="logo" />
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="input-group">
        <i class="fas fa-user"></i>
        <!-- Bind input to the reactive Username variable -->
        <input type="text" placeholder="Username" v-model="Username" />
      </div>
      <div class="input-group">
        <i class="fas fa-lock"></i>
        <!-- Bind input to the reactive password variable -->
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <a href="#" class="forgot-password">Forgot password?</a>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LogIn',
  setup() {
    const Username = ref('');
    const password = ref('');
    const router = useRouter();

    if (localStorage.getItem('token')){
      router.push('/Dashboard');
    }
    
    const handleLogin = async (event) => {
      event.preventDefault();
      // Perform login logic here (e.g., check credentials)
      if (Username.value === 'admin' && password.value === 'admin') {
        localStorage.setItem('token', 'authenticated');
        // If successful, redirect to the dashboard
        router.push('/Dashboard');
      } else {
        alert('Invalid Login Credentials');
      }
    };
    
    return {
      Username,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

.logo {
  width: 300px; /* Increase the size of the logo */
  margin-bottom: 40px; /* Increase the space between logo and form */
}

.login-form {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f7f7f7;
}

.input-group i {
  margin-right: 10px;
  color: #aaa;
}

.input-group input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  padding-left: 5px; /* Add padding for better spacing */
}

.forgot-password {
  text-align: right;
  font-size: 14px;
  color: #FF891D;
  margin-bottom: 20px;
  text-decoration: none;
}

.login-button {
  background-color: #A03E06;
  color: #ffffff;
  padding: 12px; /* Increase padding for better button size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #994a28;
}
</style>
