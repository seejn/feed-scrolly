const feeds = async () => {
    const response = await fetch('../data/feeds.json');
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
                feedImage: `../assets/images/feed-images/${data["feedImage"]}`,
                avatar: `../assets/images/avatar/${data["avatar"]}`,
            }
        ));
        initialIndex = endIndex;

        return responseData;
    }
    return getFeed;
}

export default feeds;