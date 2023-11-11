import AddPlayer from "./add_player/AddPlayer";
import DeletePlayer from "./add_player/DeletePlayer";
import UpdatePlayer from "./update/UpdatePlayer";

export interface Player {
  id: number;
  name: string;
  number: number;
}

const Player = async () => {
  const res = await fetch("http://localhost:3000/api/players");
  const players: Player[] = await res.json();

  return (
    <>
      <AddPlayer />
      <table className="table tab-bordered font-poppins">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.number}</td>
              <td>
                <UpdatePlayer id={p.id} />
              </td>
              <td>
                <DeletePlayer id={p.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Player;
