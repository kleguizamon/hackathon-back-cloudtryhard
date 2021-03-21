const axios = require('axios');
const PaymentController = require('../controllers/paymentController');

class PaymentService {
  constructor() {
    this.token =
      'TEST-5230539707488780-031921-67b35d6a5e4f950591d2b2d60fde0e98-130798191';

    this.mercadopagoUrl = 'https://api.mercadopago.com/checkout';
  }

  async createPaymentMercadoPago(name, price, unit, img) {
    const url = `${this.mercadopagoUrl}/preferences?access_token=${this.token}`;

    const items = [
      {
        id: '123',
        title: 'Cloud Tryhard Subscription',
        description: 'Cloud Tryhard Subscription',
        image: 'https://i.postimg.cc/J44Gkr6g/mp-imge.jpg',
        category_id: '123',
        quantity: parseInt(1),
        currency_id: 'USD',
        unit_price: parseFloat(6),
      },
    ];

    const preferences = {
      items,
      external_reference: 'Cloud Tryhard',
      payer: {
        name: 'Roman',
        surname: 'Riquelme',
        email: 'hola@gmail.com',
        phone: {
          area_code: '11',
          number: '22222222',
        },
        address: {
          zip_code: '1111',
          street_name: 'test',
          street_number: '123',
        },
      },
      back_urls: {
        success: 'https://localhost:3000/success',
        pending: 'https://localhost:3000.com/pending',
        failure: 'https://localhost:3000.com/error',
      },
      notification_url: 'https://tryhard-cloud-api.herokuapp.com/webhook',
      auto_return: 'approved',
    };

    try {
      const request = await axios.post(url, preferences, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
        },
      });
      return request.data;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = PaymentService;
