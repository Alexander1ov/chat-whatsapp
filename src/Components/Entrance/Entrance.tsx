import React, { useState } from "react";
import { Link } from "react-router-dom";

import { handleEntrance } from "../../store/chatSlice/chatSlice";
import { useAppDispatch } from "../../hooks/hooks";

import styles from "./Entrance.module.scss";

const Entrance = () => {
  const [user, setUser] = useState({ IdInstance: "", ApiTokenInstance: "" });
  const dispatch = useAppDispatch();
  const handleEntry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(handleEntrance(user));

    setUser({ IdInstance: "", ApiTokenInstance: "" });
  };
  return (
    <section className={styles.entrance}>
      <div className={styles.box}>
        <div className={styles.myBoxContent}>
          <p>
            Введите свои учетные данные из системы
            <Link to="https://green-api.com/" rel="noreferrer" target="_blank">
              {` GREEN-API `}
            </Link>
            (idInstance, apiTokenInstance)
          </p>
          <form onSubmit={handleEntry}>
            <input
              required
              type="text"
              placeholder="IdInstance"
              value={user.IdInstance}
              onChange={(e) => {
                setUser({ ...user, IdInstance: e.target.value });
              }}
            />
            <input
              required
              type="text"
              placeholder="ApiTokenInstance"
              value={user.ApiTokenInstance}
              onChange={(e) => {
                setUser({ ...user, ApiTokenInstance: e.target.value });
              }}
            />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Entrance;
