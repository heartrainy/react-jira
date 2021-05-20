import React, { useEffect, useState } from "react";

function SeachPanel() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [aa, setAa] = useState([])

  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {console.log(1)
        setList(await response.json());
      }
    });
  }, [param]);

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
        >
          <option value={""}>负责人</option>
        </select>
      </div>
    </form>
  );
}

export default SeachPanel;
