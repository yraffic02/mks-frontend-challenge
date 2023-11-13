import { useQuery } from 'react-query';
import { apiMks } from "@/lib/Api/mksApi";

interface IPropsQueryProducts {
  page: number, 
  rows: number, 
  sortBy: string, 
  orderBy: string
}

export const useProductsQuery = (
 { 
  page, 
  rows, 
  sortBy, 
  orderBy
}
:IPropsQueryProducts) => {
  return useQuery(['products', page], async () => {
    try {
      const res = await apiMks.get('/products', {
        params: { page, rows, sortBy, orderBy },
      });
      return res.data;
    } catch (error) {
      throw new Error('Erro ao buscar produtos');
    }
  });
};