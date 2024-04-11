// Опишіть клас Restaurant(visitors, rating, avgPrice, private(feedbacks))
// feedbacks - Array of string
// Опишіть методи: deleteFeedback(feedback), addFeedback(feedback), clear - removes all the feedbacks
// Створіть екземпляр та протестуйте перелічені методи

class Restaurant {
    #feedbacks
    constructor (visitors, rating, avgPrice, feedback) {
        this.visitors = visitors;
        this.rating = rating;
        this.avgPrice = avgPrice;
        this.#feedbacks = feedback;
    }
    addFeedback (feedback) {
        this.#feedbacks.push(feedback);
    }
    deleteFeedback (feedback) {
        this.#feedbacks = this.#feedbacks.filter((fb) => fb !== feedback);
    }
    clearFeedback (feedback) {
        this.#feedbacks = [];
    }
}
const restaurant = new Restaurant(10, 4.8, 550, []);
console.log(restaurant);
restaurant.addFeedback('Nice alco');
console.log(restaurant);
restaurant.deleteFeedback('Nice alco');
console.log(restaurant);
restaurant.addFeedback('Nice alco');
restaurant.addFeedback('Nice snacks');
restaurant.clearFeedback();
console.log(restaurant);