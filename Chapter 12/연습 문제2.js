function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = new Queue();
}

Cashier.prototype.addOrder = function (customer) {
    this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = function () {
    const finishedCustomer = this.customers.dequeue();

    console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
}

let cashier = new Cashier();
let customer1 = new Customer('Jim', 'Fries');
let customer2 = new Customer('Sammie', 'Burger');
let customer3 = new Customer('Peter', 'Drink');

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); // Jim, your Fries is ready!
cashier.deliverOrder(); // Sammie, your Burger is ready!
cashier.deliverOrder(); // Peter, your Drink is ready!