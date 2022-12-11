import { useEffect, useState } from "react";
import Album from "./interfaces/Album";
import { PostFeed } from "./components/PostFeed/PostFeed";
import "./App.css";
import { Login } from "./components/Login/Login";
import { TopBar } from "./components/TopBar/TopBar";
import { authContext } from ".";

const App = () => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const isAuthorized = false;
  const getAlbums = async (): Promise<Array<Album>> => {
    return await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data: Array<Album>) => data);
  };

  useEffect(() => {
    getAlbums().then((data) => setAlbums(data));
  }, []);

  return (
    <authContext.Consumer>
      <TopBar />{" "}
      {isAuthorized ? (
        <>
          <h1>Albums</h1>
          <PostFeed albums={albums}></PostFeed>
        </>
      ) : (
        <Login />
      )}{" "}
    </authContext.Consumer>
  );
};

export default App;
