import { IsUser } from '@/components/api/fetcher/user';
import { useGetUser } from '@/components/api/hooks/user';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const user = () => {
  const { userList, isLoading, isFetched } = useGetUser();

  console.log('userList', userList);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {!isLoading ? userList.map((e) => e.name) : ''}
    </div>
  );
  // return <></>;
};

export default user;
