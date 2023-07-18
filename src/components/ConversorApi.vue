
<template>
    <div>
      <form>
        <label>Amount:</label>
        <input type="number" v-model="amount" />
        <br />
        <br />
        <label>From:</label>
        <select v-model="fromCurrency">
          <option v-for="currency in currencies" :value="currency">
            {{ currency }}
          </option>
        </select>
        <br />
        <br />
        <label>To:</label>
        <select v-model="toCurrency">
          <option v-for="currency in currencies" :value="currency">
            {{ currency }}
          </option>
        </select>
        <br />
        <br />
        <button @click.prevent="convertCurrency">Convert</button>
      </form>
      <br />
      <br />
      <h2 v-if="convertedAmount">
        {{ amount }} {{ fromCurrency }} is {{ convertedAmount }} {{ toCurrency }}
      </h2>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        amount: 0,
        fromCurrency: "USD",
        toCurrency: "EUR",
        convertedAmount: null,
        currencies: ["USD", "EUR", "GBP", "CAD", "JPY"]
      };
    },
    methods: {
      async convertCurrency() {
        const conversionUrl = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;
        const response = await axios.get(conversionUrl);
        const conversionRate = response.data.rates[this.toCurrency];
        this.convertedAmount = this.amount * conversionRate;
      }
    }
  };
  </script>