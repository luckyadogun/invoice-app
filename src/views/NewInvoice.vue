<template>
  <main id="new-client">
    <h5 class="client-head">Add New Client</h5>
    <div class="form-container">
      <div class="row">
        <form class="col-6">
          <div
            class="form-group d-flex justify-content-between align-items-centeruu"
          >
            <label class="pr-3 wish">Client Name</label>
            <input
              placeholder="Enter Client name"
              type="text"
              class="form-control pl-4"
            />
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="pr-3 wish">Date</label>
            <datepicker
              placeholder="YYYY-MM-DD"
              class="form-control"
              v-model="date"
              name="uniquename"
              bootstrap-styling="true"
            ></datepicker>
            <!-- <input
              placeholder="YYYY-MM-DD"
              type="text"
              onfocus="(this.type='date')"
              class="form-control"
            /> -->
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="pr-3 wish">Payment Term</label>
            <Select class="form-control select">
              <option class="ml-4" selected value="End of Month"
                >End of Month</option
              >
              <option value="End of Quater">End of Quater</option>
              <option value="End of Year">End of Year</option>
            </Select>
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="pr-3 wish">Due Date</label>
            <datepicker
              class="form-control"
              v-model="date2"
              name="uniquename"
              bootstrap-styling="true"
              placeholder="YYYY-MM-DD"
            ></datepicker>
            <!-- <input
              placeholder="YYYY-MM-DD"
              type="text"
              onfocus="(this.type='date')"
              class="form-control"
            /> -->
          </div>
        </form>
        <form class="col-6">
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="ml-1 pr-4 wish">Shipping Address #1</label>
            <input type="text" class="form-control" />
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="ml-1 pr-4 wish">Shipping Address#2 </label>
            <input type="text" class="form-control" />
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="ml-1 pr-4 wish">Vat No</label>
            <input type="text" class="form-control" />
          </div>
          <div
            class="form-group d-flex justify-content-between align-items-center"
          >
            <label class="ml-1 pr-4 wish">Dispatch Personnel</label>
            <input type="text" class="form-control" />
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      date: "",
      date2: ""
    };
  }
};
</script>

<style scoped>
#new-client {
  background: #f9faff;
  padding: 2.5rem;
  min-height: 100vh;
}

#new-client .form-container {
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  padding: 3rem;
}

#new-client .form-container {
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  padding: 3rem;
}

#new-client .form-group label {
  font-weight: 300;
  font-size: 12px;
  padding-top: 8px;
  color: #767676;
}

#new-client .form-container .client-form {
  display: flex;
  justify-content: center;
}

#new-client .form-control {
  width: 72%;
  background: #f4f6ff;
  border-radius: 10px;
  border: none;
}

#new-client .about {
  height: 8rem;
  resize: none;
}

#new-client .form-container .btn-container {
  display: flex;
  justify-content: flex-end;
}

#new-client .form-container .btn-container button {
  background: #4c75eb;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  padding: 8px 15px;
  border: none;
}

.wish {
  display: flex;
  width: 150px;
  justify-content: flex-end;
}
</style>
<style>
.input-group > .form-control {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  padding-bottom: 20px;
}
.select {
  text-indent: 15px;
}
input::placeholder {
  font-size: 12px;
  font-family: "Cabin";
}
select {
  font-size: 12px;
  font-family: "Cabin";
  font-weight: lighter !important;
}
</style>
