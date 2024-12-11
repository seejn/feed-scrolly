import formatRelativeTime from "../utils/relativeTime.js";

const feeds = async () => {
    const response = await fetch('./src/data/feeds.json');
    const data = await response.json();
    let initialIndex = 0;
    
    const getFeed = (limit) => {
        if(initialIndex + limit === data.length + 1){
            initialIndex = 0;
        }
        const endIndex = Math.min(initialIndex + limit, data.length + 1);
        const slicedData = data.slice(initialIndex, endIndex);

        const responseData = slicedData.map(data => (
            {
                ...data,
                feedImage: `./src/assets/images/feed-images/${data["feedImage"]}`,
                avatar: `./src/assets/images/avatar/${data["avatar"]}`,
                postedAt: formatRelativeTime(data["postedAt"])
            }
        ));
        initialIndex = endIndex;

        return responseData;
    }
    return getFeed;
}

export default feeds;
