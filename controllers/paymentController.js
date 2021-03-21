const { checkout } = require('../routes/payment');

class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  async getMercadopagoLink(req, res) {
    const { name, price, unit, img } = req.body;
    try {
      const checkout = await this.paymentService.createPaymentMercadoPago(
        name,
        price,
        unit,
        img
      );
      // res.redirect(checkout.init_point);
      res.json({ url: checkout.init_point });
    } catch (e) {
      res.status(500).json({ error: 'Internal Error' });
    }
  }

  webhook(req, res) {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        console.log(body, 'webhook response =>');
        res.end('ok');
      });
    }
    res.status(200);
  }
}

module.exports = PaymentController;
