const formatRelativeTime = (inputDate) => {
    const now = new Date();
    const givenDate = new Date(inputDate);

    if (isNaN(givenDate.getTime())) {
        throw new Error("Invalid date provided");
    }

    const diffInSeconds = Math.floor((now - givenDate) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} days ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks} weeks ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30); // Approximation
    if (diffInMonths < 12) {
        return `${diffInMonths} months ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} years ago`;
};

export default formatRelativeTime;