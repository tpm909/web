document.addEventListener("DOMContentLoaded", () => {
    new Gallery(tortas, 2500);
})

class Gallery {
    constructor(collection, delay = null) {
        this.htmlElement = document.getElementById("gallery-component");
        if (!this.htmlElement) {
            console.log("Se necesita un div #gallery")
            return null;
        }
        this.gallery = document.createElement("div");
        this.gallery.id = "gallery";
        this.htmlElement.appendChild(this.gallery);
        this.collection = collection;
        this.LAST_INDEX = collection.length - 1;
        this.DELAY = delay;

        this.btn_bar = document.createElement("div");
        this.btn_bar.id = "gal-btn-bar";

        this.btn_left = document.createElement("button");
        this.btn_left.innerText = "<";
        this.btn_left.addEventListener("click", () => this.moveLeft());
        this.btn_bar.appendChild(this.btn_left);

        this.btn_right = document.createElement("button");
        this.btn_right.innerText = ">";
        this.btn_right.addEventListener("click", () => this.moveRight());
        this.btn_bar.appendChild(this.btn_right);

        this.frame_prev = document.createElement("img");
        this.frame_prev.id = "prev-pic";
        this.frame_curr = document.createElement("img");
        this.frame_curr.id = "this-pic";
        this.frame_next = document.createElement("img");
        this.frame_next.id = "next-pic";

        this.gallery.appendChild(this.frame_prev);
        this.gallery.appendChild(this.frame_curr);
        this.gallery.appendChild(this.frame_next);
        this.htmlElement.appendChild(this.btn_bar);

        this.setX(0);
        return this;
    }


    setX(x) {
        this.x = x;
        this.prev = x > 0 ? x - 1 : this.LAST_INDEX;
        this.next = x < this.LAST_INDEX ? x + 1 : 0;
        this.repaint();
    }

    repaint() {
        const currentImg = this.collection[this.x];
        const prevImg = this.collection[this.prev];
        const nextImg = this.collection[this.next];
        
        this.frame_prev.src = prevImg.download_url;
        this.frame_curr.src = currentImg.download_url;
        this.frame_next.src = nextImg.download_url;

        this.frame_curr.alt = `A photo by ${currentImg.alt}.`

        if (this.interval)
            clearInterval(this.interval);
        if (this.DELAY)
            this.interval = setInterval(() => this.moveRight(), this.DELAY);
    }



    moveRight() {
        this.setX(this.next);
    }

    moveLeft() {
        this.setX(this.prev);
    }

}
