import type { FC } from "react";

interface User {
  name: string;
  imageUrl: string;
  imageSize: number;
}

const user: User = {
  name: "Hedy Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile: FC = () => {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
};

const App: FC = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default App;
