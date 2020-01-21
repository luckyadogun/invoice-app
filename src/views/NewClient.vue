<template>
  <main id="new-client">
    <h5 class="client-head">Add New Client</h5>
    <div class="form-container">
      <form class="col-12">
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">NAME</label>
          <input type="text" class="form-control" v-model="client.name">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">COMPANY NAME</label>
          <input type="text" class="form-control" v-model="client.companyName">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">PHONE NUMBER</label>
          <input type="text" class="form-control" v-model="client.phoneNumber">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">ABOUT</label>
          <textarea class="form-control about" v-model="client.about"></textarea>
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">ADDRESS</label>
          <input type="text" class="form-control" v-model="client.address">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">CITY</label>
          <input type="text" class="form-control" v-model="client.city">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">STATE</label>
          <input type="text" class="form-control" v-model="client.state">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">COUNTRY</label>
          <input type="text" class="form-control" v-model="client.country">
        </div>
        <div class="form-group d-flex justify-content-between">
          <label class="pr-3">ZIP CODE</label>
          <input type="text" class="form-control" v-model="client.zipcode">
        </div>
        <div class="btn-container">
          <button class="btn btn-sm" @click="createClient">CREATE CLIENT</button>
        </div>
      </form>
      <div class="table-container">
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
            <td>
              <div class="dropdown">
                <i class="fas fa-ellipsis-h elip" data-toggle="dropdown"></i>
                <div class="dropdown-menu mn">
                    <a class="dropdown-item" @click="onClickEditItem(client)">View</a>
                </div>
              </div>
              </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import userToken from '@/utils/helper.js'

export default {
  data() {
    return {
      allClients:[],
      client: {
        name: '',
        companyName: '',
        phoneNumber: '',
        about: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
      }
    }
  },
  mounted() {
    this.getAllClients();
  },
  methods: {
    getAllClients() {
      let url = 'https://secret-bastion-50236.herokuapp.com/api/client/'

      axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
        // eslint-disable-next-line no-console
        .then(res => {
          if(res) {
            this.allClients = res.data.data.client;
          }
        })
    },
    createClient(e) {
      e.preventDefault();

      const payload = {
        full_name: this.client.name,
        company_name: this.client.companyName,
        phone_number: this.client.phoneNumber,
        about: this.client.about,
        address: this.client.address,
        city: this.client.city,
        state: this.client.state,
        country: this.client.country,
        zipcode: this.client.zipcode
      }

      let url = 'https://secret-bastion-50236.herokuapp.com/api/client/'

      axios.post(url, payload)
        // eslint-disable-next-line no-console
        .then(res => console.log(res))
    },
    onClickEditItem(client) {
      // eslint-disable-next-line no-console
      console.log('Val ', client);
      if(client.id) {
        this.$router.push(`/invoice/${client.id}`)
      }
    },
  } 
}
</script>

<style scoped>

#new-client {
  background:#F9FAFF;
  padding: 2.5rem;
  min-height: 100vh;
}

#new-client .form-container {
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  padding: 3rem;
}

#new-client .client-head {
  padding-bottom: 2rem;
}

#new-client .form-group label{
  font-weight: 300;
  font-size: 12px;
  padding-top: 8px;
  color: #767676;
}

#new-client .form-container .client-form {
  display: flex;
  justify-content: center;
}

#new-client .form-control{
  width: 78%;
  background: #F4F6FF;
  border-radius: 10px;
  border: none;
}

#new-client .about{
  height: 6rem;
  resize: none
}

#new-client .form-container .btn-container {
  display: flex;
  justify-content: flex-end;
}

#new-client .form-container .btn-container button {
  background: #4C75EB;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 15px;
  border: none;
}

#new-client .table-container {
  padding: 4rem 0rem;
}

#new-client .table-container .elip {
  color: #4C75EB;
}

#new-client .table-container:first-child{
  padding: 2rem 1rem;
}

#new-client .table-container h6 {
  padding-bottom: 2rem;
  letter-spacing: 0.3em;
}

#new-client .table-container thead{
  background: #EBEBEB;
}

#new-client .table-container thead th{
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #767676;
}

#new-client .table-container tbody td {
  text-align: center;
  font-size: 14px;
  color: #767676;
  border: none;
}

#new-client .dropdown-menu {
  min-width: 5rem !important;
  background: #4C75EB !important;
  color: #ffffff !important;
  cursor: pointer;
}

#new-client .dropdown-item:hover {
  background: #4C75EB !important;
  color: #ffffff !important;
}

</style>