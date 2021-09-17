// Chama API das categorias { Todos do grupo presentes }
export async function getCategories() {
  const categUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCateg = await fetch(categUrl);
  const respCateg = await fetchCateg.json();

  return respCateg;
}

// Chama API dos produtos por categoria/termo { Todos do grupo presentes }
export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const productUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const fetchProduct = await fetch(productUrl);
  const respProduct = await fetchProduct.json();

  return respProduct;
}
