import React, { useState } from 'react';

const Search = ({ productos, setProductosFiltrados }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
   
    if (productos) {
      const filteredProducts = productos.filter(producto =>
        producto.titulo.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProductosFiltrados(filteredProducts);
    }
  };
  

  return (
    <div>
      <input
        className='input'
        placeholder='Buscar productos'
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
