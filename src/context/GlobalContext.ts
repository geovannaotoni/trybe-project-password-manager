import { Dispatch, SetStateAction, createContext } from 'react';
import ServiceType from '../types/Service';

type GlobalContextType = {
  serviceList: ServiceType[];
  setServiceList: Dispatch<SetStateAction<ServiceType[]>>;
};

const GlobalContext = createContext<GlobalContextType>({
  serviceList: [],
  setServiceList: () => [],
});

export default GlobalContext;
