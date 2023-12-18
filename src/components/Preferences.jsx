import { useState } from "react";

export default function Preferences(props) {
  const [localPrefs, setLocalPrefs] = useState(props.preferences);

  return (
    <div id="ItemPanel" className={`${localPrefs.color}`}>
      <div className="PreferencesDialog">
        <header>
          <div className="Logo">
            <div className="colored">RrHN</div>
            <div className="title">Settings</div>
          </div>
        </header>
        <label htmlFor="listSizeField">
          Show{" "}
          <input
            type="number"
            onChange={(e) =>
              setLocalPrefs({ ...localPrefs, listSize: e.target.value })
            }
            id="listSizeField"
            value={localPrefs.listSize}
          />{" "}
          items in the list.
        </label>
        <label htmlFor="colorField">
          color:
          <select
            value={localPrefs.color}
            onChange={(e) =>
              setLocalPrefs({ ...localPrefs, color: e.target.value })
            }
            id="colorField"
          >
            <option>orange</option>
            <option>green</option>
            <option>brown</option>
          </select>
        </label>
        <div className="dialogButtons">
          <button onClick={() => props.setPreferences(localPrefs)}>OK</button>
          <button onClick={() => props.togglePrefs()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
