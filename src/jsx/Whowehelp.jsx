import React, { useState } from 'react';

function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState('fundacje');
  const [activePage, setActivePage] = useState(1);

  const data = {
    fundacje: [
      { title: 'Fundacja "Dbam o Zdrowie"', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “Dla dzieci”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, meble, zabawki' },
      { title: 'Fundacja “Bez domu”', description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.', stuff: 'ubrania, jedzenie, ciepłe koce' },
      // Dodaj więcej fundacji według potrzeb
      { title: 'Fundacja “kolejna 4”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “kolejna 5”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “kolejna 6”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “kolejna 7”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “kolejna 8”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      { title: 'Fundacja “kolejna 9”', description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', stuff: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki' },
      
      // ...
    ],
    organizacje: [
      { title: 'Organizacja "lorem ipsum 1"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      { title: 'Organizacja "lorem ipsum 2"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      { title: 'Organizacja "lorem ipsum 3"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      // Dodaj więcej organizacji według potrzeb
      { title: 'Organizacja "lorem ipsum 4"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      { title: 'Organizacja "lorem ipsum 5"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      // ...
    ],
    lokalne: [
      { title: 'Lokalna zbiórka "lorem ipsum 1"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus ullam deleniti, repudiandae quidem nobis.', stuff: 'Lorem, ipsum dolor.' },
      { title: 'Lokalna zbiórka "lorem ipsum 2"', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem autem nihil cupiditate asperiores nam.', stuff: 'Lorem, ipsum dolor.' },
      { title: 'Lokalna zbiórka "lorem ipsum 3"', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi laborum quia modi suscipit ex hic!', stuff: 'Lorem, ipsum dolor.' },
      // Dodaj więcej lokalnych zbiórek według potrzeb
    ],
  };

  const itemsPerPage = 3;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActivePage(1);
  };

  const renderContent = () => {
    const currentData = data[activeTab];
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div className="wwh-list">
        <ul className="wwh-ul">
          {currentData.slice(startIndex, endIndex).map((item, index) => (
            <li key={index} className="wwh-li">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className="wwh-li-right">{item.stuff}</p>
              <hr className="wwh-hr" />
            </li>
          ))}
        </ul>
        {renderPagination(currentData.length)}
      </div>
    );
  };

  const renderPagination = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="pagination-wwh">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`wwh-btn ${pageNumber === activePage ? 'active' : ''}`}
            onClick={() => setActivePage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="wwh-container" id="whowehelp">
      <div className="wwh-text">
        <h1>Komu pomagamy?</h1>
        <img className="wwh-decoration" src="src\assets\Decoration.svg" alt="Decoration"></img>
        <div className="wwh-btns">
          <button className={`btn wwh-btn ${activeTab === 'fundacje' ? 'active' : ''}`} onClick={() => handleTabChange('fundacje')}>
            Fundacjom
          </button>
          <button className={`btn wwh-btn ${activeTab === 'organizacje' ? 'active' : ''}`} onClick={() => handleTabChange('organizacje')}>
            Organizacjom<br />pozarządowym
          </button>
          <button className={`btn wwh-btn ${activeTab === 'lokalne' ? 'active' : ''}`} onClick={() => handleTabChange('lokalne')}>
            Lokalnym<br />zbiórkom
          </button>
        </div>
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych{' '}
          {activeTab === 'fundacje'
            ? 'Fundacji'
            : activeTab === 'organizacje'
            ? 'Organizacji pozarządowych'
            : 'Lokalnych zbiórek'}, z <br />
          którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br />
          komu pomagają i czego potrzebują.
        </p>
      </div>

      {renderContent()}
    </div>
  );
}

export default WhoWeHelp;
