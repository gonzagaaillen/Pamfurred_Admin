<template>
    <div>
      <nav>
        <ul>
          <li><router-link to="/Login">Log In</router-link></li>
          <li>Dashboard</li>
          <li>Service Providers</li>
          <li>Pet Owners</li>
          <li>Announcements</li>
          <li>Settings</li>
        </ul>
      </nav>
      <header>
        <h1>Welcome, Admin!</h1>
      </header>
      <main>
        <SummaryBox title="Total Service Providers" :value="10" />
        <SummaryBox title="Total Pet Owners" :value="1280" />
        <SummaryBox title="Revenue Today" :value="$14900" />
        <SummaryBox title="Total Appointments Today" :value="10" />
        <RevenueGraph />
      </main>
      <footer>
        <button @click="logout">Log out</button>
      </footer>
    </div>
  </template>
  
  <script>
  import SummaryBox from './SummaryBox.vue';
  import RevenueGraph from './RevenueGraph.vue';

  export default {
    components: {
      SummaryBox,
      RevenueGraph,
    },
    methods: {
  logout() {
    // Clear user session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    
    // Redirect to login page
    this.$router.push('/login');
  },
},
  };
  </script>
  
  <style>
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 10px;
  }
  
  header {
    margin-bottom: 20px;
  }
  
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  footer {
    margin-top: 20px;
  }
  </style>
  