import { Link } from 'react-router-dom';
import { VocaList, VocaItem } from './style';

const Vocas = ({ loading, vocas, delBtn }) => {
  return (
    <VocaList>
      {vocas.map(item => (
        <VocaItem key={item.id}>
          <Link to={`/word?name=${item.voca}`}>{item.voca}</Link>
          <button onClick={() => delBtn(item)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </VocaItem>
      ))}
    </VocaList>
  );
};
export default Vocas;
