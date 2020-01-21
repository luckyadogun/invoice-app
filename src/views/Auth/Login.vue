<template>
  <main id="login">
    <div class="col-12 d-flex justify-content-between p-0">
      <div class="col-4 image-section">
        <div class="overlay">
          <p>invoice but <br ><span> smarter </span></p>
          <h6>created by Lucky Adogun</h6>
        </div>
        <img src="@/assets/img/855.svg" alt="">

      </div>
      <div class="col-8 login-form">
        <div class="logo-secction">TIMBER</div>
        <div class="form-container">
          <h4 class="form-header">Create new account</h4>
          <span class="form-subhead">Use your email to create an account. its free</span>
          <form class="login-container" @submit="handleSubmit(e)">
            <div class="form-group pt-2 first-name">
              <input type="text" class="inputText form-control" v-model="user.firstName" required/>
              <span class="floating-label">First Name</span>
            </div>
            <div class="form-group last-name">
              <input type="text" class="inputText form-control" v-model="user.lastName" required/>
              <span class="floating-label">Last Name</span>
            </div>
            <div class="form-group email-address">
              <input type="email" class="inputText form-control" v-model="user.email" required/>
              <span class="floating-label">Your email address</span>
            </div>
            <div class="form-group password">
              <input type="password" class="inputText form-control" v-model="user.password" required/>
              <span class="floating-label">Password</span>
            </div>
            <div class="form-group username">
              <input type="text" class="inputText form-control" v-model="user.username" required/>
              <span class="floating-label">Username</span>
            </div>
            <div class="form-group company-name">
              <input type="text" class="inputText form-control" v-model="user.companyName" required/>
              <span class="floating-label">Company Name</span>
            </div>
            <div class="form-group office-address">
              <input type="text" class="inputText form-control" v-model="user.officeAddress" required/>
              <span class="floating-label">Office Address</span>
            </div>
            <div class="form-group office-telephone">
              <input type="text" class="inputText form-control" v-model="user.officeTelephone" required/>
              <span class="floating-label">Office Telephone</span>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">I have read the <a href="#">Terms and condition</a></label>
            </div>
            <div>
              <button class="btn btn-md submit-btn" :disabled="disabled" @click="handleSubmit">SIGN UP NOW</button>
            </div>

            <div class="reminder-section">
              <p>Have an account? <a href="/login">Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      errors: [],
      disabled: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        companyName: '',
        officeAddress: '',
        officeTelephone: ''
      }
    }
  },
  methods: {
     handleSubmit(e) {
       e.preventDefault()

      const payload = {
        username: this.user.username,
        password: this.user.password,
        email: this.user.email,
        first_name: this.user.firstName,
        last_name: this.user.lastName,
        company_name: this.user.companyName,
        office_address: this.user.officeAddress,
        office_telephone: this.user.officeTelephone
      };

      let url = 'https://secret-bastion-50236.herokuapp.com/api/register/'

      axios.post(url,payload)
      .then(res => {
        if(res.status === 201) {
          this.$router.push('/login')
        }
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e.response)
      })
    }
  }
}
</script>

<style scoped>

#login {
  min-height: 100vh;
}

#login .image-section {
  width: 100%;
  background: linear-gradient(180deg, rgba(22, 101, 216, 0.47017) 0%, #1665D8 100%);
  mix-blend-mode: hard-light;
  height: 100vh;
}

#login .logo-secction {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  font-weight: 900;
  color: #4C75EB;
}

#login .first-name,
.last-name,
.email-address,
.password,
.username,
.company-name,
.office-address,
.office-telephone{
  position: relative;
}

#login .image-section {
  position: relative;
}

#login .image-section .overlay {
  position: absolute;
  top: 45%;
  left: 15%;
  color: #ffffff;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  font-weight: 100; 
}

#login .image-section .overlay span {
  font-size: 6rem;
}

#login .image-section .overlay h6 {
  font-size: 10px;
  font-weight: 100;
  margin-top: -16px;
  margin-left: 126px;
}

#login .image-section img {
  width: 100%;
}

#login .form-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
}

#login input {
  font-size: 15px;
  height: 40px;
  outline: none !important;
  box-shadow: none !important;
  padding: 10px 0px 0 25px;
}

#login input:focus {
  border: 2px solid #6200EE;
}

#login .form-control {
  border: 1px solid #c9c9c9;
  color: black;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 25px;
  top: 19px;
  transition: 0.2s ease all;
  font-size: 11px;
  color: #000000;
  opacity: 0.31;
}

#login input:focus ~ .floating-label,
#login input:not(:focus):valid ~ .floating-label {
  top: 4px;
  bottom: 10px;
  left: 25px;
  font-size: 10px;
  opacity: 0.31;
}

#login .form-check-label {
  font-size: 13px;
  margin-top: 14px;
  color: #9EA0A5;
}

#login .form-check-input {
  border: 1px solid #425A70;
}

#login .form-check a {
  color: #9EA0A5;
  text-decoration: underline;
}

#login .submit-btn {
  background: #4C75EB;
  color: #ffffff;
  width: 100%;
}

#login .submit-btn:focus,
#login .submit-btn:active
{
  box-shadow: none;
  outline: none;
}

#login .reminder-section {
  margin-top: 1.5rem;
  font-size: 14px;
}

#login .reminder-section a {
  font-weight: 700;
  padding-left: 0.5rem;
}

#login .form-subhead {
  color: #9EA0A5;
  font-size: 12px;
}

</style>