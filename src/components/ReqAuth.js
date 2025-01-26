import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../App';

export default function ReqAuth(props) {
  const datas = useContext(AuthContext) || {};

  if (!datas.user) {
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
}
