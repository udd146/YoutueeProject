    const ContentCard = ({ youtubeData }) => {
        if (!youtubeData) {
        return <div>No data</div>;
        }
    
        const { id, snippet, statistics } = youtubeData;
    
        // console.log(youtubeData,"yoyoy")
        return (
        <div className="content-card-main">
            <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
            <h4>{snippet?.title}</h4>
            <p>{snippet?.channelTitle}</p>
            <p>Views: {statistics?.viewCount}</p>
        </div>
        );
    }

    
    export default ContentCard