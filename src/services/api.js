// Chama API das categorias { Todos do grupo presentes }
export async function getCategories() {
  const categUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCateg = await fetch(categUrl);
  const respCateg = await fetchCateg.json();

  return respCateg;
}

// Chama API dos produtos por categoria/termo { Todos do grupo presentes }
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (query === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (categoryId === '') {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }

  const response = await fetch(url);
  const returnedObject = await response.json();

  return returnedObject;
}
