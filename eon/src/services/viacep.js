export async function getCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  return response.json();
}