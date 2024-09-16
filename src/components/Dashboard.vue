<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/Login">Log In</router-link></li>
        <li><router-link to="/Dashboard">Dashboard</router-link></li>
        <li><router-link to="/ServiceProviders">Service Providers</router-link></li>
        <li><router-link to="/PetOwners">Pet Owners</router-link></li>
        <li><router-link to="/Announcements">Announcements</router-link></li>
        <li><router-link to="/Settings">Settings</router-link></li>
      </ul>
    </nav>
    
    <header>
      <h1>Welcome, Admin!</h1>
    </header>
    
    <main>
      <!-- Use dynamic data or computed properties for these values -->
      <SummaryBox title="Total Service Providers" :value="totalServiceProviders" />
      <SummaryBox title="Total Pet Owners" :value="totalPetOwners" />
      <SummaryBox title="Revenue Today" :value="revenueToday" />
      <SummaryBox title="Total Appointments Today" :value="totalAppointmentsToday" />
      
      <!-- RevenueGraph component -->
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
  data() {
    return {
      totalServiceProviders: 10, // Example static data, you can fetch this dynamically
      totalPetOwners: 1280,
      revenueToday: 14900, // Example dynamic value (perhaps fetched from an API)
      totalAppointmentsToday: 10,
    };
  },
  methods: {
    logout() {
      // Clear user session data
      localStorage.removeItem('Token');
      
      // Redirect to login page
      this.$router.push('/Login'); // Ensure the correct path is used
    },
  },
};
</script>

<style scoped>
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
