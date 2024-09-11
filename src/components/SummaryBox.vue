<template>
    <div class="summary-box">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      value: [String, Number]
    }
  }
  </script>
  
  <style scoped>
  .summary-box {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    text-align: center;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  