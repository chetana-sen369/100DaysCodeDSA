//100 Days Of Code
//Day-49
//Today’s Challenge - Carousel Ad Rotation System 
//Requirements:
//1. addAd(adName) → Insert a new ad at the end of the circular list.
//2. removeAd(adName) → Delete the first occurrence of the ad.
//3. showAds() → Traverse the list once and display all ads in rotation order.
//4. rotateAndShow(k) → Starting from the head ad, rotate k times and show which ad is currently being displayed.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Carousel {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addAd(adName) {
        let newNode = new Node(adName);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode; return;
        } else { newNode.next = this.head; this.tail.next = newNode; this.tail = newNode; }
    } removeAd(adName) {
        if (!this.head) return;
        // Single node case 
        if (this.head === this.tail && this.head.data === adName) {
            this.head = this.tail = null;
            return;
        }
        let current = this.head;
        let prev = this.tail;
        do {
            if (current.data === adName) {
                prev.next = current.next;
                if (current === this.head)
                    this.head = current.next;
                if (current === this.tail)
                    this.tail = prev;
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }
    showAds() {
        if (!this.head) {
            console.log("No Ads to show ");
            return;
        }
        const result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" -> "));
    }
    rotateAndShow(k) {
        if (!this.head) {
            console.log("No Ads to display");
            return;
        }
        let current = this.head;
        for (let i = 0; i < k; i++) {
            current = current.next;
        }
        console.log("Current Ad:", current.data);
    }
}
const carousel = new Carousel();
carousel.addAd("Nike");
carousel.addAd("Adidas");
carousel.addAd("Puma");
carousel.addAd("Reebok");
carousel.showAds();
carousel.rotateAndShow(5);
carousel.removeAd("Puma");
carousel.showAds();
carousel.rotateAndShow(3);




