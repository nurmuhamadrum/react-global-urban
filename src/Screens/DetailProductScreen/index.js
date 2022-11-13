import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";
import CHeader from '../../Components/CHeader';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function DetailProduct() {
  let query = useQuery();
  let id = Number(query.get('id'));

  return (
    <React.Fragment>
      <CHeader/>

      {/** NEXT HENDLE DETAIL HERE */}
    </React.Fragment>
  )
}
