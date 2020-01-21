<template>
  <main id="view-invoice">
    <div class="invoice__container">
      <div class="invoice-header">
        <div class="purple">
          <h1 >INVOICE</h1>
          <h6>COMPANY NAME INC, GBHM</h6>
        </div>
        <div class="address">
          <p>yourcompany@domain.com</p>
          <p>+43545555858</p>
        </div>
      </div>
      <div class="invoice-subs">
        <div class="long-text">
          <span>BILLED TO</span>
          <p class="long-text__p">{{ invoices.shipping_address}}</p>
        </div>
        <div>
          <span>INVOICE NO</span>
          <p>#55656655</p>
        </div>
        <div>
          <span>INVOICE TOTAL</span>
          <p>€ 80,000.00</p>
        </div>
      </div>
      <div class="invoice-table">
        <table class="table">
          <thead class="text-center">
            <tr>
              <th>Invoice</th>
              <th width="30%">Payment Term</th>
              <th>VAT</th>
              <th>Due Date</th>
              <th>Dispatcher</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="invoice in invoices" :key="invoice.id">
              <td>{{ invoice.invoice_id }}</td>
              <td>{{ invoice.shipping_address }}</td>
              <td>{{ invoice.vat }}</td>
              <td>{{ invoice.due_date}}</td>
              <td>{{ invoice.dispatch_personnel}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sub-total">
        <div class="containerr">
          <div class="sub__container">
            <div class="d-flex">
            <span>Sub Total:</span>
            <p class="pl-3">€ 60,000.00</p>
            </div>
            <div class="d-flex">
              <span>Tax %:</span>
              <p class="pl-3">2</p>
            </div>
            <div class="d-flex">
              <span>Term:</span>
              <p class="pl-3">End of Month</p>
            </div>
          </div>
        </div>
      </div>
      <div class="total__cont">
          <span>Total:</span>
          <p class="pl-3">€ 80,000.00</p>
        </div>

        <button id="cmd" @click="download" class="btn btn-secondary">download</button>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import userToken from '@/utils/helper.js'
import * as jsPDF from 'jspdf'
import $ from 'jquery'

export default {
  data() {
    return {
      invoices: []
    }
  },
  mounted() {
    this.showDeets();
  },
  methods: {
    async showDeets() {
      let url = 'https://secret-bastion-50236.herokuapp.com/api/invoice/'

      await axios.get(url, {
        headers: {
          Authorization: userToken
        }
      })
        // eslint-disable-next-line no-console
        .then(res => {
          if(res) {
            this.invoices = res.data.data.invoice;
          }
        })
    },
    download() {
      let doc = new jsPDF();
        let specialElementHandlers = {
            '#editor': () => {
                return true;
            }
          };

      $('#cmd').click(() => {
          doc.fromHTML($('#view-invoice').html(), 15, 15, {
          'width': 170,
            'elementHandlers': specialElementHandlers
          });
          doc.save('invoice.pdf');
      });
    }
  }
}
</script>

<style scoped>

#view-invoice .invoice__container {
  margin: 2rem 8rem;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  background: #ffffff;
}

#view-invoice .invoice__container .invoice-header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;
}

#view-invoice .invoice__container .invoice-header .purple {
  color: #4C75EB;
}

#view-invoice .invoice__container .invoice-header .purple h6 {
  font-size: 9px;
  padding-left: 24px;

}

#view-invoice .invoice__container .invoice-header .address {
  text-align: end;
}

#view-invoice .invoice__container .invoice-subs {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
}

#view-invoice .invoice__container .invoice-subs span {
  color: #4C75EB;
}

#view-invoice .invoice__container .invoice-subs .long-text {
  width: 13%;
}
#view-invoice .invoice__container .table {
  border: 1px solid #9AABFF;
  border-radius: 10px;
}


#view-invoice .invoice__container .table thead {
  border: none;
}

#view-invoice .invoice__container .table .table td, .table th {
  border: 1px solid #9AABFF;
}

#view-invoice .invoice__container .table .table td, .table td {
  border: 1px solid #9AABFF;
}

#view-invoice .invoice__container .sub-total {
  display: flex;
  justify-content: flex-end;
}

#view-invoice .invoice__container .sub-total .sub__container {
  display: flex;
  flex-direction: column;
  color: #4C75EB;
}

#view-invoice .invoice__container .sub-total .containerr {
  width: 34%;
  display: flex;
  justify-content: flex-start;
  padding-left: 2rem;
  border: 1px solid #4C75EB;
}

#view-invoice .invoice__container .total__cont {
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  color: #4C75EB;
}

</style>