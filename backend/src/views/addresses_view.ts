import Address from '../models/Address';

export default {
  render(address: Address) {
    return {
      id: address.id,
      address: address.address,
      complement: address.complement,
      city: address.city,
      state: address.state,
      country: address.country,
      zip_code: address.zip_code
    };
  }
}