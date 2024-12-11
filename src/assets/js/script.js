import debounce from "../../hooks/debounce.js";
import feeds from '../../hooks/feed.js';

let getFeed;
let isDown = false, startY, endY;

const rotateFeedObj = {
    down: {
        feed1: "feed4",
        feed2: "feed1",
        feed3: "feed2",
        feed4: "feed3"
    },
    up: {
        feed1: "feed2",
        feed2: "feed3",
        feed3: "feed4",
        feed4: "feed1"
    },
};

const animateRotation = (direction) => {
    const feeds = Array.from(document.querySelectorAll("#feeds div.glass-card"));
    const order = rotateFeedObj[direction];

    feeds.forEach((feed) => {
        const currFeed = feed.dataset.feed;
        feed.dataset.feed = order[currFeed];
    });
};

const insertDataInDOM = (data, feed) => {
    const img = feed.children[0].children[0];
    const caption = feed.children[1].children[0];
    const avatar = feed.children[2].children[0];
    const username = feed.children[2].children[1].children[0];
    const postedAt = feed.children[2].children[1].children[1];

    img.src = data?.feedImage ?? "https://via.placeholder.com/400x300";
    caption.innerText = data?.caption;
    avatar.src = data?.avatar ?? "https://via.placeholder.com/50";
    username.innerText = `${data?.user?.firstname} ${data?.user?.lastname}`;
    postedAt.innerText = data?.postedAt;
};

const handleMouseMove = async (e) => {
    if (!isDown) return;
    endY = e.pageY;
    const dragThreshold = 30;

    // 30 pixel dragThreshold to trigger animation 
    if (Math.abs(endY - startY) > dragThreshold) {
        const direction = startY < endY ? "up" : "down";
        animateRotation(direction);

        try {
            // to set fetchedData to hidden feed-card on mouseMove

            const hiddenFeed = document.querySelector("div[data-feed=feed4]");
            const data = await getFeed(1);
            insertDataInDOM(data[0], hiddenFeed);
        } catch (error) {
            console.log(error);
        }

        isDown = false;
    }
}

const attachEventListenerToFeeds = () => {

    const feeds = document.querySelector("#feeds");

    feeds.addEventListener("mousedown", (e) => {
        isDown = true;
        startY = e.pageY;
    });

    feeds.addEventListener("mousemove", debounce(handleMouseMove, 50)); 
};

const initialization = async () => {
    try {
        getFeed = await feeds();
        const data = await getFeed(4);  
        attachEventListenerToFeeds();

        const feedHTMLCollection = document.querySelectorAll("div[data-feed]");
        const feedContainers = Array.from(feedHTMLCollection);

        // to set fetchedData to all feed-card on initialization
        feedContainers.forEach((feed, index) => {
            insertDataInDOM(data[index], feed);
        });
    } catch (error) {
        console.log(error);
    }
};

initialization();
