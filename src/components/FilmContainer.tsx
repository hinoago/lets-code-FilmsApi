import { ChangeEvent } from 'react';

const FilmContainer = ({
  header,
  list,
  name,
  year,
  yearChange,
  nameChange,
  buttonHandler,
}: {
  header: string;
  list: Array<string>;
  name?: string;
  year?: string;
  yearChange?: (element: ChangeEvent<HTMLInputElement>) => void;
  nameChange?: (element: ChangeEvent<HTMLInputElement>) => void;
  buttonHandler?: () => void;
}) => {
  return (
    <div className="listContainer">
      <h1>{header}:</h1>
      <ul className="list">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {name != undefined &&
        year != undefined &&
        nameChange != undefined &&
        yearChange != undefined &&
        buttonHandler != undefined && (
          <div className="inputs">
            <input type="text" value={name} onChange={nameChange} placeholder="Nome do filme" />
            <input type="text" value={year} onChange={yearChange} placeholder="Ano" />
            <button onClick={buttonHandler}>Adicionar</button>
          </div>
        )}
    </div>
  );
};

export default FilmContainer;
