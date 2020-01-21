<template>
  <main id="dashboard">
    <section class="create-section">
      <h5>Dashboard</h5>
      <div class="button-container">
        <button type="button" class="btn btn-primary btn-sm" @click="createClient">Create client</button>
        <button type="button" class="btn btn-primary btn-sm" @click="createInvoice">Create invoice</button>
      </div>
    </section>
    <section class="invoice-deets">
      <div class="invoice__container">
      <div class="total-invoice">
        <h5>TOTAL INVOICE</h5>
        <h3>{{ invoices }}</h3>
        <p>INVOICES</p>
      </div>
      <div class="total-invoice">
        <h5>TOTAL CLIENTS</h5>
        <h3>{{ clients }}</h3>
        <p>SAW MILL OWNERS</p>
      </div>
      </div>
      <div class="table-container">
      <h6>CLIENTS</h6>
      <table class="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>COMPANY</th>
            <th>COUNTRY</th>
            <th>ADDRESS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in allClients" :key="client.id">
            <td>{{ client.full_name }}</td>
            <td>{{ client.company_name }}</td>
            <td>{{ client.country }}</td>
            <td>{{ client.address }}</td>
            <td><i class="fas fa-ellipsis-h elip"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-container">
      <h6>INVOICES</h6>
      <table class="table">
        <thead>
          <tr>
            <th>INVOICE ID</th>
            <th>PAYMENT TERM</th>
            <th>DUE DATE</th>
            <th>DISPATCHER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in allInvoice" :key="invoice.id">
            <td>#{{ invoice.invoice_id }}</td>
            <td>{{ invoice.payment_term }}</td>
            <td>{{ invoice.due_date }}</td>
            <td>{{ invoice.dispatch_personnel }}</td>
            <td><i class="fas fa-ellipsis-h elip"></i></td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import userToken from '@/utils/helper.js'

export default {
  data() {
    return {
      clients: null,
      invoices: null,
      allClients: [],
      allInvoice: []
    }
  },
  mounted() {
    this.getClients()
    this.getInvoices()
    this.getClient()
    this.getInvoice()
  },
  methods:{
    getClients() {

      let url = 'https://secret-bastion-50236.herokuapp.com/api/client/total/'

      axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
      .then(res => {
        if(res) {
          this.clients = res.data.data.client.total
        }
      })
    },
    async getInvoices() {
      
      let url = 'https://secret-bastion-50236.herokuapp.com/api/invoice/total/'

      axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
        .then(res => {
          if(res) {
            this.invoices = res.data.data.invoice.total
          }
        })
    },
    getClient() {
      let url = 'https://secret-bastion-50236.herokuapp.com/api/client/'

      axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
        .then(res => {
          if(res) {
            this.allClients = res.data.data.client;
          }
        })
    },
    getInvoice() {
      let url = 'https://secret-bastion-50236.herokuapp.com/api/invoice/'

      axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
        // eslint-disable-next-line no-console
        .then(res => {
          if(res) {
            // eslint-disable-next-line no-console
            this.allInvoice = res.data.data.invoice;
          }
        })
    },
    createClient() {
      this.$router.push('/new-client')
    },
    createInvoice() {
      this.$router.push('/new-invoice')
    }
  }
}
</script>

<style scoped>

#dashboard .create-section {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

#dashboard .create-section h5 {
  font-weight: 300;
}

#dashboard .create-section .button-container {
  display: flex;
  justify-content: space-between;
  width: 31%;
}

#dashboard .create-section .button-container button {
  border-radius: 10px;
  background: #4C75EB;
  border: none;
  width: 171px;
  height: 37px;
  text-transform: uppercase;
  font-size: 14px;
}

#dashboard .invoice-deets {
  padding: 4rem 3rem;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  margin: 1rem;
  font-family: 'Cabin', sans-serif;
}

#dashboard .invoice-deets .invoice__container {
  display: flex;
  justify-content: space-between;
}

#dashboard .invoice-deets .total-revenue {
  background: #4C75EB;
  border-radius: 20px;
  width: 30rem;
  height: 10rem;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
}

#dashboard .invoice-deets .total-revenue h3 {
  font-weight: 700;
}

#dashboard .invoice-deets .total-revenue h5 {
  letter-spacing: 0.3em;
}

#dashboard .invoice-deets .total-invoice {
  background: #4C75EB;
  border-radius: 20px;
  width: 30rem;
  height: 10rem;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
}

#dashboard .invoice-deets .total-invoice h3 {
  font-weight: 700;
  font-size: 47px;
}

#dashboard .invoice-deets .total-invoice h5 {
  letter-spacing: 0.3em;
}

#dashboard .invoice-deets .total-invoice p {
  font-weight: 100;
  font-size: 12px;
  margin-top: 30px;
  margin-top: 16px;
}

#dashboard .more__deets {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem
}

#dashboard .more__deets h6 {
  font-size: 11px;
  font-weight: 100;
}

#dashboard .more__deets .line {
  border: 0.5px solid #ffffff;
  opacity: 0.6;
}

#dashboard .table-container {
  padding: 4rem 1rem;
}

#dashboard .table-container .elip {
  color: #4C75EB;
}

#dashboard .table-container:first-child{
  padding: 2rem 1rem;
}

#dashboard .table-container h6 {
  padding-bottom: 2rem;
  letter-spacing: 0.3em;
}

#dashboard .table-container thead{
  background: #EBEBEB;
}

#dashboard .table-container thead th{
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #767676;
}

#dashboard .table-container tbody td {
  text-align: center;
  font-size: 14px;
  color: #767676;
  border: none;
}


</style>