// Product interface for individual product items
interface Product {
  id: number;
  name: string;
  price: number;
  productCode: string;
  barcode: string;
  stock: number;
  status: boolean;
  category: string;
  description: string;
  imageUrl: string;
}

// Response interface for the API response
interface ProductResponse {
  message: string;
  status: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  data: Product[];
}
