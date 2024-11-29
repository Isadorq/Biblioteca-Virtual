<template>
    <div class="about-container">
      <h1>Sobre a Biblioteca Virtual</h1>
      <p>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2em;
    color: #333;
  }
  
  h2 {
    font-size: 1.5em;
    color: #555;
    margin-top: 20px;
  }
  
  p {
    font-size: 1.1em;
    color: #666;
    line-height: 1.6;
  }
  
  .about-container p:first-of-type {
    margin-top: 20px;
  }
  
  </style>
  