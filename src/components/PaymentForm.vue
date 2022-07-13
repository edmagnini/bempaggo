<template>
  <div class="container">
    <div class="header-form">
      <p class="header-content">Formulário para compra de <b>Pacote de adesivos</b></p>
    </div>
    <form id="payment-form">
      <div class="input-container">
        <b>Quais adesivos:</b>
        <div class="sticker-checkbox-container">
          <div>
            <input type="checkbox" name="tech" v-model="react" value="react">
            <span>React</span>
          </div>
          <div>
            <input type="checkbox" name="tech" v-model="vue" value="vue">
            <span>Vue</span>
          </div>
          <div>
            <input type="checkbox" name="tech" v-model="angular" value="angular">
            <span>Angular</span>
          </div> 
        </div>
        <b>Forma de pagamento:</b>
        <div class="payment-checkbox-container">
          <select name="payment" id="payment" v-model="payment">
            <option disabled value="">Escolha um meio de pagamento</option>
            <option value="boletoBancario">Boleto bancário</option>
            <option value="cartaoDeCredito">Cartão de crédito</option>
            <option value="pix">PIX</option>
          </select>
        </div>
        <div class="credit-card" v-show="this.payment === 'cartaoDeCredito'">
          <div class="card-data-input">
            <span>Número do cartão</span>
            <input type="text" id="number" name="card-number" title="Digite os 16 números de seu cartão de crédito" pattern="/^(?:4[0-9]d{12}(?:[0-9]d{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{d12})$1/" v-model="cardNumber">
            <span>Nome impresso</span>
            <input type="text" id="name" name="card-name" v-model="cardName">
            <span>Código de segurança</span>
            <input type="text" id="cvv" name="card-cvv" v-model="cardCvv">
          </div>
          <div class="card-animation">
            <label>{{creditCardNumberRegex()}}</label>
            <label>{{cardName}}</label>
          </div>
        </div>
        <b>Quantos adesivos de cada?:</b>
        <div class="count-container">
          <button type="button" class="button" id="-" @click="countCantBeNegative">-</button>
          <input type="text" id="count" name="count" v-model="count">
          <button type="button" class="button" id="+" @click="count++">+</button> 
        </div>
        <b>Observações:</b>
        <input type="text" id="obs" name="obs" v-model="obs" placeholder="Alguma dúvida? Recado?">
      </div>
    </form>
    <div class="submit-button-container">
        <button type="button" class="submit-button" @click="">ENVIAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  data() {
    return {
      count: 0,
      payment: "",
      cardNumber: "",
      cardName: "",
    }
  },
  methods: {
    creditCardNumberRegex() {
      const regex = /(\d{4}?)(\d{4}?)(\d{4}?)(\d{4}?)/
      const result = this.cardNumber.replace(regex, "$1 $2 $3 $4")
      return result
    },
    countCantBeNegative () {
      if (this.count <= 0) {
        alert("O número de adesivos não pode ser negativo")
      } else {
        this.count--
      }
    }
  },
  updated() {
  },
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    padding-top: 5px;
    background-color: #F2F2F2;
    width: 35vw;
    height: 100vh;
    padding: 0;
  }
  .header-content{
    width: 150px;
  }
  .input-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2vw;
    gap: 10px;
  }
  .header-form{
    background-color: #2F3676;
    height: 10vh;
    border-radius:0% 0% 49% 51% / 45% 0% 56% 19% ;
    color: #D6DAE5;
  }
  #payment-form{
    display: flex;
    flex-direction: column;
  }
  .sticker-checkbox-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .payment-checkbox-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .credit-card{
    gap: 10px;
  }
  .card-animation{
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 18vw;
    height: 16vh;
    border-radius: 10px;
    color:#DDE3E9;
    justify-content: space-evenly;
    margin-top: 10px;
  }
  .card-data-input{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .count-container{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
  }
  #count{
    border-radius: 5px;
    border-style: none;
    width: 5vw;
  }
  #payment{
    background-color: #DDE3E9;
    border-radius: 15px;
  }
  /* #payment-form{
    
    
  } */
  #obs{
    width: 31vw;
    height: 15vh;
    vertical-align: top;
    border-radius: 15px;
    background-color: #DDE3E9;
    margin-bottom: 20px;
  }
  a {
    color: #42b983;
  }
  button{
    background-color: #2F3676;
    color: #F2F2F2;
    border-style: none;
    border-radius: 8px;
    transition: .5s;
  }
  button:hover{
    background-color: #F2F2F2;
    color: #2F3676;
  }
  .button{
    width: 40px;
    height: 40px;
    font-size: 2rem;
  }
  .submit-button{
    font-size: 1.5rem;
    margin: 20px;
    padding: .7rem;
    text-align: center;
  }
  .submit-button:hover{
    background-color: #DDE3E9;
  }
  .submit-button-container{
    display: flex;
    justify-content: flex-end;
    background-color: #DDE3E9;
  }
</style>
