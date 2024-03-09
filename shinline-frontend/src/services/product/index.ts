import { type AxiosResponse } from 'axios';
import apiClient from '../axios';
import { ProductState } from '../../models';

export async function getProductList(
  params: object | undefined
): Promise<ProductState[]> {
  try {
    const response: AxiosResponse<ProductState[]> = await apiClient.get(
      '/products',
      {
        params,
      }
    );

    return response as unknown as ProductState[];
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
}
