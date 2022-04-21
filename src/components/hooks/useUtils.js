export function formatMoney(value) {
  
    if (value) {
      return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    }
      return "Valor indisponivel";
  }