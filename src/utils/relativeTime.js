const formatRelativeTime = (inputDate) => {
    const now = new Date();
    const givenDate = new Date(inputDate);

    if (isNaN(givenDate.getTime())) {
        throw new Error("Invalid date provided");
    }

    const diffInSeconds = Math.floor((now - givenDate) / 1000);


    if (diffInSeconds < 60) {
        return `${diffInSeconds} ${diffInSeconds > 1 ? "seconds" : "second"} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} ${diffInMinutes > 1 ? "minutes" : "minute"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} ${diffInHours > 1 ? "hours" : "hour"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} ${diffInDays > 1 ? "days" : "day"} ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks} ${diffInWeeks > 1 ? "weeks" : "week"} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30); // Approximation
    if (diffInMonths < 12) {
        return `${diffInMonths} ${diffInMonths > 1 ? "months" : "month"} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} ${diffInYears > 1 ? "years" : "year"} ago`;
};

export default formatRelativeTime;