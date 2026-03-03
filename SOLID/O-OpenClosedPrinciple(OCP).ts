// class PaymentProcessor {
//     processPayment(type: string, amount: number) {
//         if (type === "credit") {
//             console.log("Processing credit card payment:", amount);
//         }
//         else if (type === "paypal") {
//             console.log("Processing PayPal payment:", amount);
//         }
//     }
// }   

// const PP = new PaymentProcessor();
// PP.processPayment("credit", 500);


interface PaymentMethod {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("Processing credit card payment:", amount);
    }
}

class PaypalPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log("Processing PayPal payment:", amount);
    }
}

class PaymentProcessor {
    processPayment(method: PaymentMethod, amount: number) {
        method.pay(amount);
    }
}

const processor = new PaymentProcessor();
processor.processPayment(new CreditCardPayment(), 1000);
processor.processPayment(new PaypalPayment(), 500);