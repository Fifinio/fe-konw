import { FC } from "react";
import Album from "../../interfaces/Album";
import "./postfeed.css";

export const PostFeed: FC<{ albums: Album[] }> = (props: {
  albums: Array<Album>;
}) => {
  return (
    <div className="post-feed">
      {props.albums.map((album: Album) => (
        <div className="album" key={album.id}>
          <a href={"/" + album.id}>{album.title}</a>
        </div>
      ))}
    </div>
  );
};
