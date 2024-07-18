const chooseGenEl = document.querySelector("#searchOutcome")
const genEl = document.querySelectorAll(".gen")
const bannerEl = document.querySelector("#banner")
const searchEl = document.querySelector("#searchBox")
const spanEl = document.querySelector("#spanEl")
const vbookEl = document.querySelector("#vbook")
const newSpanEl = document.querySelector("#spans")
const backEl = document.querySelector("#backButton")
chooseGenEl.style.display = "none"
newSpanEl.style.display = "none"

class Book {
    constructor(img, bookName, author, rating, ratingImg, price, genre) {
        this.img = img;
        this.bookName = bookName;
        this.author = author;
        this.rating = rating;
        this.ratingImg = ratingImg;
        this.price = price;
        this.genre = genre;
        this.createEl()
        this.createEl2()

    }
    createEl() {
        let elem = document.createElement('div')
        elem.setAttribute("class", "bookdiv")

        let imageEl = document.createElement('div')
        imageEl.setAttribute("class", "bookimg")
        let nameEl = document.createElement('div')
        nameEl.setAttribute("class", "bookname")
        let authorEl = document.createElement('div')
        authorEl.setAttribute("class", 'bookauthor')
        let ratingEl = document.createElement('div')
        ratingEl.setAttribute("class", "bookrating")
        let priceEl = document.createElement('div')
        priceEl.setAttribute("class", "bookprice")
        let img = document.createElement('img')
        img.setAttribute('src', this.img)
        imageEl.appendChild(img)
        nameEl.innerText = this.bookName
        authorEl.innerText = this.author
        ratingEl.innerText = this.rating.toFixed(1)
        priceEl.innerText = this.price
        elem.appendChild(imageEl)
        elem.appendChild(nameEl)
        elem.appendChild(authorEl)
        elem.appendChild(ratingEl)
        elem.appendChild(priceEl)
        this.elem = elem;
        elem.addEventListener('click', () => {
            vbookEl.innerHTML = ""
            chooseGenEl.style.display = "none"
            vbookEl.appendChild(this.viewBook)
            vbookEl.style.display = "flex"
        })

    }
    createEl2() {
        let viewBook = document.createElement('div')
        viewBook.setAttribute("class", "newView")
        let bookDetails = document.createElement('div')
        bookDetails.setAttribute("class", "bdetails")
        let otherBooks = document.createElement('div')
        otherBooks.setAttribute("class", "otherbooks")
        viewBook.append(otherBooks, bookDetails)
        let img = document.createElement('img')
        img.setAttribute("class", "bimage")
        img.setAttribute('src', this.img)

        let details = document.createElement('div')
        details.setAttribute("class", "details")
        bookDetails.append(img, details)

        let bname = document.createElement('div')
        bname.innerText = this.bookName
        bname.setAttribute("class", "bname")

        let aname = document.createElement('div')
        aname.setAttribute("class", "aname")
        aname.innerText = "By " + this.author

        let brating = document.createElement('div')
        brating.setAttribute("class", "brating")
        brating.innerText = this.rating.toFixed(1)

        let bRatingimg = document.createElement('img')
        bRatingimg.setAttribute('src', this.ratingImg)
        bRatingimg.setAttribute("class", "bRatingimg")

        let bprice = document.createElement('div')
        bprice.setAttribute("class", "bprice")
        bprice.innerText = this.price

        let bookFeatures = document.createElement('div')
        bookFeatures.setAttribute("class", "bookFeatures")
        let freeDelivery = document.createElement('div')
        freeDelivery.setAttribute("class", "freeDelivery")
        let deliveryImg = document.createElement('img')
        freeDelivery.appendChild(deliveryImg)
        deliveryImg.setAttribute('src', 'assets/freedelivery.jpg')
        deliveryImg.setAttribute("class", "freeDeliveryIcon")
        freeDelivery.innerHTML += "Free Delivery"

        let priceArray = this.price.split("")
        priceArray.shift()
        let priceNum = Number(priceArray.join(""))
        if (priceNum >= 499) {
            bookFeatures.append(freeDelivery)
        }



        let returnEl = document.createElement('div')
        returnEl.setAttribute("class", "returnEl")
        let returnImg = document.createElement('img')
        returnImg.setAttribute('src', 'assets/returnable.jpg')
        returnImg.setAttribute("class", "returnImg")
        returnEl.appendChild(returnImg)
        returnEl.innerHTML += "7 days return <br> policy"


        let limitedEl = document.createElement('div')
        limitedEl.setAttribute("class", "returnEl")
        let limitedImg = document.createElement('img')
        limitedImg.setAttribute('src', 'assets/limited.jpg')
        limitedImg.setAttribute("class", "returnImg")
        limitedEl.appendChild(limitedImg)
        limitedEl.innerHTML += "Limited Edition"




        bookFeatures.append(returnEl, limitedEl)




        if (this.rating == 4) {
            bRatingimg.setAttribute('src', '')
        }
        else if (this.rating == 3) {
            bRatingimg.setAttribute('src', '')
        }
        else if (this.rating == 4.5) {
            bRatingimg.setAttribute('src', '')
        }
        else if (this.rating == 4.7) {
            bRatingimg.setAttribute('src', '')
        }
        else if (this.rating == 5) {
            bRatingimg.setAttribute('src', '')
        }

        let addOrBuy = document.createElement('div')
        addOrBuy.setAttribute("class", "addOrBuy")
        let addToCart = document.createElement('button')
        addToCart.setAttribute("class", "cartButton")
        addToCart.innerText = "Add to cart"
        let buy = document.createElement('button')
        buy.innerText = "Buy"
        buy.setAttribute("class", "buyButton")

        addOrBuy.append(addToCart, buy)

        details.append(bname, aname, brating, bRatingimg, bprice, addOrBuy, bookFeatures)

        let reviewEl = document.createElement('div')
        reviewEl.setAttribute("class", "review")
        let inputEl = document.createElement('input')
        inputEl.setAttribute("placeholder", "Add a review")
        inputEl.setAttribute("class", "inputEl")

        let submitEl = document.createElement('button')
        submitEl.innerText = "Add"
        submitEl.setAttribute("class", "submitEl")
        reviewEl.append(inputEl, submitEl)
        viewBook.appendChild(reviewEl)
        this.viewBook = viewBook;
    }



}

