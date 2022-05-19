import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import VocaList from '../../components/ViewVocaList';
import { VocaListContainer } from './style.jsx';
import { DEV_KEY } from './../../constants/dev-key';

const { default_api_url } = DEV_KEY;

const VocaPage = () => {
  const [vocas, setVocas] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchVocaList = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${default_api_url}/vocas`);
      setVocas(data);
      setLoading(false);
    } catch (err) {
      alert('서버에 에러가 발생했습니다.', err.message);
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchVocaList();
  }, [fetchVocaList]);

  const delBtn = useCallback(async ({ id }) => {
    console.log('id', id);
    console.log('삭제 진행');
    if (window.confirm('삭제하시겠습니까?')) {
      /* 
        `http://localhost:5000/vocas?voca={name}`
        형태로 가져올 수 있음 
      */
      await axios.delete(`${default_api_url}/vocas/${id}`);
      window.location.reload();
    }
  }, []);

  return (
    <VocaListContainer>
      <VocaList loading={loading} vocas={vocas} delBtn={delBtn} />
    </VocaListContainer>
  );
};
export default VocaPage;