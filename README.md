# FEED-SCROLLY [ Scrollable Feed ] 
This project implements a dynamic scrollable feed feature using mouse drag events. Data is fetched from data/feeds.json, and feed cards are rendered dynamically by recycling four feed components. The project utilizes a debounced mousemove event handler to enhance performance and ensure smooth scrolling interactions.

Live preview: https://feed-scrolly.vercel.app/

## INSTALLATION
```sh
git clone https://github.com/seejn/feed-scrolly.git
cd feed-scrolly
npm i
npx serve
````

## KEY FEATURES
- Data Handling
    => Feed data is fetched asynchronously, with images and avatars dynamically resolved from their respective directories. A getFeed function manages data slicing, ensuring a continuous feed loop.    
- Performance Optimization
    =>  A custom debounce utility limits frequent mousemove events to maintain responsiveness.
- Reusable Components
    => Four feed components are recycled to display fetched data, optimizing resource usage.

## LIMITATIONS
- Limited Data Handling Capacity
    => If the feeds.json dataset is very large, loading it entirely in memory might lead to performance issues, especially on devices with limited resources.
- Non-Responsive on Non-Mouse Devices
    => The reliance on mouse drag for scrolling may lead to poor user experience on touch-based or keyboard-based devices unless alternative interaction methods are implemented.
- No Error Handling for Fetch
    => The feeds function does not account for network errors or invalid responses, which could lead to the app failing silently in the event of a fetch failure.
- Recycling Limitations
    => Recycling only four feed components works well for simple scenarios, but rapid or large-scale scrolling could expose limitations in updating components smoothly without visible delays.
- Static Asset Paths
    => Hardcoding paths for images and avatars may lead to broken links if directory structures change or if the application needs to handle dynamic or remote assets.
- Circular Loop Ambiguity
    => The logic for looping back to the start (initialIndex) may create a slight delay or flicker when transitioning from the end of the dataset back to the beginning, impacting user experience.

## FUTURE IMPROVEMENTS
- Pagination
    => Implement lazy loading or infinite scrolling to load data.
- Dynamic Updates
    => Integrate real-time data updates via WebSockets or API polling to reflect the latest changes in the feed.
- Error Handling
   => Add error-handling mechanisms for the fetch function, such as retries and user notifications for network failures.
- Touch Support
   => Enable touch-based scrolling for mobile devices using touchstart, touchmove, and touchend events.
- Keyboard Navigation
    => Add keyboard navigation for better accessibility.
- Scroll Indicators
    => Provide visual cues, such as arrows or progress indicators, to enhance navigation.
- Adaptive Layouts
    => Make the feed responsive to different screen sizes and orientations, ensuring usability across devices.
- Feed Refresh
    => Add a "refresh" button to manually fetch the latest feed data.