let library = [new Book("assets/itendswithus.jpg", "It Ends With Us", "Colleen Hoover", 4.5, "", "₹309", "Romance"), new Book("assets/lookingforalaska.jpg", "Looking For Alaska", "John Green ", 3.0, "", "₹325", "Romance"), new Book("assets/kafkaonthe.jpg", "Kafka On The Stone", "Philip Gabriel", 4.0, "", "₹217", "Fantasy"), new Book("assets/redwall.jpg", "Redwall", "Brian Jacques", 4.0, "", "₹229", "Fantasy"), new Book("assets/yourstruly.jpg", "Yours Truly", "Abby Jimenez", 5.0, "", "₹432", "Romance"), new Book("", "The Wind On The Haunted Hill", "Ruskin Bond", 5.0, "", "₹148", "Horror"), new Book("", "IT", "Stephen King", 5.0, "", "₹438", "Horror"), new Book("", "The King In Yellow", "R W Chambers", 4.5, "", "₹312", "Horror"), new Book("", "Black Forest", "Shane Lee", 3.0, "", "₹521", "Horror"), new Book("assets/goodgirl.jpeg", "A Good Girl's Guide To Murder", "Holly Jackson", 5.0, "", "₹324", "Thriller"), new Book("assets/goodgirlbadblood.jpeg", "Good Girl, Bad Blood", "Holly Jackson", 4.5, "", "₹300", "Thriller"), new Book("assets/asgood.jpg", "As Good As Dead", "Holly Jackson", 5.0, "", "₹293", "Thriller"), new Book("", "The Silent Patient", "Alex Michaelides", 4.5, "", "₹204", "Thriller"), new Book("", "The Girl In The Room 105", "Chetan Bhagat", 4.0, "", "₹170", "Thriller"), new Book("", "The Girl At My Door", "Rebecca Griffiths", 4.0, "", "₹586", "Thriller"), new Book("assets/acourtof.jpg", "A Court Of Thorns", "Sarah J.Maas", 4.5, "", "₹", "Young Adult"), new Book("assets/aseparatepeace.jpg", "A Separate Peace", "John Knowles", 4.0, "", "₹", "Young Adult"), new Book("assets/aseriesof.jpg", "A Series Of Unfortunate Events", "Lemony Snicket", 4.5, "", "₹", "Young Adult"), new Book("assets/allthebright.jpg", "All The Bright Places", "Jennifer Niven", 4.5, "", "₹", "Young Adult"), new Book("assets/beforewewere.webp", "Before We Were Free", "Julia Alvarez", 4.5, "", "₹", "Young Adult"), new Book("assets/agentleman.jpg", "A Gentleman In Moscow", "Amor Towles", 4.5, "", "₹370", "Historical Fiction"), new Book("assets/thesecretm.jpg", "The Secret Messenger", "Mandy Robotham", 4.5, "", "₹306", "Historical Fiction"), new Book("assets/daughterof.jpg", "Daughter Of The Moon Goddess", "Sue Lynn Tan", 4.5, "", "₹426", "Historical Fiction"), new Book("assets/daughterswar.jpg", "Daughters Of War", "Dinah Jefferies", 4.5, "", "₹396", "Historical Fiction"), new Book("assets/thelast.jpg", "The Last Lifeboat", "Hazel Gaynor", 4.5, "", "₹401", "Historical Fiction"), new Book("", "The Naga Warriors", "Akshat Gupta", 4.5, "", "₹188", "Action & Adventure"), new Book("", "Three Men In A Boat", "Jerome K Jerome", 4.5, "", "₹309", "Action & Adventure"), new Book("", "The Demon Code", "David Leadbeater", 4.0, "", "₹932", "Action & Adventure"), new Book("", "The Jungle Book", "Rudyard Kipling", 4.5, "", "₹158", "Action & Adventure"), new Book("", "Around The World In Eighty Days", "Jules Verne", 4.5, "", "₹149", "Action & Adventure"), new Book("", "12 Years A Slave : A Trur Story", "Solomon Northup", 4.5, "", "₹149", "True Crime"), new Book("", "The Highway Murders", "Sourabh Mukherjee", 4.0, "", "₹214", "True Crime"), new Book("", "Murder In The Family", "Cara Hunter", 4.0, "", "₹358", "True Crime"), new Book("", "Under And Alone", "William Queen", 4.5, "", "₹440", "True Crime"), new Book("", "The Idol Thief", "S Vijay Kumar", 4.5, "", "₹272", "True Crime"), new Book("assets/hp1.jpg", "Harry Potter And The Philosopher's Stone", "J K Rowling", 5.0, "", "₹398", "Fantasy"), new Book("assets/blueumbrella.jpg", "The Blue Umbrella", "Ruskin Bond", 4.5, "", "₹125", "Fantasy"), new Book("assets/hp2.jpg", "Harry Potter And The Chamber Of Secrets", "J K Rowling", 4.7, "", "₹299", "Fantasy"), new Book("assets/stolenmagic.jpg", "City Of Stolen Magic", "Nazneen Ahmed Pathak", 4.5, "", "₹306", "Fantasy"), new Book("assets/hp3.jpg", "Harry Potter And The Prisoners Of Azkaban", "J K Rowling", 4.5, "", "₹349", "Fantasy"), new Book("assets/hp4.jpg", "Harry Potter And The Goblet Of Fire", "J K Rowling", 5.0, "", "₹472", "Fantasy"), new Book("assets/shadowbone.jpg", "Shadow And Bone", "Leigh Bardugo", 4.5, "", "₹200", "Fantasy"), new Book("", "Long Walk To Freedom", "Nelson Mandela", 4.5, "", "₹500", "Auto Biography"), new Book("", "Wings Of Fire", "A P J Abdul Kalam", 4.7, "", "₹187", "Auto Biography"), new Book("", "Playing It My Way", "Sachin Tendulkar", 4.5, "", "₹379", "Auto Biography")]


