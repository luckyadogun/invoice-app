<template>
  <main id="invoices">
    <div class="invoice">
      <h5>Invoices</h5>
      <div class="invoice__container">
        <table class="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>COMPANY</th>
            <th>INVOICES</th>
            <th>LOCATION</th>
            <th>PHONE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          <tr>
            <td>James O</td>
            <td>Wood Inc, GMHB</td>
            <td>2</td>
            <td>Denmark</td>
            <td>+451234567890</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
          
        </tbody>
      </table>
      <div class="arrow-section">
        <div class="arrow">
          <i class="fas fa-caret-left fa-2x icon"></i>
          <i class="fas fa-caret-right fa-2x icon"></i>
        </div>
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

#invoices .invoice {
  padding: 3rem
}

#invoices .invoice h5 {
  font-weight: 400;
}

#invoices .invoice .table {
  margin-top: 3rem;
}

#invoices .invoice thead{
  background: #EBEBEB;
}

#invoices .invoice thead th{
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #767676;
}

#invoices .invoice tbody td {
  text-align: center;
  font-size: 14px;
  color: #767676;
  border: none;
}

#invoices .invoice .arrow-section {
  display: flex;
  justify-content: flex-end;
}

#invoices .invoice .arrow-section .arrow {
  display: flex;
  justify-content: space-between;
}

#invoices .invoice .arrow-section .arrow .icon {
  color: #4C75EB;
  padding: 0rem 1rem;
}

</style>