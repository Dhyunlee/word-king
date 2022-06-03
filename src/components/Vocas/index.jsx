import { Link } from 'react-router-dom';
import { VocaList, VocaItem } from './style';
import Spinner from './../Spinner/index';

const Vocas = ({ loading, vocas, delBtn }) => {
  console.log(loading);
  return (
    <VocaList>
      {loading && <Spinner />}
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
