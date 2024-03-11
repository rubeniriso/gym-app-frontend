import { getAllSessions } from "@/model/Session.model";
import { Session } from "@/types/session";

export const SessionComponent = async () => {
  const data = await getAllSessions();
  console.log(data);
  return (
    <div>
      <h1>Session Data:</h1>
      <ul>
        {data.map((session: Session) => (
          <li key={session.session_id}>
            <h2>{session.name}</h2>
            <p>{session.description}</p>
            <p>Week ID: {session.week_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
