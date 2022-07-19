import React from 'react';
import './App.css';
import FilmContainer from './components/FilmContainer';

function App() {
  const [watchedValue, setWatchedValue] = React.useState<string>('');
  const [yearValue, setYearValue] = React.useState<string>('');
  const [watched, setWatched] = React.useState<Array<string>>([]);
  const [toWatch, setToWatch] = React.useState<Array<string>>([]);

  const watchedButtonHandler = () => {
    setWatched((previous) => [...previous, watchedValue]);
  };

  const search = async () => {};

  return (
    <div id="container">
      <FilmContainer
        key="watched"
        header="Assistidos"
        name={watchedValue}
        year={yearValue}
        yearChange={(e) => setWatchedValue(e.target.value)}
        nameChange={(e) => setYearValue(e.target.value)}
        list={watched}
        buttonHandler={watchedButtonHandler}
      />
      <FilmContainer key="toWatch" header="Para assistir" list={toWatch} />
    </div>
  );
}

export default App;
