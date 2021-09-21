import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <>
        <head>
          <title>{ /* Titulo do produto */ }</title>
        </head>
        <main>
          <section>
            aqui vai o botão de voltar e o carrinho de compras
          </section>
          <section>
            <h2>aqui vai o título e o preço do produto</h2>
            <section>
              <Image
                src={}
                alt={}
              />
              <EspecificsTecnics
                title={}
                especific={}
              />
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default Product;
