import httpRequest from "services/httpRequest"

export const getAllProduct = async () => {
  return httpRequest.get("/product/get-all-product", {
    showSpinner: true,
  })
}

export const postAddProduct = async (data: any) => {
  return httpRequest.post("/product/add-product", data, {
    showSpinner: true,
  })
}

export const patchSetHot = async (id: string) => {
  return httpRequest.patch(
    `/product/set-hot/${id}`,
    {},
    {
      showSpinner: true,
    },
  )
}

export const putUpdateProduct = async (id: string, data: any) => {
  return httpRequest.put(`/product/update-product/${id}`, data, {
    showSpinner: true,
  })
}

export const deleteProduct = async (id: string) => {
  return httpRequest.delete(`/product/${id}`, {
    showSpinner: true,
  })
}
