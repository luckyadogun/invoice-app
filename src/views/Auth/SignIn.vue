<template>
  <main id="sign-up">
    <div class="col-12 d-flex justify-content-between p-0">
      <div class="col-4 image-section">
        <div class="overlay">
          <p>invoice but <br ><span> smarter </span></p>
          <h6>created by Lucky Adogun</h6>
        </div>
        <img src="@/assets/img/855.svg" alt="">

      </div>
      <div class="col-8 sign-up-form">
        <div class="logo-secction">TIMBER</div>
        <div class="form-container">
          <form class="sign-up-container">
            <div class="form-group email-address">
              <input type="text" class="inputText form-control" v-model="authUser.email" required/>
              <span class="floating-label">Your email address</span>
            </div>
            <div class="form-group password">
              <input type="password" class="inputText form-control" v-model="authUser.password" required/>
              <span class="floating-label">Password</span>
            </div>
            <div>
              <button class="btn btn-md submit-btn" @click="loginUser">LOGIN NOW</button>
            </div>

            <div class="reminder-section">
              <p>Have an account? <a href="/">Sign Up</a></p>
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
      authUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser(e) {
      e.preventDefault()

      const payload = {
        email: this.authUser.email,
        password: this.authUser.password
      }
      
      let url = 'https://secret-bastion-50236.herokuapp.com/api/login/'

      axios.post(url, payload)
        // eslint-disable-next-line no-console
        .then(res => {
          if(res.status === 201) {
            const token = res.data.data.token
            localStorage.setItem('token', token)
            this.$router.push('/dashboard')
          }
        })
    }
  }
}
</script>

<style scoped>

#sign-up {
  height: 100vh;
}

#sign-up .image-section {
  width: 100%;
  background: linear-gradient(180deg, rgba(22, 101, 216, 0.47017) 0%, #1665D8 100%);
  mix-blend-mode: hard-light;
  height: 100vh;
}

#sign-up .logo-secction {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  font-weight: 900;
  color: #4C75EB;
}

#sign-up .first-name,
.last-name,
.email-address,
.password,
.company-name,
.office-address,
.office-telephone{
  position: relative;
}

#sign-up .image-section {
  position: relative;
}

#sign-up .image-section .overlay {
  position: absolute;
  top: 45%;
  left: 15%;
  color: #ffffff;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  font-weight: 100; 
}

#sign-up .image-section .overlay span {
  font-size: 6rem;
}

#sign-up .image-section .overlay h6 {
  font-size: 10px;
  font-weight: 100;
  margin-top: -16px;
  margin-left: 126px;
}

#sign-up .image-section img {
  width: 100%;
}

#sign-up .form-container {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
}

#sign-up input {
  font-size: 15px;
  height: 40px;
  outline: none !important;
  box-shadow: none !important;
  padding: 10px 0px 0 25px;
}

#sign-up input:focus {
  border: 2px solid #6200EE;
}

#sign-up .form-control {
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

#sign-up input:focus ~ .floating-label,
#sign-up input:not(:focus):valid ~ .floating-label {
  top: 4px;
  bottom: 10px;
  left: 25px;
  font-size: 10px;
  opacity: 0.31;
}

#sign-up .form-check-label {
  font-size: 13px;
  margin-top: 14px;
  color: #9EA0A5;
}

#sign-up .form-check-input {
  border: 1px solid #425A70;
}

#sign-up .form-check a {
  color: #9EA0A5;
  text-decoration: underline;
}

#sign-up .submit-btn {
  background: #4C75EB;
  color: #ffffff;
  width: 100%;
}

#sign-up .submit-btn:focus,
#sign-up .submit-btn:active
{
  box-shadow: none;
  outline: none;
}

#sign-up .reminder-section {
  margin-top: 1.5rem;
  font-size: 14px;
}

#sign-up .reminder-section a {
  font-weight: 700;
  padding-left: 0.5rem;
}

#sign-up .reminder-section a:hover {
  text-decoration: none;
}

</style>