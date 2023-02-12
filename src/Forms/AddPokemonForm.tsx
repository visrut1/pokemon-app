import React, { useState } from "react";
import { BASE_URL } from "../env";
import "./forms.css";

const AddPokemonForm = () => {
  const [name, setName] = useState<string>("");
  const [power, setPower] = useState<string>("");

  const [popUp, setPopUp] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [popUpMessage, setPopUpMessage] = useState<string>("");

  const isDisabled = name === "" && power === "";

  const postFormData = async (name: string, power: string) => {
    try {
      const response = await fetch(`${BASE_URL}/pokemons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          powerName: power,
        }),
      });
      const data = await response.json();
      if (response.status === 400) {
        setPopUpMessage(data.message);
        setIsSuccess(false);
      }

      if (response.ok) {
        setName("");
        setPower("");
        setPopUpMessage(`Pokemon created: ${data.name}`);
        setIsSuccess(true);
      }
      setPopUp(true);
    } catch (error: any) {
      setIsSuccess(false);
      setPopUpMessage(error);
      setPopUp(true);
    }
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postFormData(name, power);
  };

  return (
    <div className="min-h-full p-14">
      {popUp && (
        <div
          className={isSuccess ? "Pop_Up_Success" : "Pop_Up_Error"}
          role="alert"
        >
          <strong className="font-bold">
            {isSuccess ? "Success: " : "Error: "}
          </strong>
          <span className="block sm:inline">{popUpMessage.toString()}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setPopUp(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Pikachu"
            autoFocus={true}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Power
          </label>
          <input
            id="power"
            type="text"
            value={power}
            placeholder="Fire"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => setPower(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={isDisabled ? "Add_Button_Disabled" : "Add_Button"}
            disabled={isDisabled}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPokemonForm;
