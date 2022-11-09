import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { IsUser } from '../fetcher/user';

export const queryUserKeys = {
  all: ['user'] as const,
};

export const useGetUser = () => {
  const { data, isLoading, isFetched } = useQuery(queryUserKeys.all, async () => await IsUser());

  return { userList: data as unknown as [{ id: number; name: string }], isLoading, isFetched };
};
