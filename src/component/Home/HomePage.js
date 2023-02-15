import videoHomePage from "../../asset/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video loop autoPlay muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">You don't want to make a borung form and your audience won't ansswer one. creat a typeform instead - and make every one happy</div>
        <div className="title-3">
            <button >Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
