<template>
  <main id="client">
    <div class="client__container">
      <h6>WoodInc, GMBH</h6>
      <div class="deets">
        <div class="client__deets">
          <div class="img-container">
            <img src="@/assets/img/user.svg" alt="">
          </div>
          <div class="more-deets">
            <div class="name">
              <p>Name:</p>
              <span>JAMES OLTON</span>
            </div>
            <div class="name">
              <p>Company Name:</p>
              <span>WOOD INC, GMBH</span>
            </div>
            <div class="name">
              <p>Phone Number:</p>
              <span>+451234567890</span>
            </div>
            <div class="name">
              <p>About:</p>
              <span>A small mill company based in Denmark</span>
            </div>
          </div>
        </div>
      </div>
      <div>
         <div class="delete-container">
          <button class="btn btn-sm">Delete</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style scoped>

#client {
  padding: 3rem 15rem;
}

#client .client__container h6 {
  color: #646363;
}

#client .client__container .deets {
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

#client .client__container .client__deets {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

#client .client__container .client__deets .img-container {
  background: #F7F7F7;
  padding: 1rem;
}

#client .client__container .client__deets .img-container img {
  width: 9rem
}

#client .client__container .client__deets .more-deets .name {
  display: flex;
  justify-content: space-between;
}

#client .client__container .client__deets .more-deets .name span {
  text-align: start;
}

#client .client__container .client__deets .more-deets .name span:last-child {
  padding-left: 1rem
}

#client .delete-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

#client .delete-container button {
  background: #4C75EB;
  color: #ffffff;
  width: 20%;
}

</style>