let array = []

for (each of genEl) {
    each.addEventListener("click", (e) => {
        for (one of library) {
            if (one.genre == e.currentTarget.innerText) {
                array.push(one)
                spanEl.innerText = one.genre
                bannerEl.style.display = "none"
                chooseGenEl.style.display = "flex"
                chooseGenEl.appendChild(one.elem)
                newSpanEl.style.display = "flex"
            }
        }
    })
}

searchEl.addEventListener("input", () => {
    const userInput = searchEl.value
    console.log(userInput)
    chooseGenEl.innerHTML = "";
    newSpanEl.style.display = "none"
    bannerEl.style.display = "flex"
    for (one of library) {
        console.log(one)
        if (one.bookName == userInput || one.author == userInput) {
            array.push(one)
            spanEl.innerText = userInput
            bannerEl.style.display = "none"
            chooseGenEl.style.display = "flex"
            vbookEl.style.display = "none"
            chooseGenEl.appendChild(one.elem)
            newSpanEl.style.display = "flex"
            console.log(one)
        }
    }
})

backEl.addEventListener('click',()=>{
    chooseGenEl.style.display = 'none'
    vbookEl.style.display = "none"
    bannerEl.style.display = "flex"
    newSpanEl.style.display = "none"
    chooseGenEl.innerHTML = ""
})
